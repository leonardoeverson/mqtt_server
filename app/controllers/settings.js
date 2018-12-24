module.exports.get_server_opts = function(app, request, response){
    let conn = app.config.dbconn();
    let serverDAO = new app.app.models.serverDAO(conn);

    serverDAO.get_server_user_settings(request.session.id_user,(error, result) =>{
        if(!error){
            response.render("settings",{flag: true,  opts:result});
        }else{
            response.render("settings",{flag: false, opts:result});
        }
    })
}


module.exports.post_server_opts = function(app, request, response){

    let conn = app.config.dbconn();
    let serverDAO = new app.app.models.serverDAO(conn);

    serverDAO.post_server_user_settings(request.session.id_user,(error, result) =>{
        if(!error){
            response.render("settings",{flag: true,  opts:result});
        }else{
            response.render("settings",{flag: false, opts:result});
        }
    })
}