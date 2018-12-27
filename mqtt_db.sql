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
) ENGINE=InnoDB AUTO_INCREMENT=390 DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela mqtt.conn_clients: ~1 rows (aproximadamente)
/*!40000 ALTER TABLE `conn_clients` DISABLE KEYS */;
REPLACE INTO `conn_clients` (`id_conn`, `id_user`, `client_id`, `client_address`, `client_port`, `device_id`) VALUES
	(389, 3, 'ESP8266Client-8265', '::ffff:192.168.10.104', 49179, NULL);
/*!40000 ALTER TABLE `conn_clients` ENABLE KEYS */;

-- Copiando estrutura para tabela mqtt.conn_log
CREATE TABLE IF NOT EXISTS `conn_log` (
  `id_conn` int(11) NOT NULL AUTO_INCREMENT,
  `device_id` int(11) DEFAULT NULL,
  `client_id` varchar(100) DEFAULT NULL,
  `client_address` varchar(100) DEFAULT NULL,
  `client_port` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `datetime` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id_conn`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela mqtt.conn_log: ~11 rows (aproximadamente)
/*!40000 ALTER TABLE `conn_log` DISABLE KEYS */;
REPLACE INTO `conn_log` (`id_conn`, `device_id`, `client_id`, `client_address`, `client_port`, `id_user`, `datetime`) VALUES
	(1, NULL, 'ESP8266Client-a619', '::ffff:192.168.10.104', 49166, 3, '2018-12-27 19:25:59'),
	(2, NULL, 'ESP8266Client-af5b', '::ffff:192.168.10.104', 49167, 3, '2018-12-27 19:26:53'),
	(3, NULL, 'ESP8266Client-227b', '::ffff:192.168.10.104', 49168, 3, '2018-12-27 19:27:07'),
	(4, NULL, 'ESP8266Client-fa1b', '::ffff:192.168.10.104', 49170, 3, '2018-12-27 19:27:44'),
	(5, NULL, 'ESP8266Client-7727', '::ffff:192.168.10.104', 49171, 3, '2018-12-27 19:28:54'),
	(6, NULL, 'ESP8266Client-87d8', '::ffff:192.168.10.104', 49172, 3, '2018-12-27 19:35:23'),
	(7, NULL, 'ESP8266Client-881d', '::ffff:192.168.10.104', 49173, 3, '2018-12-27 19:35:27'),
	(8, NULL, 'ESP8266Client-5283', '::ffff:192.168.10.104', 49174, 3, '2018-12-27 19:35:31'),
	(9, NULL, 'ESP8266Client-9f7b', '::ffff:192.168.10.104', 49175, 3, '2018-12-27 19:38:10'),
	(10, NULL, 'ESP8266Client-c808', '::ffff:192.168.10.104', 49176, 3, '2018-12-27 19:38:26'),
	(11, NULL, 'ESP8266Client-d703', '::ffff:192.168.10.104', 49177, 3, '2018-12-27 19:38:48'),
	(12, NULL, 'ESP8266Client-877d', '::ffff:192.168.10.104', 49178, 3, '2018-12-27 19:43:44'),
	(13, NULL, 'ESP8266Client-8265', '::ffff:192.168.10.104', 49179, 3, '2018-12-27 19:55:12');
/*!40000 ALTER TABLE `conn_log` ENABLE KEYS */;

-- Copiando estrutura para tabela mqtt.server_options
CREATE TABLE IF NOT EXISTS `server_options` (
  `id_option` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(200) DEFAULT NULL,
  KEY `Index 1` (`id_option`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela mqtt.server_options: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `server_options` DISABLE KEYS */;
REPLACE INTO `server_options` (`id_option`, `description`) VALUES
	(1, 'Permitir conexões de itens que não estão cadastrados'),
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
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela mqtt.user_devices: ~1 rows (aproximadamente)
/*!40000 ALTER TABLE `user_devices` DISABLE KEYS */;
REPLACE INTO `user_devices` (`id_user`, `device_id`, `device_name`, `publish`, `subscribe`) VALUES
	(3, 13, 'NodeRed', 2, 2);
/*!40000 ALTER TABLE `user_devices` ENABLE KEYS */;

-- Copiando estrutura para tabela mqtt.user_options
CREATE TABLE IF NOT EXISTS `user_options` (
  `id_user` int(11) DEFAULT NULL,
  `id_server_option` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela mqtt.user_options: ~1 rows (aproximadamente)
/*!40000 ALTER TABLE `user_options` DISABLE KEYS */;
REPLACE INTO `user_options` (`id_user`, `id_server_option`) VALUES
	(3, 2);
/*!40000 ALTER TABLE `user_options` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
