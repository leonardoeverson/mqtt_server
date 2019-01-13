let token_user_insert = function(app, request){
    let conn = app.config.dbconn();
    let tokensDAO = app.app.models.tokensDAO(conn);
    let dados = [];

    dados.uuid = require('uuid/v4')();
    dados.user_id = request.session.id_user;

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

let token_user_get = function(app, request){
    let conn = app.config.dbconn();
    let tokensDAO = app.app.models.tokensDAO(conn);
    let dados = [];

    dados.uuid = require('uuid/v4')();
    dados.user_id = request.session.id_user;

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


module.exports.token_check = async function(app, request){
    let conn = app.config.dbconn();
    let tokensDAO = app.app.models.tokensDAO(conn);
    let dados = [];

    dados.uuid = require('uuid/v4')();
    dados.user_id = request.session.id_user;
    return new Promise(async (resolve, reject) => {
        let check1 = await token_user_get(app, request);

        if (check1) {
            resolve(check1);
        }

        let check2 = await token_user_insert(app, request);
        resolve(check2);
    })

};