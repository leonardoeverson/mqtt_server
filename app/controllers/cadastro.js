module.exports.cadastro_usuario = function(app, request, response){
	let conn = app.config.dbconn();
	let cadastroUsuario = new app.app.models.cadastroDAO(conn);
	let body = request.body;
	//console.log(body);

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
		app.app.controllers.connections.db_end_connection(conn);
		if(err){
			response.render('cadastro/cadastro',{validacao : [erro_cadastro[nivel]]});
		}
	})

};

module.exports.dados_cadastro = function(app, request, response){
	let conn = app.config.dbconn();
	let cadastroUsuario = new app.app.models.cadastroDAO(conn);

	cadastroUsuario.dados_cadastro(request.session.user_id, (err, result)=>{
		app.app.controllers.connections.db_end_connection(conn);
		if(!err){
			response.render('profile',{dados: result});
		}else{
			console.log(err);
		}

	})
};

module.exports.atualiza_dados_cadastro = function(app, request, response){
	let conn = app.config.dbconn();
	let cadastroUsuario = new app.app.models.cadastroDAO(conn);
	let body = request.query;

	cadastroUsuario.atualiza_dados_usuario_db(request.session.user_id, body, (err, result)=>{
		app.app.controllers.connections.db_end_connection(conn);
		if(!err){
			response.sendStatus(200);
		}else{
			console.log(err);
		}

	});

};

module.exports.altera_senha_cadastro = function(app, request, response){
	let conn = app.config.dbconn();
	let cadastroUsuario = new app.app.models.cadastroDAO(conn);
	let loginUsuario = new app.app.models.loginDAO(conn);
	const async = require('async');
	let bcrypt = require('bcrypt');
	let body = request.body;

	//Erros de cadastro
	let erro_cadastro = [];
	let nivel = 0;
	erro_cadastro.push({ 'msg': 'a senha antiga está incorreta',status : 1});
	erro_cadastro.push({ 'msg': 'Houve um erro ao atualizar a senha',status : 2});

	request.assert('senha_nova_1', 'A senha é inválida ou menor que 8 digitos').trim().notEmpty().len(8, 16);
	request.assert('senha_nova_2', 'as senhas não são iguais').trim().isEqual(body.senha_nova_1);

	let erros = request.validationErrors();

	if(erros){
		response.send(erros);
		return;
	}

	//verifica se a senha inicial tá correta;
	async.series([
		function(callback){
			loginUsuario.valida_senha(request.session.user_id, (err, result)=>{
				try{
					bcrypt.compare(body.senha_antiga, result[0].senha, async function (err, res) {
						if (res === true) {
							//Senhas
							callback(null, result);
						} else {
							callback(err, result);
						}
					})
				}catch (e) {
					callback(e, null);
				}

			});
		},
		function(callback){
			let dados = {};
			try{
				let saltRounds = 10;
				let salt = bcrypt.genSaltSync(saltRounds);
				dados.senha = bcrypt.hashSync(body.senha_nova_1, salt);
				dados.user_id = request.session.user_id;
			}catch(e){
				callback(e, null);
			}


			cadastroUsuario.altera_senha(dados, (err, result)=>{
				app.app.controllers.connections.db_end_connection(conn);
				if(!err){
					callback(null, result);
				} else {
					nivel++;
					console.log(err);
					callback(err, result);
				}

			});
		}
	], function (err, result) {
		if(!err){
			response.send(JSON.stringify([{msg: 'Senha alterada com sucesso', status : 2}]));
		}else{
			response.send(JSON.stringify([{msg : [erro_cadastro[nivel]], status: 2, erro : err}]));
		}
	});
};