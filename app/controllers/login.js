module.exports.login_usuario = function (app, request, response) {
    let conn = app.config.dbconn();
    let loginUsuario = new app.app.models.loginDAO(conn);
    let body = request.body;
    let bcrypt = require('bcrypt');

    loginUsuario.valida_login(body, function (error, result) {
        if (!error && result.length > 0) {
            bcrypt.compare(body.senha, result[0].senha, async function (err, res) {
                if (res === true) {

                    request.session.user_id = result[0].user_id;
                    request.session.logged = true;

                    //Finalização de conexão
                    app.app.controllers.connections.db_end_connection(conn);

                    //Prefixo do usuário
                    request.session.prefix_user = await app.app.controllers.prefix.prefix_db_get(app, request.session.user_id);

                    //Recuperação de Token
                    //request.session.user_token = await app.app.controllers.tokens.token_check(app, request);

                    //Recuperação de usuário e senha
                    let username_password = await app.app.controllers.tokens.get_username_password(app, request.session.user_id);
                    request.session.username = username_password[0].username;
                    request.session.password = username_password[0].password;
                    response.redirect("/home");

                } else {
                    response.render("login/index", {validacao: [{'msg': 'usuário ou senha incorretos'}]})
                }
            })

        } else {
            if (error) {
                console.log(error);
                response.render("login/index", {validacao: [{'msg': 'erro ao realizar login'}]});
                return
            }

            if (result.length === 0) {
                response.render("login/index", {validacao: [{'msg': 'usuário não encontrado'}]});
            }
        }
    })

};


module.exports.login_dispositivo = async function (app, client, username, password, cb) {

    let conn = app.config.dbconn();
    let loginUsuario = new app.app.models.loginDAO(conn);
    let auth_error = new Error('Auth error');
    let ip, method, port;
    let dados = {};
    dados.username = username;
    dados.password = password;

    if (typeof (client.conn.remoteAddress) != "undefined") {
        method = "MQTT";
        ip = client.conn.remoteAddress.replace("::ffff:", "");
        port = client.conn.remotePort;
    }

    if (typeof (client.conn.socket) != "undefined") {
        method = "WebSocket";
        ip = client.conn.socket._socket.remoteAddress.replace("::ffff:", "");
        port = client.conn.socket._socket.remotePort;
    }

    //console.log(method, ip, port);
    //informações de conexão do cliente conectado

    client.conn.remoteIp = ip;
    client.conn.remotePort = port;
    client.conn.method_ = method;

    //if (username.search("token") === (-1)) {
    loginUsuario.login_dispositivo(dados, function (error, result) {
        if (!error && result.length > 0) {
            client.conn.user_id = result[0].user_id;

            //Finalização de conexão
            app.app.controllers.connections.db_end_connection(conn);

            conn_control(app, client, cb, auth_error, result[0].user_id, ip, port, method);

        } else {
            if (error) {
                auth_error.returnCode = 3;
                cb(auth_error, null)
            }

            if (result.length === 0) {
                auth_error.returnCode = 4;
                cb(auth_error, null)
            }
        }
    })
};

async function conn_control(app, client, cb, auth_error, user_id, ip, port, method) {
    let result1, result2, result3, result4, result5, resposta;

    try {
        //Verifica se é permitida a conexão do dispositivo
        result2 = await app.app.controllers.settings.get_server_option(app, 1, user_id);
    } catch (e) {
        throw new Error(e);
    }

    if (result2.length > 0) {
        auth_error.returnCode = 3;
        cb(auth_error, null);
        return;
    }

    try{
        //Verifica se o dispositivo existe no registro
        result1 = await app.app.controllers.devices.check_device_reg(app, user_id, client.id);
    }catch(e){
        throw new Error(e);
    }

    //Se houver um registro no banco, atribui, se não tem, recebe 0
    client.conn.device_id = result1[0] ? result1[0].device_id : 0;

    //Busca as permissões de publish e subscribe
    if (typeof (result1[0]) != "undefined") {
        client.publish_permission = result1[0].publish;
        client.subscribe_permission = result1[0].subscribe;

        //Permissões do dispositivo
        if (Number(result1[0].publish) === 2) {
            try{
                result4 = await app.app.controllers.devices.publish_perm(app, result1[0].device_id);
            }catch(e){
                throw new Error(e);
            }

            client.publish_topics = result4[0];
        }

        if (Number(result1[0].subscribe) === 2) {

            try{
                result5 = await app.app.controllers.devices.subscribe_perm(app, result1[0].device_id);
            }catch (e) {
                throw new Error(e);
            }

            client.subscribe_topics = result5[0];
        }
    }

    try{
        //controller de registro de conexões
        resposta = await app.app.controllers.connections.conn_mgmt_insert(app, user_id, client.id, ip, port, client.conn.device_id, method);
    }catch (e) {
        throw new Error(e);
    }


    try{
        //Prefixo do usuário
        result3 = await app.app.controllers.prefix.prefix_db_get(app, user_id);
    }catch (e) {
        throw new Error(e);
    }

    //id de Conexão
    client.conn.conn_id = resposta.insertId;

    //Prefixo
    client.prefix = result3;

    //callback de aceitação da conexão do dispositivo
    cb(null, true);

}

