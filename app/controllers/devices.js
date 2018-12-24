module.exports.list_devices = function(app, request, response){
	let conn = app.config.dbconn();
	let dadosDispositivos = new app.app.models.devicesDAO(conn);

	let dados = {};
	dados.user_id = request.session.user_id;
	//

	dadosDispositivos.list_devices_db(dados, function(error, result){
		if(!error){
			response.render("devices/list",{validacao : result});
		}else{
			console.log(error);
			response.render("devices/list",{validacao : {}});
		}
	})
};

module.exports.register_devices = function(app, request, response){
    let conn = app.config.dbconn();
    let dadosDispositivos = new app.app.models.devicesDAO(conn);

	let dados = request.body;
	
	console.log(dados);
	
    dados.user_id = request.session.user_id;
    //
    if(dados.device_topic == 'undefined'){
    	dados.device_topic = '';
    }

    dadosDispositivos.register_devices_db(dados, function(error, result){
    	if(!error){
    		response.render("devices/register",{validacao:[{'mensagem':'dados gravados com sucesso', 'status': 0}]});
    	}else{
    		console.log(error);
    		response.render("devices/register",{validacao:[{'mensagem':'erro ao cadastrar o dispositivo', 'status': 1}]});
    	}
    })

};

module.exports.count_devices_db = function(app, request, response){
	let conn = app.config.dbconn();
	let dadosDispositivos = new app.app.models.devicesDAO(conn);

	let dados = {};
	dados.user_id = request.session.user_id;
	let count = 0;

	dadosDispositivos.list_devices_db(dados, function(error, result){
		if(!error){
			console.log(result);
			result.length;
		}else{
			 console.log(null);
		}
	})

	console.log(count);
	return count;

}