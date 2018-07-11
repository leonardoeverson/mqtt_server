module.exports = function(app){
	app.get('/devices/register',function(request, response){
		response.render('devices/register');
	})

	app.post('/devices/register', function(request, response){
		app.app.controllers.devices.register_devices(app, request, response);
		
		
	})


	app.get('/devices/list',function(request, response){
		response.render('devices/list');
	})
}