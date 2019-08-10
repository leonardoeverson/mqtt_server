let express = require('express');
let router = express.Router();
let cadastro = require('../controllers/cadastro')
let devices = require('../controllers/devices')
let settings = require('../controllers/settings')

router.get('/settings', function (request, response) {
    if (request.session.logged) {
        settings.get_server_opts(request, response);
    } else {
        response.redirect("/");
    }
});

router.post('/settings', function (request, response) {
    if (request.session.logged) {
        settings.post_server_opts(request, response);
    } else {
        response.redirect("/");
    }
});

router.get('/dados/dispositivos', async function (request, response) {
    let resposta = await devices.count_devices_db(request, response);
    response.send(JSON.stringify(resposta));
});

router.get('/dados/connections', function (request, response) {
    let resposta;
});

router.get('/server/metrics', function (request, response) {
    if (request.session.logged) {
        //console.log(request.query);
        console.log(request.query);
        let body = request.query;

        if (body.filtro == 1 || body.filtro == 2) {
            topics.message_metric( request, response);
        } else {
            topics.conn_metrics(request, response);
        }
    }
});


router.get('/stats', function (request, response) {
    if (request.session.logged) {
        response.render("stats", { prefixo: request.session.prefix_user });
    } else {
        response.redirect("/");
    }
});

router.get('/info', function (request, response) {
    if (request.session.logged) {
        settings.get_username_password_device(request, response);
    } else {
        response.redirect("/");
    }
});

module.exports = router