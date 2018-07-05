function cadastroDAO(conn){
	this.connection = conn;
}

cadastroDAO.prototype.grava_usuario = function(dados, callback) {
	var bcrypt = require('bcrypt');
	var salt = bcrypt.genSaltSync(saltRounds);
	dados.senha = bcrypt.hashSync(dados.senha, salt);

	query = "insert into usuario (nome, email, senha) values(?,?,?)";
	this.connection.query(query, [dados], callback);
};


module.exports = function() {
	return cadastroDAO;
}