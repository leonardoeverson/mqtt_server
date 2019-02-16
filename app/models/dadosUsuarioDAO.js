function dadosUsuariosDAO(conn){
	this.connection = conn;
}

dadosUsuariosDAO.prototype.verifica_dados_usuarios = function(dados, callback) {
	let query = "SELECT email, senha FROM users where email = ? and senha = ?";
	this.connection.query(query,[dados], callback);
};

dadosUsuariosDAO.prototype.dados_conexao_dispositivo = function(user_id, callback){
	let query = "SELECT * FROM device_username_password where user_id = ?";
	this.connection.query(query,[user_id], callback);
};

module.exports = function(){
	return dadosUsuariosDAO;
};