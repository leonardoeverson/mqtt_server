module.exports.login_usuario = function(app, request, response){
	var conn = app.config.dbconn();
	var loginUsuario = new app.app.models.loginDAO(conn);
	var body = request.body;
	var bcrypt = require('bcrypt');

	loginUsuario.valida_login(body, function(error, result){
		if(!error && result.length > 0){
			bcrypt.compare(body.senha, result[0].senha,  async function (err, res) {
				if (res === true) {

					request.session.id_user = result[0].id_user;
					request.session.logged = true;

					//Finalização de conexão
					app.app.controllers.connections.db_end_connection(conn);

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


module.exports.login_dispositivo = function(app, client, username, password, cb){

	let conn = app.config.dbconn();
	let loginUsuario = new app.app.models.loginDAO(conn);
	let bcrypt = require('bcrypt');
	let auth_error = new Error('Auth error');
  	let ip, method, port;
	dados = {};
	dados.email = username;
	  
	try{
  		method = "mqtt_socket";
  		ip = client.conn.remoteAddress.replace("::ffff:","");
  		port = client.conn.remotePort;
  	}catch(e){
  		console.log(e)
 	}

  	if(typeof(ip) == "undefined"){
  		try{
  			method = "websocket";
  			ip = client.conn.socket._socket.remoteAddress.replace("::ffff:","");
  			port = client.conn.socket._socket.remotePort;
  		}catch(e){
  			console.log(e)
  		}
  	}

  	console.log(method, ip, port);

  	if(username.search("token") === (-1)){
        loginUsuario.valida_login(dados, function(error, result){
            if(!error && result.length > 0){
                bcrypt.compare(password.toString(), result[0].senha, async function (err, res) {
                    if (res === true) {

                        //informações de conexão do cliente conectado
                        client.conn.remoteIp = ip;
                        client.conn.remotePort = port;
                        client.conn.method_ = method;
                        client.conn.id_user = result[0].id_user;

                        //Finalização de conexão
                        app.app.controllers.connections.db_end_connection(conn);

                        conn_control(app, client, cb, auth_error, result, ip, port);

                    } else {
                        auth_error.returnCode = 4;
                        cb(auth_error, null)
                    }
                })

            }else{
                if(error){
                    auth_error.returnCode = 3;
                    cb(auth_error, null)

                }

                if(result.length === 0){
                    auth_error.returnCode = 4;
                    cb(auth_error, null)
                }
            }
        })
    }else{
        console.log("token");
    }

};

async function conn_control(app, client, cb, auth_error, result, ip, port){
    let result1, result2;

    try{
        //Verifica se o dispositivo existe no registro
        result1 = await app.app.controllers.devices.check_device_reg(app, result[0].id_user, client.id);

        //Verifica se é permitida a conexão do dispositivo
        result2 = await app.app.controllers.settings.get_server_option(app, 1, result[0].id_user);
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
        let resposta  = await app.app.controllers.connections.conn_mgmt_insert(app, result[0].id_user, client.id, ip, port, device_id);

        //Recuperação de token
        //app.app.controllers.tokens.token_check(app, request);

        client.conn.conn_id = resposta.insertId;
    }catch (e) {
        console.log(e)
    }


    //callback de aceitação da conexão do dispositivo
    cb(null, true);
}

