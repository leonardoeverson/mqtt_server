module.exports =  function(app){

    app.get('/settings',function(request, response){
        if(request.session.logged){
            app.app.controllers.settings.get_server_opts(app, request, response);
        }else{
            response.redirect("/");
        }
    });

    app.post('/settings', function(request, response){        
        if(request.session.logged){
            app.app.controllers.settings.post_server_opts(app, request, response);
        }else{
            response.redirect("/");
        }
    });

    app.get('/dados/dispositivos', async function(request, response){
        let resposta = await app.app.controllers.devices.count_devices_db(app, request, response);
        response.send(JSON.stringify(resposta));
    });

    app.get('/dados/connections', async function(request, response){
        let resposta;
    });

    app.get('/server/metrics', function(request, response){
        let body = request.query;

        /*
        1 - Tráfego
        2 - Mensagens
        3 - Conexões
        */

        if(body.filtro == 1){
            app.app.controllers.topics.traffic_metric(app, request, response);
        }else if(body.filtro == 2){
            app.app.controllers.topics.message_metric(app, request, response);
        }else{
            app.app.controllers.topics.conn_metrics(app, request, response);
        }
    });
};