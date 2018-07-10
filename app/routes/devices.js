module.exports = function(app){
	app.get('/devices/register',function(request, response){
		response.render('devices/register');
	})

	app.get('/devices/list',function(request, response){
		response.render('devices/list');
	})
}