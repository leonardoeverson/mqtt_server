module.exports.list_devices = function (app, request, response) {
    let conn = app.config.dbconn();
    let dadosDispositivos = new app.app.models.devicesDAO(conn);

    let dados = {};
    dados.user_id = request.session.user_id;

    dadosDispositivos.list_devices_db(dados, function (error, result) {
        if (!error) {
            app.app.controllers.connections.db_end_connection(conn);
            response.render("devices/list", {validacao: result, prefixo: request.session.prefix_user});
        } else {
            console.log(error);
            response.render("devices/list", {validacao: {}, prefixo: request.session.prefix_user});
        }
    })
};

module.exports.register_devices = function (app, request, response) {
    let conn = app.config.dbconn();
    let dadosDispositivos = new app.app.models.devicesDAO(conn);
    let dados = request.body;

    dados.user_id = request.session.user_id;

    if (typeof (dados.device_topic) == "undefined") {
        dados.device_topic = '';
    }

    dadosDispositivos.register_devices_db(dados, function (error, result) {
        if (!error) {

            update_sb_pb_topic(dados, app,  request, response, result,()=>{
                response.render("devices/register", {
                    validacao: [{'mensagem': 'dados gravados com sucesso', 'status': 0}],
                    prefixo: request.session.prefix_user
                });
            });

        } else {

            response.render("devices/register", {
                validacao: [{
                    'mensagem': 'erro ao cadastrar o dispositivo',
                    'status': 1
                }]
            });
        }
    })
};

module.exports.count_devices_db = function (app, request, response) {
    let conn = app.config.dbconn();
    let dadosDispositivos = new app.app.models.devicesDAO(conn);
    let dados = {};

    dados.user_id = request.session.user_id;

    return new Promise(function (resolve, reject) {

        dadosDispositivos.list_devices_db(dados, function (error, result) {
            app.app.controllers.connections.db_end_connection(conn);
            if (!error) {
                resolve(result)
            } else {
                console.log(error);
                reject(error);
            }
        });
    });
};

module.exports.connected_devices = function (app, request, response) {
    let conn = app.config.dbconn();
    let dadosDispositivos = new app.app.models.devicesDAO(conn);
    let dados = {};
    dados.user_id = request.session.user_id;

    return new Promise((resolve, reject) => {
        dadosDispositivos.connected_device_db(dados, function (error, result) {
            app.app.controllers.connections.db_end_connection(conn);
            if (!error) {
                resolve(result)
            } else {
                console.log(error);
                reject(error);
            }
        });
    })
};

module.exports.check_device_reg = function (app, user_id, client_id) {
    let conn = app.config.dbconn();
    let dadosDispositivos = new app.app.models.devicesDAO(conn);

    let dados = {};
    dados.user_id = user_id;
    dados.device_name = client_id;

    return new Promise((resolve, reject) => {
        dadosDispositivos.check_device_reg_db(dados, function (error, result) {
            app.app.controllers.connections.db_end_connection(conn);
            if (!error) {
                resolve(result);
            } else {
                if (error) {
                    console.log(error);
                    reject(error);
                }

                resolve(false);
            }
        });
    })
};

module.exports.delete_device = function (app, request, response) {
    let conn = app.config.dbconn();
    let dadosDispositivos = new app.app.models.devicesDAO(conn);
    let dados = request.body;

    dadosDispositivos.delete_device_db(dados.device_id, (error, result) => {
        app.app.controllers.connections.db_end_connection(conn);
        if (!error) {
            response.send(JSON.stringify('ok')).end();
        } else {
            response.sendStatus(200).end();
        }
    })
};

module.exports.publish_perm = function (app, device_id) {
    let conn = app.config.dbconn();
    let dadosDispositivos = new app.app.models.devicesDAO(conn);


    return new Promise((resolve, reject) => {
        dadosDispositivos.get_device_pb_topic_db(device_id, function (error, result) {
            app.app.controllers.connections.db_end_connection(conn);
            if (!error) {
                resolve(result);
            } else {
                if (error) {
                    console.log(error);
                    reject(error);
                }

                resolve(false);
            }
        });
    })
};

