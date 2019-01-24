let token_user_insert = function(app, dados){
    let conn = app.config.dbconn();
    let tokensDAO = new app.app.models.tokensDAO(conn);

    return new Promise((resolve, reject)=>{
        tokensDAO.user_token_insert(dados, (error, result)=>{
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

module.exports.token_check = function (app, request) {

    let dados = [];
    dados.user_id = request.session.id_user;

    return new Promise(async (resolve, reject)=>{
        try {
            let check1 = await token_user_get(app, dados);

            if (check1.length > 0) {
                resolve("token:"+check1[0].token_value);
            } else {
                dados.uuid = require('uuid/v4')();
                let check2 = await token_user_insert(app, dados);
                console.log('ch2', check2[0]);
                resolve("token:"+check2[0].dados.uuid);
            }

        } catch (e) {
            console.log('erro:', e);
            reject(e);
        }
    })

};