module.exports.login_usuario = function(app, request, response){
	let conn = app.config.dbconn();
	let loginUsuario = new app.app.models.loginDAO(conn);
	let body = request.body;
	let bcrypt = require('bcrypt');

	loginUsuario.valida_login(body, function(error, result){
		if(!error && result.length > 0){
			bcrypt.compare(body.senha, result[0].senha,  async function (err, res) {
				if (res === true) {

					request.session.user_id = result[0].user_id;
					request.session.logged = true;

					//Finalização de conexão
					app.app.controllers.connections.db_end_connection(conn);

					//Prefixo do usuário
                    request.session.prefix_user = await app.app.controllers.prefix.prefix_db_get(app, request.session.user_id);

					//Recuperação de Token
                    request.session.user_token = await app.app.controllers.tokens.token_check(app, request);

					response.redirect("/home");

				} else {
					response.render("login/index", {validacao: [{'msg': 'usuário ou senha incorretos'}]})
				}
			})
			
		}else{
			if(error){
				console.log(error);
				response.render("login/index",{validacao : [{'msg':'erro ao realizar login'}]});
				return
			}

			if(result.length === 0){
				response.render("login/index",{validacao : [{'msg':'usuário não encontrado'}]});
			}
		}
	})

};


module.exports.login_dispositivo = async function (app, client, username, password, cb) {

    let conn = app.config.dbconn();
    let loginUsuario = new app.app.models.loginDAO(conn);
    let bcrypt = require('bcrypt');
    let auth_error = new Error('Auth error');
    let ip, method, port;
    dados = {};
    dados.email = username;

    try {
        method = "mqtt_socket";
        ip = client.conn.remoteAddress.replace("::ffff:", "");
        port = client.conn.remotePort;
    } catch (e) {
        console.log(e)
    }

    if (typeof (ip) == "undefined") {
        try {
            method = "websocket";
            ip = client.conn.socket._socket.remoteAddress.replace("::ffff:", "");
            port = client.conn.socket._socket.remotePort;
        } catch (e) {
            console.log(e)
        }
    }

    console.log(method, ip, port);
    //informações de conexão do cliente conectado

    client.conn.remoteIp = ip;
    client.conn.remotePort = port;
    client.conn.method_ = method;

    if (username.search("token") === (-1)) {
        loginUsuario.valida_login(dados, function (error, result) {
            if (!error && result.length > 0) {
                bcrypt.compare(password.toString(), result[0].senha, async function (err, res) {
                    if (res === true) {

                        client.conn.user_id = result[0].user_id;

                        //Finalização de conexão
                        app.app.controllers.connections.db_end_connection(conn);

                        conn_control(app, client, cb, auth_error, result[0].user_id, ip, port);

                    } else {
                        auth_error.returnCode = 4;
                        cb(auth_error, null)
                    }
                })

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
    } else if (username.search("token") > -1) {
        let resposta;
        //checa se o token é válido
        try{
            resposta = await app.app.controllers.tokens.token_user_compare(app, username.replace("token:",""));
        }catch (e) {
            console.log(e);
        }

        console.log(resposta);

        //Id do usuário
        client.conn.user_id = resposta[0].user_id;
        conn_control(app, client, cb, auth_error, resposta[0].user_id, ip, port);


    } else {
        auth_error.returnCode = 4;
        cb(auth_error, null);
    }

};

async function conn_control(app, client, cb, auth_error, user_id, ip, port){
    let result1, result2, result3;

    try{
        //Verifica se o dispositivo existe no registro
        result1 = await app.app.controllers.devices.check_device_reg(app, user_id, client.id);

        //Verifica se é permitida a conexão do dispositivo
        result2 = await app.app.controllers.settings.get_server_option(app, 1, user_id);
    }catch (e) {
        console.log(e)
    }

    if(result2.length > 0){
        auth_error.returnCode = 3;
        cb(auth_error, null);
        return;
    }

    let device_id = result1[0] ? result1[0].device_id : 0;
    if(typeof (device_id) != "undefined"){
        client.conn.device_id = device_id;
    }

    try{
        //controller de conexões
        let resposta  = await app.app.controllers.connections.conn_mgmt_insert(app, user_id, client.id, ip, port, device_id);
        
        //Recuperação de token
        //app.app.controllers.tokens.token_check(app, request);
        //Carrega prefixo do usuario

        //Prefixo do usuário
        result3 = await app.app.controllers.prefix.prefix_db_get(app, user_id);

        client.conn.conn_id = resposta.insertId;
        client.prefix  = result3;
    }catch (e) {

        console.log(e)
    }

    //callback de aceitação da conexão do dispositivo
    cb(null, true);
}

