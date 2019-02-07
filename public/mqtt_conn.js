let client = null;
let clientid = "mqtt_webclient_" + makeid();
let prefix_user = '<%= prefix_user %>';

function server_connect(){
    let options = {
        clientId: clientid,
        username: '<%= username %>',
        password: '<%= password %>',
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
            console.log('Received Message:= ' + message.toString() + '\nOn topic:= ' + topic)
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


pub_btn.addEventListener('click', function(event){
    event.preventDefault();

    if(topic_pub.value.trim().length === 0|| mensagem.value.trim().length === ""){
        alert("valores vazios");
        return;
    }

    let topic = prefix_user+"/"+topic_pub.value;
    let qos = Number(qos_1.value);
    let mensagem_ = mensagem.value;

    publish(topic, mensagem_, qos);

});


subs_btn.addEventListener('click', function(event){
    event.preventDefault();

    if(topic_sub.value.trim().length === 0){
        alert("tópico vazio");
        return;
    }

    let topic = prefix_user+"/"+topic_sub.value;
    let qos = Number(qos_2.value);

    subscribe(topic, qos);

});

$(document).ready(function(){
    $.notify("Conectando ao servidor...", "info")
    if(server_connect()){
        $.notify("Conectado!", "success");
    }else{
        $.notify("Falha ao conectar ao servidor, atualize a página", "error");
    }
});
