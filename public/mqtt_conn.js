

function subscribe(topic, qos){
    if(client != null){
        client.subscribe(topic, {qos: qos});
    }else{
        alert("null connection!");
    }
}

function makeid() {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function publish(topic, message, qos){
    console.log(topic);
    console.log(message);
    if(client != null){
        try{
            client.publish(topic, message,{qos: qos, retain: false});
            tabela.innerHTML += "<tr><td>"+topic+"</td><td>"+message+"</td></tr>";
        }catch(e){
            console.log(e);
        }

    }else{
        alert("null connection!");
    }
}

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

        return client.connected;
    }catch (e) {
        console.log(e);
        return false;
    }

}


