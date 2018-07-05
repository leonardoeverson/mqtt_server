function cadastroDAO(conn){
	this.connection = conn;
}

cadastroDAO.prototype.grava_usuario = function(dados, callback) {
	var bcrypt = require('bcrypt');
	var saltRounds = 10;
	var salt = bcrypt.genSaltSync(saltRounds);
	dados.senha = bcrypt.hashSync(dados.senha, salt);

	var query = "insert into usuarios (nome, email, senha) values('"+dados.nome+"','"+dados.email+"','"+dados.senha+"')";
	this.connection.query(query, callback);
};


cadastroDAO.prototype.verifica_email_existente = function(email, callback) {
	var query = "select email from usuarios where email ='"+email+"'";

	this.connection.query(query, callback);
};

module.exports = function() {
	return cadastroDAO;
}