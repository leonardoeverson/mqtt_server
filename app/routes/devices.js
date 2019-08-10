let express = require('express');
let router = express.Router();
let devices = require('../controllers/devices');

router.get('/devices/register', function (request, response) {
	if (request.session.logged) {
		response.render('devices/register', { prefixo: request.session.prefix_user });
	} else {
		response.redirect("/")
	}
});

router.post('/devices/register', function (request, response) {
	devices.register_devices(request, response);
});


router.get('/devices/list', function (request, response) {
	if (request.session.logged) {
		devices.list_devices(request, response);
	} else {
		response.redirect("/");
	}
});

router.get('/devices/connected', function (request, response) {
	if (request.session.logged) {
		devices.connected_devices(request, response);
	} else {
		response.redirect("/");
	}
});

router.delete('/device/delete', function (request, response) {
	if (request.session.logged) {
		devices.delete_device(request, response);
	} else {
		response.redirect("/");
	}
});

router.get('/device/edit', function (request, response) {
	if (request.session.logged) {
		devices.get_device_data(request, response);
	} else {
		response.redirect('/');
	}
});

router.get('/device/data', function (request, response) {
	if (request.session.logged) {
		devices.get_device_data_topic( request, response);
	} else {
		response.redirect('/');
	}
});

router.post('/devices/edit', (request, response) => {
	if (request.session.logged) {
		devices.update_device_data( request, response);
	} else {
		response.redirect('/')
	}
})

module.exports = router