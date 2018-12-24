module.exports.server_opts = function(app, request, response){
    var conn = app.config.dbconn();
    var serverDAO = new app.app.models.serverDAO(conn);

    serverDAO.server_user_settings(app.app.id_user,(error, result) =>{
        if(!error){

        }else{
            console.log(error);
        }
    })
}


module.exports.user_opts = function(){

}