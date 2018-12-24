module.exports =  function(app){

    app.get('/settings',function(request, response){
        app.app.controllers.settings.get_server_opts(app, request, response);
    })

    app.post('/settings', function(request, response){
        console.log("OK");
    })

};