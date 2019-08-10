let express = require('express');
let router = express.Router();
let devices = require('../controllers/devices');

router.get('/home', async function (request, response) {
	if (request.session.logged) {
		let result = await devices.connected_devices(router, request, response);
		response.render('home/index', { dados: result, prefixo: request.session.prefix_user });
	} else {
		response.redirect("/")
	}
});

router.get('/index', async function (request, response) {
	if (request.session.logged) {
		let result = await devices.connected_devices(router, request, response);
		response.render('home/index', { dados: result, prefixo: request.session.prefix_user });
	} else {
		response.redirect("/")
	}
})

module.exports = router
