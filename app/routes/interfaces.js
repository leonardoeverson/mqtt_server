module.exports = function(app){

    app.get('/mqtt_web',function(request, response){
        if(request.session.logged){
            response.render('interface/mqtt_web',{token: request.session.user_token});
        }else{
            response.redirect("/");
        }
    })
};