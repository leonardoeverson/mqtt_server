function cadastroDAO(conn){
	this.connection = conn;
}

cadastroDAO.prototype.grava_usuario = function(dados, callback) {
	query = "insert into usuario (nome, email, senha) values(?,?,?)";
	connection.query(query, dados, callback);
};


module.exports = function() {
	return cadastroDAO;
}