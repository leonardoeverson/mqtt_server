function loginDAO(conn){
	this.connection = conn;
}

loginDAO.prototype.valida_login = function(dados, callback) {
	var query = "SELECT * FROM users where email = ?";
	this.connection.query(query,[dados.email],callback);
};

module.exports = function(){
	return loginDAO;
};