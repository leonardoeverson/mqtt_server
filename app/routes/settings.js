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

    app.get('/dados/connections', function(request, response){
        let resposta;
    });

    app.get('/server/metrics', function(request, response){
        if(request.session.logged){
            //console.log(request.query);
            console.log(request.query);
            let body = request.query;

            if(body.filtro == 1 || body.filtro == 2 ){
                app.app.controllers.topics.message_metric(app, request, response);
            }else{
                app.app.controllers.topics.conn_metrics(app, request, response);
            }
        }
    });


    app.get('/stats', function(request, response){
        if(request.session.logged){
            response.render("stats",{prefixo : request.session.prefix_user});
        }else{
            response.redirect("/");
        }
    });

    app.get('/info', function(request, response){
        if(request.session.logged){
            response.render("info",{prefixo : request.session.prefix_user});
        }else{
            response.redirect("/");
        }
    });
};