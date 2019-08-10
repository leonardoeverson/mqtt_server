module.exports.cadastro_usuario = async function ( request, response) {
    
    let cadastro = require('../models/cadastroDAO');
    let connections = require('../controllers/connections');

    let conn = app.config.dbconn();
    let cadastroUsuario = new cadastro(conn);
    let body = request.body;

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

    let check_email, check_cad, check_prefixos;

    //Verifica se o email existe
    try{
        check_email =  await verifica_email(cadastroUsuario, body);
        if (check_email === false) {
            return resposta_cadastro(response, {validacao: [erro_cadastro[nivel]]});
        }
    }catch(e){
        throw new Error(e);
    }

    //Grava Cadastro
    try{
        check_cad = await grava_cadastro(cadastroUsuario, request, body);

        connections.db_end_connection(conn);

        if (check_cad === false) {
            nivel++;
            return resposta_cadastro(response, {validacao: [erro_cadastro[nivel]], status : 0});
        }
    }catch(e){
        throw new Error(e);
    }

    //Cria id's e prefixos
    try{
        check_prefixos = await cria_prefixos( request);
        if (check_prefixos === false) {
            nivel++;
            return resposta_cadastro(response, {validacao: [erro_cadastro[nivel]], status : 0});
        }
    }catch(e){
        throw new Error(e);
    }

    //response.redirect('/');

    response.render("cadastro/cadastro", { validacao :[{'msg': 'cadastro criado com sucesso, redirecionando para a página de login...'}], status: 1});
};

module.exports.dados_cadastro = function ( request, response) {
    
    let cadastro = require('../models/cadastroDAO');
    let connections = require('../controllers/connections');
    let conn = require('../../config/dbconn')();


    let cadastroUsuario = new cadastro(conn);

    cadastroUsuario.dados_cadastro(request.session.user_id, (err, result) => {
        connections.db_end_connection(conn);
        if (!err) {
            response.render('profile', {dados: result, prefixo: request.session.prefix_user});
        } else {
            console.log(err);
        }

    })
};

module.exports.atualiza_dados_cadastro = function ( request, response) {
    let cadastro = require('../models/cadastroDAO')();
    let connections = require('../controllers/connections')();
    let conn = require('../../config/dbconn')();

    let cadastroUsuario = new cadastro(conn);
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
            connections.db_end_connection(conn);
            if (!err) {
                response.send(JSON.stringify([{msg: 'Dados atualizados com sucesso', status: 2}]))
            } else {
                console.log(err);
                response.send(JSON.stringify([{msg: err, status: 1}]))
            }
        });
};

module.exports.altera_senha_cadastro = function ( request, response) {
    let conn = app.config.dbconn();
    
    //Models Load
    let cadastro = require('../models/cadastroDAO')();
    let login = require('../models/loginDAO')();

    //Classes
    let cadastroUsuario = new cadastro(conn);
    let loginUsuario = new login(conn);
    
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

module.exports.senha_reset = function (request, response) {
    let conn = app.config.dbconn();

    let cadastro = require('../models/cadastroDAO')();
    let mailerClass = require('../controllers/mailer')()
    let cadastroUsuario = new cadastro(conn);

    let body = request.body;
    let mailer = new mailerClass();
    let async = require('async');

    //Verifica se o email existe
    cadastroUsuario.verifica_email_existente(body.email, function (error, result) {
        if (result.length > 0) {

            //duração da validade do token
            let lifetime = 12;

            let token;

            //Instância da classe
            let utilsDAO = require('../models/utilsDAO')();
            let utils = new utilsDAO(conn);

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
                    utils.grava_token(result[0].user_id, token, lifetime, function (error, result) {
                        if (!error) {
                            mailer.send_mail(body.email, 'Link para redefinição de senha', token, result.insertId, function (err, info) {
                                if (err) {
                                    console.log('Error occurred. ' + err.message);
                                    return process.exit(1);
                                }
                                console.log('Message sent: %s', info.messageId);
                                //console.log('Preview URL: %s', nodemailer.getTestMessageUrl(result));
                                // Preview only available when sending through an Ethereal account

                                response.render('recuperar_acesso', {validacao: [{'msg': 'email enviado com sucesso'}, {'erro': 'false'}]});

                            });

                        } else {
                            callback(error, result);
                        }
                    })
                }
            ], function (err, results) {
                if (err) {
                    console.log(err);
                    response.render('recuperar_acesso', {validacao: [{'msg': err, 'erro': 'true'}]});
                }
            })


        } else {
            response.render('recuperar_acesso', {validacao: [{'msg': 'email não encontrado', 'erro': 'true'}]});
        }
    }, 1);
};


