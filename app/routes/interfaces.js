module.exports = function(app){

    app.get('/mqtt_web',function(request, response){
        if(request.session.logged){
            response.render('interface/mqtt_web');
        }else{
            response.redirect("/");
        }
    })
};