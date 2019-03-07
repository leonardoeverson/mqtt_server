module.exports = function(app){
	app.get('/devices/register',function(request, response){
		if(request.session.logged) {
			response.render('devices/register',{prefixo : request.session.prefix_user});
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
		if(request.session.logged){
			app.app.controllers.devices.connected_devices(app, request, response);
		}else{
			response.redirect("/");
		}
	});

	app.delete('/device/delete', function(request, response){
		if(request.session.logged){
			app.app.controllers.devices.delete_device(app, request, response);
		}else{
			response.redirect("/");
		}
	});

	app.get('/device/edit', function(request, response){
		if(request.session.logged){
			app.app.controllers.devices.get_device_data(app, request, response);
		}else{
			response.redirect('/');
		}
	});

	app.post('/devices/edit', (request, response)=>{
		if(request.session.logged){
			app.app.controllers.devices.update_device_data(app, request, response);
		}else{
			response.redirect('/')
		}
	})
};