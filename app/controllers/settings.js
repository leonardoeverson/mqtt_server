module.exports.get_server_opts = function(app, request, response){
    let conn = require('../../config/dbconn')();
    let serverDAO = require('../models/serverDAO')();
    serverDAO = new serverDAO(conn);

    serverDAO.get_server_user_settings(request.session.user_id,(error, result) =>{
        if(!error){
            conn.destroy();
            console.log("get_server_user_settings");
            response.render("settings",{flag: true,  opts:result, user_id: request.session.user_id, prefixo: request.session.prefix_user});
        }else{
            response.render("settings",{flag: false, opts:result});
        }
    })
};

module.exports.post_server_opts = function(app, request, response){

    let conn = require('../../config/dbconn')();
    let serverDAO = require('../models/serverDAO')();
    serverDAO = new serverDAO(conn);
    let dados = request.body;
    let result = [];
    
    for(let i = 0; i < Object.keys(dados).length; i++){
        result.push([Number(dados[i]["user_id"]), Number(dados[i]["id_server_option"])]);
    }

    console.log(result);
    serverDAO.post_server_user_settings(result, request.session.user_id, (error, result) =>{
        if(!error){
            try{
                console.log("post_server_user_settings");
                conn.destroy();
            }catch(e){
                console.log(e);
            }
            response.send(JSON.stringify('OK')).end();
        }else{
            console.log(error);
            response.sendStatus(500).end();
        }
    })
};

module.exports.get_server_option = function(app, id_option, user_id){
    let conn = require('../../config/dbconn')();
    let serverDAO = require('../models/serverDAO')();
    serverDAO = new serverDAO(conn);

    let dados = {};
    dados.user_id = user_id;
    dados.id_option = id_option;

    return new Promise((resolve, reject)=>{
        serverDAO.get_server_option_db(dados, function(error, result){
            if(!error){
                try{
                    console.log("get_server_option_db");
                    conn.destroy();
                }catch(e){
                    console.log(e);
                }
                //conn.destroy();
                resolve(result)
            }else{
                console.log(error);
                conn.destroy();
                reject(error);
            }
        });
    })
};

module.exports.get_username_password_device = function (app, request, response) {
    let conn = require('../../config/dbconn')();
    let dadosUsuarios = require('../models/dadosUsuarioDAO')();
    dadosUsuarios = new dadosUsuarios(conn);
    let connections = require('../controllers/connections')

    dadosUsuarios.dados_conexao_dispositivo(request.session.user_id, (err, result)=>{
        if(!err){
            response.render('info',{prefixo : request.session.prefix_user, result: result[0]});
        }else{
            console.log(err);
        }
    })
};