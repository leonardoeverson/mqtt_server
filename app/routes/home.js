module.exports = function(app){
	app.get('/home', async function (request, response) {
		if (request.session.logged) {
			let result = await app.app.controllers.devices.connected_devices(app, request, response);
			response.render('home/index',{dados: result, prefixo : request.session.prefix_user});
		} else {
			response.redirect("/")
		}
	});

	app.get('/index',async function(request, response){
		if (request.session.logged) {
			let result = await app.app.controllers.devices.connected_devices(app, request, response);
			response.render('home/index',{dados: result, prefixo : request.session.prefix_user});
		} else {
			response.redirect("/")
		}
	})
};
