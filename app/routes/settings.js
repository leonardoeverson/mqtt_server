module.exports =  function(app){
    app.get('/settings',function(request, response){
        response.render('settings');
    })


};