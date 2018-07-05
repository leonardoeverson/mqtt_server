module.exports = function(app){
	app.get('/home',function(request, response){
		response.render('home/index');
	})

	app.get('/index',function(request, response){
		response.render('home/index');
	})
}
