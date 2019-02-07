module.exports.cadastro_usuario = function (app, request, response) {
    let conn = app.config.dbconn();
    let cadastroUsuario = new app.app.models.cadastroDAO(conn);
    let body = request.body;
    //console.log(body);

    let erro_cadastro = [];
    let nivel = 0;
    erro_cadastro.push({'msg': 'email existente, insira outro'});
    erro_cadastro.push({'msg': 'falha ao cadastrar o usuario'});
    erro_cadastro.push({'msg': 'falha na geração dos tokens'});

    request.assert('email', 'O campo email não pode ficar vazio').trim().notEmpty().isEmail();
    request.assert('senha', 'A senha é inválida ou menor que 8 digitos').trim().notEmpty().len(8, 8);
    request.assert('senhav', 'A senha é inválida ou menor que 8 digitos').trim().notEmpty().len(8, 8);
    request.assert('senha', 'as senhas não são iguais').trim().isEqual(body.senhav);

    let erros = request.validationErrors();

    if (erros) {
        response.render("cadastro/cadastro", {validacao: erros});
        return;
    }

    //Encadeamento de funções
    /*
        1 - Verifica se o email existe
        2 - Se não existe, grava o usuário
        3 - cria o login genérico para login em dispositivos
        4 - cria o prefixo do usuário
    */

    let async = require('async');
    async.series([
        function (callback) {
            cadastroUsuario.verifica_email_existente(body.email, function (error, result) {
                if (!error && result.length == 0) {
                    nivel++;
                    callback(null, result);
                } else {
                    if (error) {
                        callback(error, null);
                    }

                    if (result) {
                        callback('falha ao cadastrar o usuario', result);
                    }
                }
            })
        },
        function (callback) {
            cadastroUsuario.grava_usuario(body, function (error, result) {
                if (!error && result.affectedRows > 0) {
                    nivel++;
                    request.session.logged = true;
                    request.session.nome = body.nome;
                    request.session.user_id = result.insertId;
                    callback(null, result);
                } else {
                    if (error) {
                        callback(error, null);
                    }

                    if (result) {
                        callback('falha ao cadastrar o usuario', result);
                    }
                }
            })
        },
        async function (callback) {
            nivel++;
            let result;

            try {
                result = await app.app.controllers.tokens.create_ids(app, request);
            } catch (e) {
                console.log(e);
                //throw new Error('Erro na geração do prefixo');
                return e;
            }

            return result
        },
        async function (callback) {
            let result;
            try {
                result = await app.app.controllers.prefix.create_prefix(app, request);
            } catch (e) {
                console.log(e);
                //throw new Error('Erro na geração do prefixo');
                return e;
            }

            return result
        }

    ], function (err, result) {
        console.log(err);
        app.app.controllers.connections.db_end_connection(conn);
        if (err) {
            response.render('cadastro/cadastro', {validacao: [erro_cadastro[nivel]], err: err});
        } else {
            response.redirect('/home');
        }
    })

};

module.exports.dados_cadastro = function (app, request, response) {
    let conn = app.config.dbconn();
    let cadastroUsuario = new app.app.models.cadastroDAO(conn);

    cadastroUsuario.dados_cadastro(request.session.user_id, (err, result) => {
        app.app.controllers.connections.db_end_connection(conn);
        if (!err) {
            response.render('profile', {dados: result, prefixo : request.session.prefix_user});
        } else {
            console.log(err);
        }

    })
};

module.exports.atualiza_dados_cadastro = function (app, request, response) {
    let conn = app.config.dbconn();
    let cadastroUsuario = new app.app.models.cadastroDAO(conn);
    let body = request.query;
    let async = require('async');

    async.series([
            (callback) => {
                cadastroUsuario.verifica_email_existente_user(body.email, request.session.user_id, (err, result) => {
                    if (!err && result.length == 0) {
                        callback(null, result);
                    } else {
                        if (err) {
                            callback(err, null);
                        } else {
                            callback("O email inserido não pode ser usado", null);
                        }

                    }

                });
            },
            (callback) => {
                cadastroUsuario.atualiza_dados_usuario_db(request.session.user_id, body, (err, result) => {
                    if (!err) {
                        callback(null, result);
                    } else {
                        callback(err, null);
                    }

                });
            }
        ],
        (err, result) => {
            app.app.controllers.connections.db_end_connection(conn);
            if (!err) {
                response.send(JSON.stringify([{msg: 'Dados atualizados com sucesso', status: 2}]))
            } else {
                console.log(err);
                response.send(JSON.stringify([{msg: err, status: 1}]))
            }
        });
};

