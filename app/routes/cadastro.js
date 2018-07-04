module.exports = function(app){
	app.get('/cadastro',function(request, response){
		response.render("login/cadastro");
	})

	app.post('/cadastro',function(request, response){
		//response.render("login/cadastro");
		app.app.controllers.cadastro_usuario(app, request, response)
	})
}