module.exports.login_usuario = function(app, request, response){
	var conn = app.config.dbconn();
	var loginUsuario = new app.app.models.loginDAO(conn);
	var body = request.body;
	console.log(body);

	loginUsuario.valida_login(body, function(error, result){
		if(!error && result.length > 0){

		}else{
			
		}
	})

	
	response.send('ok');
}