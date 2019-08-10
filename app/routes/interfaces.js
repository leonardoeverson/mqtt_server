let express = require('express');
let router = express.Router();
let devices = require('../controllers/devices');

router.get('/mqtt_web', function (request, response) {
    if (request.session.logged) {
        let req_data = {};
        //req_data.token = request.session.user_token;
        req_data.prefix_user = request.session.prefix_user;
        req_data.user_id = request.session.user_id;
        req_data.username = request.session.username;
        req_data.password = request.session.password;
        req_data.prefixo = request.session.prefix_user;
        response.render('interface/mqtt_web', req_data);
    } else {
        response.redirect("/");
    }
});

router.get('/traffic', function (request, response) {
    if (request.session.logged) {
        let req_data = {};
        //req_data.token = request.session.user_token;
        req_data.prefix_user = request.session.prefix_user;
        req_data.user_id = request.session.user_id;
        req_data.username = request.session.username;
        req_data.password = request.session.password;
        req_data.prefixo = request.session.prefix_user;
        response.render('traffic', req_data);
    } else {
        response.redirect("/");
    }
});

module.exports = router