module.exports = function(app){
	app.get('/cadastro',function(request, response){
		response.render("cadastro/cadastro");
	})

	app.post('/cadastro/inserir',function(request, response){
		//response.render("login/cadastro");
		app.app.controllers.cadastro.cadastro_usuario(app, request, response)
	})
}