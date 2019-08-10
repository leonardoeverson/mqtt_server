let cadastro = require('../controllers/cadastro');
let devices = require('../controllers/devices');
let settings = require('../controllers/settings');
let login = require('../controllers/login');
let express = require('express');
let router = express.Router();

const check = require('express-validator/check').check;
const validationResult = require('express-validator/check').validationResult;

router.get('/cadastro', (request, response) => {
	response.render("cadastro/cadastro");
});

router.post('/cadastro/inserir', [
	check('email').isEmail(),
	check('senha').isLength({ min: 8 }),
	check('senhav').isLength({ min: 8 })], (request, response) => {

	const errors = validationResult(request);

	if (!errors.isEmpty()) {
		response.render("cadastro/cadastro", { validacao: errors, status: 0 });
		return;
	}else{
		cadastro.cadastro_usuario(request, response);
	}

});

router.get('/profile', (request, response) => {
	if (request.session.logged) {
		cadastro.dados_cadastro(request, response);
	} else {
		response.redirect("/");
	}
});

router.get('/recuperar/senha', (request, response) => {
	response.render('recuperar_acesso');
});

router.post('/recuperar/senha/verificar', (request, response) => {
	cadastro.senha_reset(request, response);
});

router.get('/password/request/reset', (request, response) => {
	cadastro.valida_token(request, response);
})

router.post('/password/request/reset', (request, response) => {
	cadastro.troca_senha(request, response);
})

router.post('/dados/usuario/salvar', (request, response) => {

	if (request.session.logged) {
		cadastro.atualiza_dados_cadastro(request, response);
	} else {
		response.sendStatus(403);
	}

});

router.post('/dados/usuario/senha', (request, response) => {

	if (request.session.logged) {
		cadastro.altera_senha_cadastro(request, response)
	} else {
		response.sendStatus(503);
	}

})


module.exports = router