module.exports.subscribe_perm = function (app, device_id) {
    let conn = app.config.dbconn();
    let dadosDispositivos = new app.app.models.devicesDAO(conn);

    return new Promise((resolve, reject) => {
        dadosDispositivos.get_device_sb_topic_db(device_id, function (error, result) {
            app.app.controllers.connections.db_end_connection(conn);
            if (!error) {
                resolve(result);
            } else {
                if (error) {
                    console.log(error);
                    reject(error);
                }

                resolve(false);
            }
        });
    })
};

module.exports.get_device_data = function(app, request, response){
    let conn = app.config.dbconn();
    let dadosDispositivos = new app.app.models.devicesDAO(conn);
    let dados = {
        device_id : request.query.device_id,
        user_id : request.session.user_id
    };

    dadosDispositivos.get_device_data_db(dados, (error, result)=>{
        if(!error){
            response.render('devices/edit', {dados : result, prefixo: request.session.prefix })
        }else{
            console.log(error);
        }
    })
};

module.exports.insert_device_data = function(app, request, response){
    let conn = app.config.dbconn();
    let dadosDispositivos = new app.app.models.devicesDAO(conn);
    let dados = {
        device_id : request.query.device_id,
        user_id : request.session.user_id,
        publish : request.body.publish,
        subscribe : request.body.subscribe
    };

    dadosDispositivos.insert_device_data_db(dados, (error, result)=>{
        if(!error){
            //response.render('devices/edit',{validacao:{}})
            update_sb_pb_topic(dados,function(request, response){
                response.render("devices/edit", {
                    validacao: [{'mensagem': 'dados gravados com sucesso', 'status': 0}],
                    prefixo: request.session.prefix_user
                });
            });
        }else{
            console.log(error);
        }
    })
};

function update_sb_pb_topic(dados, app, request, response, result, callback){
    let conn = app.config.dbconn();
    let dadosDispositivos = new app.app.models.devicesDAO(conn);

    if (Number(dados.publish) === 1) {
        if (dados.pb_topic.search(";") > -1) {
            let temp;
            temp = dados.pb_topic.split(';');
            dados.pb_topic = [];
            for (let i = 0; i < temp.length; i++) {
                dados.pb_topic[i] = [];
                dados.pb_topic[i].push(result.insertId, temp[i]);
            }
        } else {
            let temp;
            temp = dados.pb_topic;
            dados.pb_topic = [];
            dados.pb_topic.push([result.insertId, temp]);
        }

        dadosDispositivos.device_pb_topic_db(dados.pb_topic, (err, result) => {
            if (err) {
                response.render("devices/register", {
                    validacao: [{
                        'mensagem': 'erro ao cadastrar o dispositivo',
                        'status': 1
                    }], prefixo: request.session.prefix_user
                });
            }
        });
    }

    if (Number(dados.subscribe) === 1) {

        if (dados.sb_topic.search(";") > -1) {
            let temp;
            temp = dados.sb_topic.split(';');
            dados.sb_topic = [];
            for (let i = 0; i < temp.length; i++) {
                dados.sb_topic[i] = [];
                dados.sb_topic[i].push(result.insertId, temp[i]);
            }
        } else {
            let temp;
            temp = dados.sb_topic;
            dados.sb_topic = [];
            dados.sb_topic.push([result.insertId, temp]);
        }

        dadosDispositivos.device_sb_topic_db(dados.sb_topic, (err, result) => {
            if (err) {
                response.render("devices/register", {
                    validacao: [{
                        'mensagem': 'erro ao cadastrar o dispositivo',
                        'status': 1
                    }], prefixo: request.session.prefix_user
                });
            }
        });

    }

    callback();
}