module.exports.valida_token = function( request, response){
    var connection = new app.config.dbconn();
    
    //Instância da classe
    let utilsDAO = require('../models/utilsDAO')();
    let utils = new utilsDAO(conn);

    if(typeof (request.query.request_id) == undefined || typeof (request.query.token_id) == undefined)
        response.redirect('/recuperar/senha');

    utils.pesquisa_token(request.query.request_id, request.query.token_id, function(error, result){
        if(!error){
            if(result.length > 0 ){
                request.session.user_id = result[0].user_id;
                utils.atualiza_token(request.query.token_id, function(error, result){
                    if(!error){
                        response.render("cadastro/alterar_senha");
                    }   
                })
                
            }else{
                response.redirect('/recuperar/senha');
            }
        }else{
            response.redirect('/recuperar/senha');
        }
    })
};

module.exports.troca_senha = function( request, response){
    let conn = app.config.dbconn();
    let cadastroUsuario = new app.app.models.cadastroDAO(conn);
    const bcrypt = require('bcrypt');
    let body = request.body;

    request.assert('senha_nova', 'Senha inválida').trim().notEmpty();
    request.assert('senha_nova', 'as senhas não são iguais').trim().isEqual(body.senha_nova_conf);

    let erros = request.validationErrors();

    if (erros) {
        response.render('cadastro/alterar_senha',{validacao: erros});
        return;
    }

    let dados = {};
    try {
        let saltRounds = 10;
        let salt = bcrypt.genSaltSync(saltRounds);
        dados.senha = bcrypt.hashSync(body.senha_nova, salt);
        dados.user_id = request.session.user_id;
    } catch (e) {
        console.log(e);
    }

    cadastroUsuario.altera_senha(dados, function(error, result){
        if(!error){
            response.redirect('/');
        }else{
            response.redirect('/');
        }
    })
};


function verifica_email(cadastroUsuario, body) {
    return new Promise(((resolve, reject) => {
        cadastroUsuario.verifica_email_existente(body.email, function (error, result) {
            if (!error && result.length === 0) {
                resolve(true);
            } else {
                if (error) {
                    reject(error)
                }

                resolve(false);
            }
        });
    }))
}

function grava_cadastro(cadastroUsuario, request, body) {
    return new Promise(((resolve, reject) => {
        cadastroUsuario.grava_usuario(body, function (error, result) {
            if (!error && result.affectedRows > 0) {
                // request.session.logged = true;
                // request.session.nome = body.nome;
                request.session.user_id = result.insertId;
                resolve(result);
            } else {
                if (error) {
                    reject(error, null);
                }

                resolve(false);
            }
        });
    }))
}

async function cria_prefixos( request) {

    let result, result1, error;

    let tokens = require('../controllers/tokens');
    let prefix = require('../controllers/prefix');
    
    try {
        result = await tokens.create_ids( request);
        result1 = await prefix.create_prefix( request);
    } catch (e) {
        error = e;
    }

    return new Promise(((resolve, reject) => {
        if (!error) {
            resolve([result, result1]);
        } else {
            reject(error);
        }
    }))

}

function resposta_cadastro(response, resp) {
    response.render('cadastro/cadastro', resp);
}
