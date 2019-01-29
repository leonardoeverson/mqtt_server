module.exports = function(app){
	app.get('/cadastro',function(request, response){
		response.render("cadastro/cadastro");
	});

	app.post('/cadastro/inserir',function(request, response){
		//response.render("login/cadastro");
		app.app.controllers.cadastro.cadastro_usuario(app, request, response);
	});

	app.get('/profile', function(request, response){
		if(request.session.logged){
			app.app.controllers.cadastro.dados_cadastro(app, request, response);
		}else{
			response.redirect("/");
		}

	});

	app.post('/dados/usuario/salvar', function(request, response){
		if(request.session.logged){
			app.app.controllers.cadastro.atualiza_dados_cadastro(app, request, response);
		}else{
			response.sendStatus(403);
		}
	});

	app.post('/dados/usuario/senha', function(request, response){
		let body = request.body;
		console.log(body);
		response.sendStatus(200);
	})
};