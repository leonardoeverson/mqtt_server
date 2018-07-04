module.exports = function(app){
	
	app.get('/login', function(request, response){
		response.render('login/index');
	})

	app.get('/',function(request, response){
		response.render('login/index')
	})

	app.post('/login',function(request, response){

	})


}