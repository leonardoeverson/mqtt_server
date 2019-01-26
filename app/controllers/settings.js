module.exports.get_server_opts = function(app, request, response){
    let conn = app.config.dbconn();
    let serverDAO = new app.app.models.serverDAO(conn);

    serverDAO.get_server_user_settings(request.session.user_id,(error, result) =>{
        if(!error){
            conn.destroy();
            console.log("get_server_user_settings");
            response.render("settings",{flag: true,  opts:result, user_id: request.session.user_id});
        }else{
            response.render("settings",{flag: false, opts:result});
        }
    })
};

module.exports.post_server_opts = function(app, request, response){

    let conn = app.config.dbconn();
    let serverDAO = new app.app.models.serverDAO(conn);
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
    let conn = app.config.dbconn();
    let serverOPT = new app.app.models.serverDAO(conn);
    let dados = {};
    dados.user_id = user_id;
    dados.id_option = id_option;

    return new Promise((resolve, reject)=>{
        serverOPT.get_server_option_db(dados, function(error, result){
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