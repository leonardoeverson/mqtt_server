function loginDAO(conn){
	this.connection = conn;
}

loginDAO.prototype.valida_login = function(dados, callback) {
	var query = "SELECT * FROM where email = ? and senha = ?";
	
	connection.query(query,[body],callback);
};

module.exports = function(){
	return loginDAO;
}