-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           10.4.6-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              9.5.0.5196
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
  `method` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id_conn`)
) ENGINE=InnoDB AUTO_INCREMENT=131 DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela mqtt.conn_clients: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `conn_clients` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=132 DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela mqtt.conn_log: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `conn_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `conn_log` ENABLE KEYS */;

-- Copiando estrutura para tabela mqtt.device_pb_topic
CREATE TABLE IF NOT EXISTS `device_pb_topic` (
  `device_id` int(11) DEFAULT NULL,
  `pb_topic` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela mqtt.device_pb_topic: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `device_pb_topic` DISABLE KEYS */;
/*!40000 ALTER TABLE `device_pb_topic` ENABLE KEYS */;

-- Copiando estrutura para tabela mqtt.device_sb_topic
CREATE TABLE IF NOT EXISTS `device_sb_topic` (
  `device_id` int(11) DEFAULT NULL,
  `sb_topic` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela mqtt.device_sb_topic: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `device_sb_topic` DISABLE KEYS */;
/*!40000 ALTER TABLE `device_sb_topic` ENABLE KEYS */;

-- Copiando estrutura para tabela mqtt.device_username_password
CREATE TABLE IF NOT EXISTS `device_username_password` (
  `user_id` int(11) DEFAULT NULL,
  `username` varchar(200) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela mqtt.device_username_password: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `device_username_password` DISABLE KEYS */;
/*!40000 ALTER TABLE `device_username_password` ENABLE KEYS */;

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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela mqtt.server_options: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `server_options` DISABLE KEYS */;
INSERT INTO `server_options` (`id_option`, `description`) VALUES
	(1, 'Não Permitir a Conexão de Dispositivos que não esstão cadastrados');
/*!40000 ALTER TABLE `server_options` ENABLE KEYS */;

-- Copiando estrutura para tabela mqtt.tokens
CREATE TABLE IF NOT EXISTS `tokens` (
  `token_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `token_value` varchar(200) DEFAULT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`token_id`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela mqtt.tokens: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `tokens` ENABLE KEYS */;

-- Copiando estrutura para tabela mqtt.tokens_links
CREATE TABLE IF NOT EXISTS `tokens_links` (
  `user_id` int(11) DEFAULT NULL,
  `activate_date` timestamp NULL DEFAULT NULL,
  `lifetime` int(11) DEFAULT NULL,
  `token` varchar(500) DEFAULT NULL,
  `used_date` timestamp NULL DEFAULT NULL,
  `token_id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`token_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela mqtt.tokens_links: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `tokens_links` DISABLE KEYS */;
/*!40000 ALTER TABLE `tokens_links` ENABLE KEYS */;

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
  `device_id` int(10) DEFAULT NULL,
  `qos` int(2) DEFAULT NULL,
  `client_id` varchar(200) DEFAULT NULL
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
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela mqtt.users: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
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

-- Copiando dados para a tabela mqtt.user_devices: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `user_devices` DISABLE KEYS */;
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

-- Copiando dados para a tabela mqtt.user_prefix: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `user_prefix` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_prefix` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
