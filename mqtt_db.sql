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
  `user_id` int(11) NOT NULL,
  `client_id` varchar(200) NOT NULL,
  `client_address` varchar(100) NOT NULL,
  `client_port` int(6) NOT NULL,
  `device_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_conn`)
) ENGINE=InnoDB AUTO_INCREMENT=1513 DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela mqtt.conn_clients: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `conn_clients` DISABLE KEYS */;
REPLACE INTO `conn_clients` (`id_conn`, `user_id`, `client_id`, `client_address`, `client_port`, `device_id`) VALUES
	(1509, 3, '2aaa557b-737f-47c7-840b-6a9c040bf4811548523270854', '127.0.0.1', 49422, 0),
	(1510, 7, '446137de-3379-43fc-a694-cbbb62b02ee71548524312789', '127.0.0.1', 49421, 0),
	(1512, 3, 'mqtt_webclient_R5Ji2VEBuc', '127.0.0.1', 49661, 0);
/*!40000 ALTER TABLE `conn_clients` ENABLE KEYS */;

-- Copiando estrutura para tabela mqtt.conn_log
CREATE TABLE IF NOT EXISTS `conn_log` (
  `id_conn` int(11) NOT NULL AUTO_INCREMENT,
  `device_id` int(11) DEFAULT NULL,
  `client_id` varchar(100) DEFAULT NULL,
  `client_address` varchar(100) DEFAULT NULL,
  `client_port` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `datetime` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id_conn`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela mqtt.conn_log: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `conn_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `conn_log` ENABLE KEYS */;

-- Copiando estrutura para tabela mqtt.mqtt_metrics
CREATE TABLE IF NOT EXISTS `mqtt_metrics` (
  `device_id` int(11) DEFAULT NULL,
  `topic` varchar(200) DEFAULT NULL,
  `length` double DEFAULT NULL,
  `timestamp` timestamp NULL DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `conn_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela mqtt.mqtt_metrics: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `mqtt_metrics` DISABLE KEYS */;
/*!40000 ALTER TABLE `mqtt_metrics` ENABLE KEYS */;

-- Copiando estrutura para tabela mqtt.server_options
CREATE TABLE IF NOT EXISTS `server_options` (
  `id_option` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(200) DEFAULT NULL,
  KEY `Index 1` (`id_option`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela mqtt.server_options: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `server_options` DISABLE KEYS */;
REPLACE INTO `server_options` (`id_option`, `description`) VALUES
	(1, 'Não permitir conexões de itens que não estão cadastrados'),
	(2, 'Permitir somente conexões seguras');
/*!40000 ALTER TABLE `server_options` ENABLE KEYS */;

-- Copiando estrutura para tabela mqtt.tokens
CREATE TABLE IF NOT EXISTS `tokens` (
  `token_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `token_value` varchar(200) DEFAULT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`token_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela mqtt.tokens: ~12 rows (aproximadamente)
/*!40000 ALTER TABLE `tokens` DISABLE KEYS */;
REPLACE INTO `tokens` (`token_id`, `user_id`, `token_value`, `timestamp`) VALUES
	(8, 7, '8119a9ec-8c8b-480d-a54c-98cabc40532e', '2019-01-13 15:54:51'),
	(9, 3, '4cac8f3b-77f0-40e9-8b7e-4bbb623291bd', '2019-01-23 14:03:55'),
	(10, NULL, NULL, '2019-01-26 14:58:58'),
	(11, NULL, NULL, '2019-01-26 14:59:06'),
	(12, NULL, '4956f62c-5ce7-424e-9af8-3c56bc4bcda0', '2019-01-26 15:01:01'),
	(13, NULL, '1dacbc6a-b2bd-47fc-9b36-738a77bcf012', '2019-01-26 15:01:05'),
	(14, NULL, 'ea1ca618-b24e-46e2-a3be-93d7c720b263', '2019-01-26 15:01:11'),
	(15, NULL, 'c646ae1c-f582-4940-8de7-d5d1ab48b64c', '2019-01-26 15:01:39'),
	(16, NULL, NULL, '2019-01-26 15:23:13'),
	(17, NULL, NULL, '2019-01-26 15:26:10'),
	(18, NULL, NULL, '2019-01-26 15:26:25'),
	(19, NULL, NULL, '2019-01-26 15:29:10');
/*!40000 ALTER TABLE `tokens` ENABLE KEYS */;

-- Copiando estrutura para tabela mqtt.tp_publish
CREATE TABLE IF NOT EXISTS `tp_publish` (
  `device_id` int(11) DEFAULT NULL,
  `tp_publish` varchar(200) DEFAULT NULL,
  `client_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela mqtt.tp_publish: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `tp_publish` DISABLE KEYS */;
/*!40000 ALTER TABLE `tp_publish` ENABLE KEYS */;

-- Copiando estrutura para tabela mqtt.tp_subscribe
CREATE TABLE IF NOT EXISTS `tp_subscribe` (
  `tp_subscribe` varchar(200) DEFAULT NULL,
  `device_id` varchar(200) DEFAULT NULL,
  `qos` int(2) DEFAULT NULL,
  `client_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela mqtt.tp_subscribe: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `tp_subscribe` DISABLE KEYS */;
/*!40000 ALTER TABLE `tp_subscribe` ENABLE KEYS */;

-- Copiando estrutura para tabela mqtt.users
CREATE TABLE IF NOT EXISTS `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `senha` varchar(200) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela mqtt.users: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
REPLACE INTO `users` (`user_id`, `nome`, `email`, `senha`) VALUES
	(3, 'Leonardo Everson', 'leonardo@batista.g12.br', '$2b$10$6Vm9DldTJTs5FNSNgHl9h.pZBNs5uQcaWyGWUV9Nv9UcRfZwHhr2.'),
	(7, 'Leonardo Everson', 'llinharespinheiro@gmail.com', '$2b$10$.YsW//S0gpyf2.NeC/v4VOZJHTCL83UXD4RkQF6slsjuROF.YATbu');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

-- Copiando estrutura para tabela mqtt.user_devices
CREATE TABLE IF NOT EXISTS `user_devices` (
  `user_id` int(11) NOT NULL,
  `device_id` int(11) NOT NULL AUTO_INCREMENT,
  `device_name` varchar(200) NOT NULL DEFAULT '0',
  `publish` int(1) DEFAULT NULL,
  `subscribe` int(1) DEFAULT NULL,
  PRIMARY KEY (`device_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela mqtt.user_devices: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `user_devices` DISABLE KEYS */;
REPLACE INTO `user_devices` (`user_id`, `device_id`, `device_name`, `publish`, `subscribe`) VALUES
	(3, 13, 'NodeRed', 2, 2),
	(3, 14, 'NodeRed2', 2, 2),
	(3, 15, 'NodeRed1', 1, 2);
/*!40000 ALTER TABLE `user_devices` ENABLE KEYS */;

-- Copiando estrutura para tabela mqtt.user_options
CREATE TABLE IF NOT EXISTS `user_options` (
  `user_id` int(11) DEFAULT NULL,
  `id_server_option` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela mqtt.user_options: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `user_options` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_options` ENABLE KEYS */;

-- Copiando estrutura para tabela mqtt.user_prefix
CREATE TABLE IF NOT EXISTS `user_prefix` (
  `user_id` int(11) DEFAULT NULL,
  `prefix_value` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela mqtt.user_prefix: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `user_prefix` DISABLE KEYS */;
REPLACE INTO `user_prefix` (`user_id`, `prefix_value`) VALUES
	(3, '77iNRy'),
	(7, 'xgnyRB');
/*!40000 ALTER TABLE `user_prefix` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
