module.exports.login_usuario = function(app, request, response){
	var conn = app.config.dbconn();
	var loginUsuario = new app.app.models.loginDAO(conn);
	var body = request.body;
	var bcrypt = require('bcrypt');

	loginUsuario.valida_login(body, function(error, result){
		if(!error && result.length > 0){
			bcrypt.compare(body.senha, result[0].senha, function(err, res) {
			    if(res == true){
			    	response.redirect("/home");
			    }else{
			    	response.render("login/index",{validacao : [{'msg':'usuário ou senha incorretos'}]})
			    }
			})
			
		}else{
			if(error){
				response.render("login/index",{validacao : [{'msg':'error'}]})
				return
			}

			if(result.length == 0){
				response.render("login/index",{validacao : [{'msg':'usuário não encontrado'}]})
				return
			}
		}
	})

}


module.exports.login_dispositivo = function(app, client, username, password, cb){

	var conn = app.config.dbconn();
	var loginUsuario = new app.app.models.loginDAO(conn);
	var bcrypt = require('bcrypt');
	dados = {};
	dados.email = username;
	var auth_error = new Error('Auth error')
  	var ip;
  	var port;
  	var method;
  	
  	try{
  		method = "mqtt_socket"
  		ip = client.conn.remoteAddress;
  		port = client.conn.remotePort;
  	}catch(e){
  		console.log(e)
 	}

  	if(ip == undefined){
  		
  		try{
  			method = "websocket";
  			ip = client.conn.socket._socket.remoteAddress;
  			port = client.conn.socket._socket.remotePort;
  		}catch(e){
  			console.log(e)
  		}
  	}

  	console.log(method, ip)

	loginUsuario.valida_login(dados, function(error, result){
		if(!error && result.length > 0){
			bcrypt.compare(password.toString(), result[0].senha, function(err, res) {
			    if(res == true){
			    	//informações de conexão do cliente conectado
			    	client.conn.remoteIp = ip;
			    	client.conn.remotePort = port;
			    	client.conn.method_ = method;
			    	client.conn.user_id = result[0].id_usuario;

			    	//controller de conexões
			    	app.app.controllers.connections.conn_mgmt_insert(app, result[0].id_usuario, client.id, ip, port);
			    
			    	//callback de aceitação da conexão do dispositivo
			    	cb(null, true);
			    }else{
			    	auth_error.returnCode = 4
			    	cb(auth_error, null)
			    }
			})
			
		}else{
			if(error){
				auth_error.returnCode = 3
			    cb(auth_error, null)

			}

			if(result.length == 0){
				auth_error.returnCode = 4
			    cb(auth_error, null)
			}
		}
	})
}
