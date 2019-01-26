function dadosUsuariosDAO(conn){
	this.connection = conn;
}

dadosUsuariosDAO.prototype.verifica_dados_usuarios = function(dados, callback) {
	var query = "SELECT email, senha FROM users where email = ? and senha = ?";
	this.connection.query(query,[dados], callback);
};

module.exports = function(){
	return dadosUsuariosDAO;
};