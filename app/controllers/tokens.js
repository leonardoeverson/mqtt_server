let token_user_insert = function(app, request, dados){
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

let token_user_get = function(app, request, dados){
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


module.exports.token_check = async function (app, request) {

    let dados = [];
    dados.user_id = request.session.id_user;

    try {
        let check1 = await token_user_get(app, request, dados);

        if (check1.length > 0) {
            console.log('ch1', check1);
            request.session.user_token = check1.token_value;
        } else {
            //const namespace = '1b771b54-50e5-991e-68b3-da34ef1f79341';
            dados.uuid = require('uuid/v4')();
            let check2 = await token_user_insert(app, request, dados);
            console.log('ch2', check2);
            request.session.user_token = check2.dados.uuid;
        }

    } catch (e) {
        console.log('erro:', e);
    }
};