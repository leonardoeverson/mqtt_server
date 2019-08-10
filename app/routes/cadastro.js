let cadastro = require('../controllers/cadastro')
let express = require('express');
let router = express.Router();

router.get('/cadastro', function (request, response) {
	response.render("cadastro/cadastro");
});

router.post('/cadastro/inserir', function (request, response) {
	cadastro.cadastro_usuario( request, response);
});

router.get('/profile', function (request, response) {
	if (request.session.logged) {
		cadastro.dados_cadastro( request, response);
	} else {
		response.redirect("/");
	}
});

router.get('/recuperar/senha', (request, response) => {
	response.render('recuperar_acesso');
});

router.post('/recuperar/senha/verificar', (request, response) => {
	cadastro.senha_reset( request, response);
});

router.get('/password/request/reset', function (request, response) {
	cadastro.valida_token( request, response);
})

router.post('/password/request/reset', function (request, response) {
	cadastro.troca_senha( request, response);
})

router.post('/dados/usuario/salvar', function (request, response) {
	if (request.session.logged) {
		cadastro.atualiza_dados_cadastro( request, response);
	} else {
		response.sendStatus(403);
	}
});

router.post('/dados/usuario/senha', function (request, response) {
	if (request.session.logged) {
		cadastro.altera_senha_cadastro( request, response)
	} else {
		response.sendStatus(503);
	}

})


module.exports = router