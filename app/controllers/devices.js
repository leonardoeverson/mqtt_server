module.exports.list_devices = function(app, request, response){

}

module.exports.register_devices = function(app, request, response){
    var conn = app.config.dbconn();
    var dadosDispositivos = new app.app.models.devicesDAO(conn);

    var dados = request.body;
    dados.user_id = request.session.user_id;
    //

    dadosDispositivos.register_devices_db(dados, function(error, result){
    	if(!error){
    		response.render("devices/register",{validacao:[{'mensagem':'dados gravados com sucesso', 'status': 0}]});
    	}else{
    		console.log(error)
    		response.render("devices/register",{validacao:[{'mensagem':'erro ao cadastrar o dispositivo', 'status': 1}]});
    	}
    })

}