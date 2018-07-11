module.exports.list_devices = function(app, request, response){

}

module.exports.register_devices = function(app, request, response){
    var conn = app.config.dbconn();
    var dadosDispositivos = new app.app.models.devicesDAO(conn);

    dadosDispositivos.register_devices_db(dados, function(err, result){
    	
    })

}