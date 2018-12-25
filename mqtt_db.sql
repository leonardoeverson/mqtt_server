-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           10.3.11-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win32
-- HeidiSQL Versão:              9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Copiando estrutura do banco de dados para mqtt
CREATE DATABASE IF NOT EXISTS `mqtt` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `mqtt`;

-- Copiando estrutura para tabela mqtt.conn_clients
CREATE TABLE IF NOT EXISTS `conn_clients` (
  `id_conn` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) NOT NULL,
  `client_id` varchar(200) NOT NULL,
  `client_address` varchar(100) NOT NULL,
  `client_port` int(6) NOT NULL,
  `device_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_conn`)
) ENGINE=InnoDB AUTO_INCREMENT=244 DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela mqtt.conn_clients: ~1 rows (aproximadamente)
/*!40000 ALTER TABLE `conn_clients` DISABLE KEYS */;
REPLACE INTO `conn_clients` (`id_conn`, `id_user`, `client_id`, `client_address`, `client_port`, `device_id`) VALUES
	(243, 3, 'ESP8266Client-9812', '::ffff:192.168.10.100', 49169, NULL);
/*!40000 ALTER TABLE `conn_clients` ENABLE KEYS */;

-- Copiando estrutura para tabela mqtt.server_options
CREATE TABLE IF NOT EXISTS `server_options` (
  `id_option` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(200) DEFAULT NULL,
  KEY `Index 1` (`id_option`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela mqtt.server_options: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `server_options` DISABLE KEYS */;
REPLACE INTO `server_options` (`id_option`, `description`) VALUES
	(1, 'Permitir subscribe e publish de qualquer um que tiver dos dados de login'),
	(2, 'Permitir somente conexões seguras');
/*!40000 ALTER TABLE `server_options` ENABLE KEYS */;

-- Copiando estrutura para tabela mqtt.users
CREATE TABLE IF NOT EXISTS `users` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `senha` varchar(200) NOT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela mqtt.users: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
REPLACE INTO `users` (`id_user`, `nome`, `email`, `senha`) VALUES
	(3, 'Leonardo Everson', 'leonardo@batista.g12.br', '$2b$10$6Vm9DldTJTs5FNSNgHl9h.pZBNs5uQcaWyGWUV9Nv9UcRfZwHhr2.');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

-- Copiando estrutura para tabela mqtt.user_devices
CREATE TABLE IF NOT EXISTS `user_devices` (
  `id_user` int(11) NOT NULL,
  `device_id` int(11) NOT NULL AUTO_INCREMENT,
  `device_name` varchar(200) NOT NULL DEFAULT '0',
  `publish` int(1) DEFAULT NULL,
  `subscribe` int(1) DEFAULT NULL,
  PRIMARY KEY (`device_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela mqtt.user_devices: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `user_devices` DISABLE KEYS */;
REPLACE INTO `user_devices` (`id_user`, `device_id`, `device_name`, `publish`, `subscribe`) VALUES
	(3, 11, 'NodeRed', 1, 1),
	(3, 12, 'NodeRed', 2, 2);
/*!40000 ALTER TABLE `user_devices` ENABLE KEYS */;

-- Copiando estrutura para tabela mqtt.user_options
CREATE TABLE IF NOT EXISTS `user_options` (
  `id_user` int(11) DEFAULT NULL,
  `id_server_option` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela mqtt.user_options: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `user_options` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_options` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
