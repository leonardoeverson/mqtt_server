let token_user_insert = function(app, dados){
    let conn = app.config.dbconn();
    let tokensDAO = new app.app.models.tokensDAO(conn);

    return new Promise((resolve, reject)=>{
        tokensDAO.user_token_insert(dados, (error, result)=>{
            app.app.controllers.connections.db_end_connection(conn);
            if(!error){
                resolve(result);
            }else{
                console.log(error);
                reject(error);
            }

        })
    });
};

let token_user_get = function(app, dados){
    let conn = app.config.dbconn();
    let tokensDAO = new app.app.models.tokensDAO(conn);

    return new Promise((resolve, reject)=>{
        tokensDAO.user_token_get(dados, (error, result)=>{
            if(!error){
                app.app.controllers.connections.db_end_connection(conn);
                resolve(result);
            }else{
                console.log(error);
                app.app.controllers.connections.db_end_connection(conn);
                reject(error);
            }

        })
    });
};

module.exports.token_user_compare = function(app, dados){
    let conn = app.config.dbconn();
    let tokensDAO = new app.app.models.tokensDAO(conn);

    return new Promise((resolve, reject)=>{
        tokensDAO.user_token_compare(dados, (error, result)=>{
            app.app.controllers.connections.db_end_connection(conn);
            if(!error){
                resolve(result);
            }else{
                console.log(error);
                reject(error);
            }

        })
    });
};

module.exports.token_check = function (app, request) {

    let dados = {};
    dados.user_id = request.session.user_id;

    return new Promise(async (resolve, reject)=>{
        try {
            let check1 = await token_user_get(app, dados);

            if (check1.length > 0) {
                resolve("token:"+check1[0].token_value);
            } else {
                dados.token_value = require('uuid/v4')();
                let check2 = await token_user_insert(app, dados);
                resolve("token:"+dados.token_value);
            }

        } catch (e) {
            console.log('erro:', e);
            reject(e);
        }
    })

};

module.exports.delete_tokens_ = function(app){
    let conn = app.config.dbconn();
    let tokensDAO = new app.app.models.tokensDAO(conn);

    tokensDAO.delete_tokens((err, result)=>{
        app.app.controllers.connections.db_end_connection(conn);
        if(!err){
            console.log('delete_tokens');
        }else{
            console.log(result);
        }
    })
};


module.exports.get_username_password = function(app, user_id){
    let conn = app.config.dbconn();
    let tokensDAO = new app.app.models.tokensDAO(conn);

    return new Promise((resolve, reject) => {
        tokensDAO.get_username_password_db(user_id,(err, result)=>{
            app.app.controllers.connections.db_end_connection(conn);
            if(!err){
                resolve(result);
            }else{
                if(err){
                    reject(err);
                }

                resolve(false);
            }
        })
    });

};


module.exports.make_id = function(tamanho, usa_maiusculas, usa_minusculas, usa_numeros, usa_simbolos){

    let text = "";
    let minusculas = "abcdefghijklmnopqrstuvwxyz";
    let maiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numeros = '0123456789';
    let simbolos = '_-*?;:{}{@#$%¨&*()]!';
    let possible = '';

    if(usa_maiusculas){
        possible += maiusculas;
    }

    if(usa_minusculas){
        possible += minusculas;
    }

    if(usa_numeros){
        possible += numeros;
    }

    if(usa_simbolos){
        possible += simbolos
    }

    for (let i = 0; i < tamanho; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    //return new Promise((resolve, reject)=>{
    //    resolve(text);
    //});

    return text;
}

module.exports.create_ids = async function(app, request){

    let conn = app.config.dbconn();
    let idDAO = new app.app.models.utilsDAO(conn);
    let dados = {};
    let test;

    try{
        dados.username = app.app.controllers.tokens.make_id(8, false, true, false, false);
        dados.senha = app.app.controllers.tokens.make_id(12, true, true, true, false);
        dados.user_id = request.session.user_id;
    }catch (e) {
        console.log(e);
    }

    test = await app.app.controllers.tokens.pesquisa_username(app, dados.username);
    if (!test) {
        return app.app.controllers.id.create_ids(app, request);
    }

    return new Promise(async (resolve, reject) => {

        idDAO.grava_ids(dados, (err, result) => {
            app.app.controllers.connections.db_end_connection(conn);
            if (!err) {
                resolve(result);
            } else {
                if(err){
                    reject(err);
                }

                resolve(false);
            }
        });
    });
};

module.exports.pesquisa_username = function(app, id){

    let conn = app.config.dbconn();
    let idDAO = new app.app.models.utilsDAO(conn);

    return new Promise((resolve, reject) =>{
        idDAO.pesquisa_username_seq(id, (err, result) =>{
            app.app.controllers.connections.db_end_connection(conn);
            if(!err && result.length == 0){
                resolve(true);
            }else{
                if(err){
                    console.log(err);
                    reject(err);
                }

                resolve(false);
            }
        })
    });
};