module.exports.altera_senha_cadastro = function (app, request, response) {
    let conn = app.config.dbconn();
    let cadastroUsuario = new app.app.models.cadastroDAO(conn);
    let loginUsuario = new app.app.models.loginDAO(conn);
    const async = require('async');
    let bcrypt = require('bcrypt');
    let body = request.body;

    //Erros de cadastro
    let erro_cadastro = [];
    let nivel = 0;
    erro_cadastro.push({'msg': 'a senha antiga está incorreta', status: 1});
    erro_cadastro.push({'msg': 'Houve um erro ao atualizar a senha', status: 2});

    request.assert('senha_nova_1', 'A senha é inválida ou menor que 8 digitos').trim().notEmpty().len(8, 16);
    request.assert('senha_nova_2', 'as senhas não são iguais').trim().isEqual(body.senha_nova_1);

    let erros = request.validationErrors();

    if (erros) {
        response.send(erros);
        return;
    }

    //verifica se a senha inicial tá correta;
    async.series([
        function (callback) {
            loginUsuario.valida_senha(request.session.user_id, (err, result) => {
                try {
                    bcrypt.compare(body.senha_antiga, result[0].senha, async function (err, res) {
                        if (res === true) {
                            //Senhas
                            callback(null, result);
                        } else {
                            callback(err, result);
                        }
                    })
                } catch (e) {
                    callback(e, null);
                }

            });
        },
        function (callback) {

            //gerando hash para a nova senha
            let dados = {};
            try {
                let saltRounds = 10;
                let salt = bcrypt.genSaltSync(saltRounds);
                dados.senha = bcrypt.hashSync(body.senha_nova_1, salt);
                dados.user_id = request.session.user_id;
            } catch (e) {
                callback(e, null);
            }

            //Grava a senha no banco
            cadastroUsuario.altera_senha(dados, (err, result) => {
                if (!err) {
                    callback(null, result);
                } else {
                    nivel++;
                    console.log(err);
                    callback(err, result);
                }

            });
        }
    ], function (err, result) {
        app.app.controllers.connections.db_end_connection(conn);
        if (!err) {
            response.send(JSON.stringify([{msg: 'Senha alterada com sucesso', status: 2}]));
        } else {
            response.send(JSON.stringify([{msg: [erro_cadastro[nivel]], status: 2, erro: err}]));
        }
    });
};

module.exports.senha_reset = function (app, request, response) {
    let connection = app.config.dbconn();
    let cadUser = new app.app.models.dados_usuariosDAO(connection);
    let body = request.body;
    let mailer = new app.app.controllers.mailer();
    let async = require('async');

    //Verifica se o email existe
    cadUser.validaEmail(body, function (error, result) {
        if (result.length > 0) {

            //duração da validade do token
            var lifetime = 12;

            var token;

            //Instância da classe
            var utils = new app.app.models.utilsDAO(connection);

            async.series([
                function (callback) {
                    token = (function () {
                        g = function () {
                            c = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
                            p = '';
                            for (i = 0; i < 128; i++) {
                                p += c.charAt(Math.floor(Math.random() * 64));
                            }
                            return p;
                        };

                        p = g();
                        while (!/[A-Z]/.test(p) || !/[0-9]/.test(p) || !/[a-z]/.test(p)) {
                            p = g();
                        }
                        return p;
                    })();

                    callback(null, null);
                },
                function (callback) {
                    //Gravando Token
                    utils.grava_token(result[0].id, token, lifetime, function (error, result) {
                        if (!error) {
                            mailer.send_mail(body.email, 'Link para redefinição de senha', token, result.insertId, function (err, info) {
                                if (err) {
                                    console.log('Error occurred. ' + err.message);
                                    return process.exit(1);
                                }
                                console.log('Message sent: %s', info.messageId);
                                //console.log('Preview URL: %s', nodemailer.getTestMessageUrl(result));
                                // Preview only available when sending through an Ethereal account

                                response.render('cadastro/reset', {validacao: [{'msg': 'email enviado com sucesso'}, {'erro': 'false'}]});

                            });

                        } else {
                            callback(error, result);
                        }
                    })
                }
            ], function (err, results) {
                if (err) {
                    console.log(err);
                    response.render('cadastro/reset', {validacao: [{'msg': err, 'erro': 'true'}]});
                }
            })


        } else {
            response.render('cadastro/reset', {validacao: [{'msg': 'email não encontrado', 'erro': 'true'}]});
        }
    }, 1);
};