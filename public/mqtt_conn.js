

function server_connect(clientid, username, password){
    let options = {
        clientId: clientid,
        username: username,
        password: password,
        protocolId: 'MQTT',
        protocolVersion: 4,
        clean: true,
        keepalive: 120,
        reconnectPeriod: 1000,
        connectTimeout: 30 * 1000,
        will: {
            topic: prefix_user + '/WillMsg',
            payload: 'conexão fechada de forma anormal..!',
            qos: 0,
            retain: false
        },
        rejectUnauthorized: false
    };

    let host = "ws://localhost:8888";

    try{
        client = mqtt.connect(host, options);

        client.on('error', function (err) {
            console.log(err);
            client.end()
        });

        client.on('connect', function () {
            console.log('client connected:' + options.clientId)
        });

        client.on('message', function (topic, message, packet) {
            console.log('Received Message:= ' + message.toString() + '\nOn topic:= ' + topic);
            tabela.innerHTML += "<tr><td>"+topic+"</td><td>"+message.toString()+"</td></tr>";
        });

        client.on('close', function () {
            console.log(options.clientId + ' disconnected')
        });

        return true;
    }catch (e) {
        console.log(e);
        return false;
    }

}
