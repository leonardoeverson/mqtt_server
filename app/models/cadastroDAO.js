function cadastroDAO(conn){
	this.connection = conn;
}

cadastroDAO.prototype.grava_usuario = function(dados, callback) {
	let bcrypt = require('bcrypt');
	let saltRounds = 10;
	let salt = bcrypt.genSaltSync(saltRounds);
	dados.senha = bcrypt.hashSync(dados.senha, salt);

	let query = "insert into users (nome, email, senha) values('"+dados.nome+"','"+dados.email+"','"+dados.senha+"')";
	this.connection.query(query, callback);
};

cadastroDAO.prototype.verifica_email_existente = function(email, callback) {
	let query = "select email from users where email = '"+email+"'";
	this.connection.query(query, callback);
};

module.exports = function() {
	return cadastroDAO;
};