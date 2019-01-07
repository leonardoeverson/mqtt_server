module.exports.get_server_opts = function(app, request, response){
    let conn = app.config.dbconn();
    let serverDAO = new app.app.models.serverDAO(conn);

    serverDAO.get_server_user_settings(request.session.id_user,(error, result) =>{
        if(!error){
            conn.destroy();
            response.render("settings",{flag: true,  opts:result, id_user: request.session.id_user});
        }else{
            response.render("settings",{flag: false, opts:result});
        }
    })
}


module.exports.post_server_opts = function(app, request, response){

    let conn = app.config.dbconn();
    let serverDAO = new app.app.models.serverDAO(conn);
    let dados = request.body;
    let result = [];
    
    for(let i = 0; i < Object.keys(dados).length; i++){
        result.push([Number(dados[i]["id_user"]), Number(dados[i]["id_server_option"])]);
    }

    console.log(result);
    serverDAO.post_server_user_settings(result, request.session.id_user, (error, result) =>{
        if(!error){
            conn.destroy();
            response.send(JSON.stringify('OK')).end();
        }else{
            console.log(error);
            response.sendStatus(500).end();
        }
    })
};

module.exports.get_server_option = function(app, id_option, id_user){
    let conn = app.config.dbconn();
    let serverOPT = new app.app.models.serverDAO(conn);
    let dados = {};
    dados.id_user = id_user;
    dados.id_option = id_option;

    return new Promise((resolve, reject)=>{
        serverOPT.get_server_option_db(dados, function(error, result){
            if(!error){
                conn.destroy();
                resolve(result)
            }else{
                console.log(error);
                conn.destroy();
                reject(error);
            }
        });
    })
};