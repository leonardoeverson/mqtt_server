module.exports = function(app){
	app.get('/devices/register',function(request, response){
		if(request.session.logged) {
			response.render('devices/register');
		}else{
			response.redirect("/")
		}
	});

	app.post('/devices/register', function(request, response){
		app.app.controllers.devices.register_devices(app, request, response);	
	});


	app.get('/devices/list',function(request, response){
		if(request.session.logged){
			app.app.controllers.devices.list_devices(app, request, response);
		}else{
			response.redirect("/");
		}
	});

	app.get('/devices/connected', function(request, response){
		
	})
};