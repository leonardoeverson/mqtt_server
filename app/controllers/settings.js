module.exports.get_server_opts = function(app, request, response){
    let conn = app.config.dbconn();
    let serverDAO = new app.app.models.serverDAO(conn);

    serverDAO.get_server_user_settings(request.session.id_user,(error, result) =>{
        if(!error){
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
        //result[i]["id_user"] = dados[i]["id_user"];
        //result[i]["id_server_option"] =  dados[i]["id_server_option"];
    }

    console.log(result);
    serverDAO.post_server_user_settings(result, (error, result) =>{
        if(!error){
            response.sendStatus(200);
        }else{
            console.log(error);
            response.send(JSON.stringify(error));
        }
    })
}