module.exports.list_devices = function(app, request, response){
	let conn = app.config.dbconn;
	let dadosDispositivos = new app.app.models.devicesDAO(conn);

	let dados = {};
	dados.id_user = request.session.id_user;

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
    let conn = app.config.dbconn;
    let dadosDispositivos = new app.app.models.devicesDAO(conn);
	let dados = request.body;

	console.log(dados);
    dados.id_user = request.session.id_user;

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
	let conn = app.config.dbconn;
	let dadosDispositivos = new app.app.models.devicesDAO(conn);
	let dados = {};

	dados.id_user = request.session.id_user;

	return new Promise(function(resolve, reject){

		dadosDispositivos.list_devices_db(dados, function(error, result){
			if(!error){
				resolve(result)
			}else{
				console.log(error);
				reject(error);
			}
		});
	});
};

module.exports.connected_devices = function(app, request, response){
	let conn = app.config.dbconn;
	let dadosDispositivos = new app.app.models.devicesDAO(conn);
	let dados = {};
	dados.id_user = request.session.id_user;

	return new Promise((resolve, reject)=>{
		dadosDispositivos.connected_device_db(dados, function(error, result){
			if(!error){
				resolve(result)
			}else{
				console.log(error);
				reject(error);
			}
		});
	})
};

module.exports.check_device_reg = function(app, id_user, client_id){
	let conn = app.config.dbconn;
	let dadosDispositivos = new app.app.models.devicesDAO(conn);
	let dados = {};
	dados.id_user = id_user;
	dados.client_id = client_id;

	return new Promise((resolve, reject)=>{
		dadosDispositivos.check_device_reg_db(dados, function(error, result){
			if(!error){
				resolve(result);
			}else{
				console.log(error);
				reject(error);
			}
		});
	})
};

module.exports.delete_device = function(app, request, response){
	let conn = app.config.dbconns;
	let dadosDispositivos = new app.app.models.devicesDAO(conn);
    let dados = request.body;

	dadosDispositivos.delete_device_db(dados.device_id, (error, result) =>{
        if(!error){
            response.send(JSON.stringify('ok')).end();
        }else{
            response.sendStatus(200).end();
        }
    })
};