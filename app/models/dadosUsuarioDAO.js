function dadosUsuariosDAO(conn){
	this.connection = conn;
}


dadosUsuariosDAO.prototype.verifica_dados_usuarios = function(dados, callback) {
	var query = "SELECT email, senha FROM usuarios where email ='"+dados.email+"'' and senha = '"+dados.senha+"'";
	this.connection.query(query, callback);
};


module.exports = function(){
	return dadosUsuariosDAO;
}