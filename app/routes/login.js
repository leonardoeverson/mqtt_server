module.exports = function(app){
	
	app.get('/login', function(request, response){
		response.render('login/index');
	})

	app.get('/',function(request, response){
		response.render('login/index')
	})

	app.post('/login',function(request, response){
		app.app.controllers.login.login_usuario(app, request, response);
	})

	app.get('/logout',function(request, response){
		response.redirect("/")
	})
}