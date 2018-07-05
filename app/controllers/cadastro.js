module.exports.cadastro_usuario = function(app, request, response){
	var conn = app.config.dbconn();
	var cadastroUsuario = new app.app.models.cadastroDAO(conn);
	var body = request.body
	console.log(body);

	//Erros de cadastro
	var erro_cadastro = [];
	var nivel = 0;
	erro_cadastro.push({ 'msg': 'email existente, insira outro'});
	erro_cadastro.push({ 'msg': 'falha ao cadastrar o usuario'});

	request.assert('email', 'O campo email não pode ficar vazio').trim().notEmpty().isEmail();
	request.assert('senha', 'A senha é inválida ou menor que 8 digitos').trim().notEmpty().len(8,8);
	request.assert('senhav', 'A senha é inválida ou menor que 8 digitos').trim().notEmpty().len(8,8);
	request.assert('senha', 'as senhas não são iguais').trim().isEqual(body.senhav);

	var erros = request.validationErrors();
	
	if(erros){
		response.render("cadastro/cadastro",{validacao : erros});
		return;
	}

	//Encadeamento de funções
	/*
		1 - Verifica se o email existe
		2 - Se não existe, grava o usuário
	*/
	var async = require('async');
	async.series([
		function(callback){
			cadastroUsuario.verifica_email_existente(body, function(error, result){
				if(!error && result.length > 0){
					callback("null", result);
				}else{
					if(error){
						callback("null",error);
					}

					if(result){
						callback("null",result);
					}

				}
			})
		},
		function(callback){
			cadastroUsuario.grava_usuario(body, function(error, result){
				if(!error && result.affectedRows > 0){
					response.redirect("/");
				}else{
					nivel++;
					if(error){
						callback("null",error);
					}

					if(result){
						callback("null",result);
					}
				}
			})
		}

	], function(err, results){
		if(err){
			response.render('cadastro/cadastro',{validacao : [erro_cadastro[nivel]]});
		}
	})

}