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

	app.get('/recuperar/senha', (request, response)=>{
		response.render('recuperar_acesso');
	});

	app.post('/recuperar/senha/verificar', (request, response)=>{
		app.app.controllers.cadastro.senha_reset(app, request, response);
	});

	app.get('/password/request/reset', function(request, response){
		app.app.controllers.cadastro.valida_token(app, request, response);
	})

	app.post('/password/request/reset', function(request, response){
		app.app.controllers.cadastro.troca_senha(app, request, response);
	})

	app.post('/dados/usuario/salvar', function(request, response){
		if(request.session.logged){
			app.app.controllers.cadastro.atualiza_dados_cadastro(app, request, response);
		}else{
			response.sendStatus(403);
		}
	});

	app.post('/dados/usuario/senha', function(request, response){
		if(request.session.logged){
			//response.sendStatus(200);
			app.app.controllers.cadastro.altera_senha_cadastro(app, request, response)
		}else{
			response.sendStatus(503);
		}

	})
};