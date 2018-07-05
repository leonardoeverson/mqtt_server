function loginDAO(conn){
	this.connection = conn;
}

loginDAO.prototype.valida_login = function(dados, callback) {
	var query = "SELECT * FROM usuarios where email = ? and senha = ?";
	this.connection.query(query,[dados.email, dados.senha],callback);
};

module.exports = function(){
	return loginDAO;
}