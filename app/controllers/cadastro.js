module.exports.cadastro_usuario = function(app, request, response){
	let conn = app.config.dbconn();
	let cadastroUsuario = new app.app.models.cadastroDAO(conn);
	let body = request.body;
	console.log(body);

	//Erros de cadastro
	let erro_cadastro = [];
	let nivel = 0;
	erro_cadastro.push({ 'msg': 'email existente, insira outro'});
	erro_cadastro.push({ 'msg': 'falha ao cadastrar o usuario'});

	request.assert('email', 'O campo email não pode ficar vazio').trim().notEmpty().isEmail();
	request.assert('senha', 'A senha é inválida ou menor que 8 digitos').trim().notEmpty().len(8,8);
	request.assert('senhav', 'A senha é inválida ou menor que 8 digitos').trim().notEmpty().len(8,8);
	request.assert('senha', 'as senhas não são iguais').trim().isEqual(body.senhav);

	let erros = request.validationErrors();
	
	if(erros){
		response.render("cadastro/cadastro",{validacao : erros});
		return;
	}

	//Encadeamento de funções
	/*
		1 - Verifica se o email existe
		2 - Se não existe, grava o usuário
	*/
	let async = require('async');
	async.series([
		function(callback){
			cadastroUsuario.verifica_email_existente(body.email, function(error, result){
				if(!error && result.length == 0){
					callback(null, result);
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
					request.session.autorizado = true;
					request.session.nome = body.nome;
					request.session.user = body.nome_usuario;
					request.session.user_id = result.insertId;
					response.redirect("/home");
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

};

/*
TODO:
1. Perfil para mudança dos dados cadastrados

*/


module.exports.dados_cadastro = function(app, request, response){
	let conn = app.config.dbconn();
	let cadastroUsuario = new app.app.models.cadastroDAO(conn);
};

module.exports.grava_dados_cadastro = function(app, request, response){
	let conn = app.config.dbconn();
	let cadastroUsuario = new app.app.models.cadastroDAO(conn);
};