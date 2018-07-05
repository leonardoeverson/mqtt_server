module.exports.login_usuario = function(app, request, response){
	var conn = app.config.dbconn();
	var loginUsuario = new app.app.models.loginDAO(conn);
	var body = request.body;

	loginUsuario.valida_login(body, function(error, result){
		if(!error && result.length > 0){
			response.redirect("/home");
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