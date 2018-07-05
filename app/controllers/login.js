module.exports.login_usuario = function(app, request, response){
	var conn = app.config.dbconn();
	var loginUsuario = new app.app.models.loginDAO(conn);
	var body = request.body;
	var bcrypt = require('bcrypt');

	loginUsuario.valida_login(body, function(error, result){
		if(!error && result.length > 0){
			console.log(result[0].senha)
			bcrypt.compare(body.senha, result[0].senha, function(err, res) {
			    if(res == true){
			    	response.redirect("/home");
			    }else{
			    	response.render("login/index",{validacao : [{'msg':'usuário ou senha incorretos'}]})
			    }
			})
			
		}else{
			if(error){
				console.log(error);
			}

			if(result.length == 0){
				response.render("login/index",{validacao : [{'msg':'usuário não encontrado'}]})
			}
		}
	})
}