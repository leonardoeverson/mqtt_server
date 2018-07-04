module.exports.login_usuario = function(app, request, response){
	var body = request.body;
	console.log(body);

	response.send('ok');
}