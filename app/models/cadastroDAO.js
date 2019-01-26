function cadastroDAO(conn){
	this.connection = conn;
}

cadastroDAO.prototype.grava_usuario = function(dados, callback) {
	let bcrypt = require('bcrypt');
	let saltRounds = 10;
	let salt = bcrypt.genSaltSync(saltRounds);
	dados.senha = bcrypt.hashSync(dados.senha, salt);

	let query = "insert into users (nome, email, senha) values(?)";
	this.connection.query(query, [dados], callback);
};

cadastroDAO.prototype.verifica_email_existente = function(email, callback) {
	let query = "select email from users where email = ?";
	this.connection.query(query, [email], callback);
};

module.exports = function() {
	return cadastroDAO;
};