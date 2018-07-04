module.exports = function(app){
	app.get('/cadastro',function(request, response){
		response.render("login/cadastro");
	})
}