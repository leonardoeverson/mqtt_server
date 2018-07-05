module.exports.cadastro_usuario = function(app, request, response){
	var conn = app.config.dbconn();
	var cadastroUsuario = new app.app.models.cadastroDAO(conn);
	console.log(body);

	request.assert('email', 'O campo email não pode ficar vazio').trim().notEmpty().isEmail();
	request.assert('senha', 'Senha inválida').trim().notEmpty();
	request.assert('senhav', 'Senha inválida').trim().notEmpty();
	request.assert('senha', 'as senhas não são iguais').trim().isEqual(body.senhav);

	var erros = request.validationErrors();
	
	if(erros){
		response.render("cadastro/cadastro",{validacao : erros});
	}


	cadastroUsuario.grava_usuario(body, function(error, result){
		if(!error && result.length > 0){
			response.redirect("/");
		}else{
			if(error){
				console.log(error);
			}

			if(result.length == 0){
				console.log(result);
			}
		}
	})
}