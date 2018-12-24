module.exports = function(app){
	app.get('/home',function(request, response){
		if(request.session.logged){
			response.render('home/index');
		}else{
			response.redirect("/")
		}
		
	});

	app.get('/index',function(request, response){
		if(request.session.logged){
			response.render('home/index');
		}else{
			response.redirect("/");
		}
	})
};
