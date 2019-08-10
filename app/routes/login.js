let cadastro = require('../controllers/cadastro');
let devices = require('../controllers/devices');
let settings = require('../controllers/settings');
let login = require('../controllers/login');
let express = require('express');
let router = express.Router();

router.get('/login', function (request, response) {
	response.render('login/index');
});

router.get('/', function (request, response) {
	if (request.session.logged) {
		response.redirect("/home");
	} else {
		response.render('login/index');
	}
});

router.post('/login', function (request, response) {
	login.login_usuario(request, response);
});

router.get('/logout', function (request, response) {
	request.session.destroy(function (err) {
		response.redirect("/");
	});
});

module.exports = router