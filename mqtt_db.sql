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

-- Copiando estrutura para tabela mqtt.client_pub_sub
CREATE TABLE IF NOT EXISTS `client_pub_sub` (
  `id_conn` int(11) DEFAULT NULL,
  `id_device` int(11) DEFAULT NULL,
  `pub_topic` int(11) DEFAULT NULL,
  `sub_topic` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela mqtt.client_pub_sub: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `client_pub_sub` DISABLE KEYS */;
/*!40000 ALTER TABLE `client_pub_sub` ENABLE KEYS */;

-- Copiando estrutura para tabela mqtt.conn_clients
CREATE TABLE IF NOT EXISTS `conn_clients` (
  `id_conn` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) NOT NULL,
  `client_id` varchar(200) NOT NULL,
  `client_address` varchar(100) NOT NULL,
  `client_port` int(6) NOT NULL,
  `device_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_conn`)
) ENGINE=InnoDB AUTO_INCREMENT=642 DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela mqtt.conn_clients: ~1 rows (aproximadamente)
/*!40000 ALTER TABLE `conn_clients` DISABLE KEYS */;
REPLACE INTO `conn_clients` (`id_conn`, `id_user`, `client_id`, `client_address`, `client_port`, `device_id`) VALUES
	(641, 3, 'NodeRed', '::ffff:192.168.10.105', 56430, 13);
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
) ENGINE=InnoDB AUTO_INCREMENT=268 DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela mqtt.conn_log: ~241 rows (aproximadamente)
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
	(13, NULL, 'ESP8266Client-8265', '::ffff:192.168.10.104', 49179, 3, '2018-12-27 19:55:12'),
	(14, NULL, 'ESP8266Client-884d', '::ffff:192.168.10.104', 49180, 3, '2018-12-27 20:26:34'),
	(15, NULL, 'ESP8266Client-407f', '::ffff:192.168.10.104', 49181, 3, '2018-12-27 20:27:11'),
	(16, NULL, 'ESP8266Client-1434', '::ffff:192.168.10.104', 49182, 3, '2018-12-27 20:27:55'),
	(17, NULL, 'ESP8266Client-1791', '::ffff:192.168.10.104', 49183, 3, '2018-12-27 20:28:22'),
	(18, NULL, 'ESP8266Client-76bd', '::ffff:192.168.10.104', 49184, 3, '2018-12-27 20:28:38'),
	(19, NULL, 'ESP8266Client-6ae2', '::ffff:192.168.10.104', 49185, 3, '2018-12-27 20:28:49'),
	(20, NULL, 'ESP8266Client-2df4', '::ffff:192.168.10.104', 49186, 3, '2018-12-27 20:29:58'),
	(21, NULL, 'ESP8266Client-769d', '::ffff:192.168.10.104', 49187, 3, '2018-12-27 20:35:38'),
	(22, NULL, 'ESP8266Client-3503', '::ffff:192.168.10.104', 49153, 3, '2018-12-27 21:11:47'),
	(23, NULL, 'ESP8266Client-a824', '::ffff:192.168.10.104', 49155, 3, '2018-12-27 22:05:43'),
	(24, NULL, 'ESP8266Client-713f', '::ffff:192.168.10.104', 49156, 3, '2018-12-27 22:42:00'),
	(25, NULL, 'ESP8266Client-2384', '::ffff:192.168.10.100', 49156, 3, '2019-01-05 12:43:56'),
	(26, NULL, 'ESP8266Client-b9ef', '::ffff:192.168.10.100', 49153, 3, '2019-01-05 13:18:49'),
	(27, NULL, 'NodeRed', '::ffff:192.168.10.104', 50140, 3, '2019-01-05 13:23:10'),
	(28, NULL, 'NodeRed', '::ffff:192.168.10.104', 50141, 3, '2019-01-05 13:24:14'),
	(29, NULL, 'NodeRed', '::ffff:192.168.10.104', 49403, 3, '2019-01-05 13:26:03'),
	(30, NULL, 'ESP8266Client-94dc', '::ffff:192.168.10.100', 49153, 3, '2019-01-05 13:26:05'),
	(31, NULL, 'NodeRed', '::ffff:192.168.10.104', 49404, 3, '2019-01-05 13:29:47'),
	(32, NULL, 'ESP8266Client-c421', '::ffff:192.168.10.100', 49154, 3, '2019-01-05 13:29:47'),
	(33, NULL, 'NodeRed', '::ffff:192.168.10.104', 49405, 3, '2019-01-05 13:29:59'),
	(34, NULL, 'ESP8266Client-2562', '::ffff:192.168.10.100', 49156, 3, '2019-01-05 13:30:06'),
	(35, NULL, 'NodeRed', '::ffff:192.168.10.104', 49406, 3, '2019-01-05 13:30:57'),
	(36, NULL, 'ESP8266Client-40d5', '::ffff:192.168.10.100', 49157, 3, '2019-01-05 13:30:57'),
	(37, NULL, 'NodeRed', '::ffff:192.168.10.104', 49407, 3, '2019-01-05 13:31:11'),
	(38, NULL, 'ESP8266Client-377f', '::ffff:192.168.10.100', 49158, 3, '2019-01-05 13:31:11'),
	(39, NULL, 'NodeRed', '::ffff:192.168.10.104', 49428, 3, '2019-01-05 13:34:34'),
	(40, NULL, 'ESP8266Client-b856', '::ffff:192.168.10.100', 49179, 3, '2019-01-05 13:34:34'),
	(41, NULL, 'ESP8266Client-4f35', '::ffff:192.168.10.100', 49164, 3, '2019-01-05 14:00:48'),
	(42, NULL, 'NodeRed', '::ffff:192.168.10.104', 49740, 3, '2019-01-05 14:01:03'),
	(43, NULL, 'ESP8266Client-63c2', '::ffff:192.168.10.100', 49167, 3, '2019-01-05 14:01:54'),
	(44, NULL, 'NodeRed', '::ffff:192.168.10.104', 49743, 3, '2019-01-05 14:01:54'),
	(45, NULL, 'ESP8266Client-4241', '::ffff:192.168.10.100', 49175, 3, '2019-01-05 14:03:07'),
	(46, NULL, 'NodeRed', '::ffff:192.168.10.104', 49751, 3, '2019-01-05 14:03:07'),
	(47, NULL, 'NodeRed', '::ffff:192.168.10.104', 50947, 3, '2019-01-05 14:04:09'),
	(48, NULL, 'ESP8266Client-5a2e', '::ffff:192.168.10.100', 49153, 3, '2019-01-05 14:05:45'),
	(49, NULL, 'NodeRed', '::ffff:192.168.10.104', 64159, 3, '2019-01-05 14:05:53'),
	(50, NULL, 'NodeRed', '::ffff:192.168.10.104', 64672, 3, '2019-01-05 14:06:00'),
	(51, NULL, 'NodeRed', '::ffff:192.168.10.104', 64265, 3, '2019-01-05 14:06:08'),
	(52, NULL, 'NodeRed', '::ffff:192.168.10.104', 62169, 3, '2019-01-05 14:06:15'),
	(53, NULL, 'NodeRed', '::ffff:192.168.10.104', 60280, 3, '2019-01-05 14:06:40'),
	(54, NULL, 'NodeRed', '::ffff:192.168.10.104', 60280, 3, '2019-01-05 14:06:46'),
	(55, NULL, 'ESP8266Client-e521', '::ffff:192.168.10.100', 49153, 3, '2019-01-05 14:06:59'),
	(56, NULL, 'ESP8266Client-dcce', '::ffff:192.168.10.100', 49153, 3, '2019-01-05 14:07:07'),
	(57, NULL, 'NodeRed', '::ffff:192.168.10.100', 56494, 3, '2019-01-05 14:12:19'),
	(58, NULL, 'NodeRed', '::ffff:192.168.10.100', 56508, 3, '2019-01-05 14:14:45'),
	(59, NULL, 'NodeRed', '::ffff:192.168.10.100', 56576, 3, '2019-01-05 14:25:52'),
	(60, NULL, 'NodeRed', '::ffff:192.168.10.100', 56577, 3, '2019-01-05 14:25:57'),
	(61, NULL, 'NodeRed', '::ffff:192.168.10.100', 56578, 3, '2019-01-05 14:26:02'),
	(62, NULL, 'NodeRed', '::ffff:192.168.10.100', 56579, 3, '2019-01-05 14:26:08'),
	(63, NULL, 'NodeRed', '::ffff:192.168.10.100', 56580, 3, '2019-01-05 14:26:13'),
	(64, NULL, 'NodeRed', '::ffff:192.168.10.100', 56581, 3, '2019-01-05 14:32:24'),
	(65, NULL, 'NodeRed', '::ffff:192.168.10.100', 56582, 3, '2019-01-05 14:32:29'),
	(66, NULL, 'NodeRed', '::ffff:192.168.10.100', 56583, 3, '2019-01-05 14:32:34'),
	(67, NULL, 'NodeRed', '::ffff:192.168.10.100', 56585, 3, '2019-01-05 14:33:18'),
	(68, NULL, 'NodeRed', '::ffff:192.168.10.104', 65291, 3, '2019-01-05 14:33:39'),
	(69, NULL, 'NodeRed', '::ffff:192.168.10.104', 65293, 3, '2019-01-05 14:34:19'),
	(70, NULL, 'ESP8266Client-1165', '::ffff:192.168.10.104', 53721, 3, '2019-01-05 14:35:36'),
	(71, NULL, 'ESP8266Client-cbb0', '::ffff:192.168.10.104', 53723, 3, '2019-01-05 14:38:46'),
	(72, NULL, 'ESP8266Client-ecb1', '::ffff:192.168.10.104', 53724, 3, '2019-01-05 14:39:04'),
	(73, NULL, 'ESP8266Client-42db', '::ffff:192.168.10.104', 53725, 3, '2019-01-05 14:40:20'),
	(74, NULL, 'ESP8266Client-3f37', '::ffff:192.168.10.104', 53726, 3, '2019-01-05 14:40:30'),
	(75, NULL, 'ESP8266Client-ffab', '::ffff:192.168.10.104', 53727, 3, '2019-01-05 14:40:42'),
	(76, NULL, 'ESP8266Client-de7', '::ffff:192.168.10.104', 53753, 3, '2019-01-05 14:45:57'),
	(77, NULL, 'ESP8266Client-c4a0', '::ffff:192.168.10.104', 53754, 3, '2019-01-05 14:46:02'),
	(78, NULL, 'ESP8266Client-7bc5', '::ffff:192.168.10.104', 53755, 3, '2019-01-05 14:46:07'),
	(79, NULL, 'ESP8266Client-10ed', '::ffff:192.168.10.104', 53756, 3, '2019-01-05 14:46:13'),
	(80, NULL, 'ESP8266Client-9c35', '::ffff:192.168.10.104', 53757, 3, '2019-01-05 14:46:18'),
	(81, NULL, 'ESP8266Client-7026', '::ffff:192.168.10.104', 53758, 3, '2019-01-05 14:46:23'),
	(82, NULL, 'ESP8266Client-c57f', '::ffff:192.168.10.104', 53759, 3, '2019-01-05 14:46:28'),
	(83, NULL, 'ESP8266Client-a8c8', '::ffff:192.168.10.104', 53760, 3, '2019-01-05 14:46:33'),
	(84, NULL, 'ESP8266Client-d4e', '::ffff:192.168.10.104', 53761, 3, '2019-01-05 14:46:38'),
	(85, NULL, 'ESP8266Client-7a4d', '::ffff:192.168.10.104', 53763, 3, '2019-01-05 14:47:43'),
	(86, NULL, 'ESP8266Client-6f6a', '::ffff:192.168.10.104', 50757, 3, '2019-01-05 14:48:42'),
	(87, NULL, 'ESP8266Client-e285', '::ffff:192.168.10.104', 50758, 3, '2019-01-05 14:48:47'),
	(88, NULL, 'ESP8266Client-ae43', '::ffff:192.168.10.104', 50759, 3, '2019-01-05 14:48:52'),
	(89, NULL, 'ESP8266Client-588e', '::ffff:192.168.10.104', 50760, 3, '2019-01-05 14:48:57'),
	(90, NULL, 'ESP8266Client-c820', '::ffff:192.168.10.104', 50761, 3, '2019-01-05 14:49:02'),
	(91, NULL, 'ESP8266Client-2a23', '::ffff:192.168.10.104', 50762, 3, '2019-01-05 14:49:07'),
	(92, NULL, 'ESP8266Client-785a', '::ffff:192.168.10.104', 50764, 3, '2019-01-05 14:49:22'),
	(93, NULL, 'ESP8266Client-1a7', '::ffff:192.168.10.104', 50765, 3, '2019-01-05 14:49:27'),
	(94, NULL, 'ESP8266Client-1e01', '::ffff:192.168.10.104', 50766, 3, '2019-01-05 14:49:33'),
	(95, NULL, 'ESP8266Client-3fde', '::ffff:192.168.10.104', 50767, 3, '2019-01-05 14:49:38'),
	(96, NULL, 'ESP8266Client-e62e', '::ffff:192.168.10.104', 50768, 3, '2019-01-05 14:49:43'),
	(97, NULL, 'ESP8266Client-703a', '::ffff:192.168.10.104', 50769, 3, '2019-01-05 14:49:48'),
	(98, NULL, 'ESP8266Client-8a28', '::ffff:192.168.10.104', 50770, 3, '2019-01-05 14:49:53'),
	(99, NULL, 'ESP8266Client-c0c9', '::ffff:192.168.10.104', 50771, 3, '2019-01-05 14:49:58'),
	(100, NULL, 'ESP8266Client-fea0', '::ffff:192.168.10.104', 50772, 3, '2019-01-05 14:50:03'),
	(101, NULL, 'ESP8266Client-284f', '::ffff:192.168.10.104', 50773, 3, '2019-01-05 14:50:08'),
	(102, NULL, 'ESP8266Client-26c3', '::ffff:192.168.10.104', 50774, 3, '2019-01-05 14:50:13'),
	(103, NULL, 'ESP8266Client-3417', '::ffff:192.168.10.104', 50775, 3, '2019-01-05 14:50:19'),
	(104, NULL, 'ESP8266Client-e0b', '::ffff:192.168.10.104', 50776, 3, '2019-01-05 14:50:24'),
	(105, NULL, 'ESP8266Client-9f0a', '::ffff:192.168.10.104', 50777, 3, '2019-01-05 14:50:29'),
	(106, NULL, 'ESP8266Client-abae', '::ffff:192.168.10.104', 50778, 3, '2019-01-05 14:50:34'),
	(107, NULL, 'ESP8266Client-61ba', '::ffff:192.168.10.104', 50779, 3, '2019-01-05 14:50:39'),
	(108, NULL, 'ESP8266Client-b009', '::ffff:192.168.10.104', 50780, 3, '2019-01-05 14:50:44'),
	(109, NULL, 'ESP8266Client-7ce6', '::ffff:192.168.10.104', 50781, 3, '2019-01-05 14:50:49'),
	(110, NULL, 'ESP8266Client-5986', '::ffff:192.168.10.104', 50782, 3, '2019-01-05 14:50:54'),
	(111, NULL, 'ESP8266Client-27e2', '::ffff:192.168.10.104', 50783, 3, '2019-01-05 14:50:59'),
	(112, NULL, 'ESP8266Client-4bb8', '::ffff:192.168.10.104', 50784, 3, '2019-01-05 14:51:05'),
	(113, NULL, 'ESP8266Client-22bd', '::ffff:192.168.10.104', 50785, 3, '2019-01-05 14:51:10'),
	(114, NULL, 'ESP8266Client-f3ef', '::ffff:192.168.10.104', 50786, 3, '2019-01-05 14:51:15'),
	(115, NULL, 'ESP8266Client-6705', '::ffff:192.168.10.104', 50787, 3, '2019-01-05 14:51:20'),
	(116, NULL, 'ESP8266Client-8350', '::ffff:192.168.10.104', 50788, 3, '2019-01-05 14:51:25'),
	(117, NULL, 'ESP8266Client-188a', '::ffff:192.168.10.104', 50789, 3, '2019-01-05 14:51:30'),
	(118, NULL, 'ESP8266Client-1bbd', '::ffff:192.168.10.104', 50790, 3, '2019-01-05 14:51:35'),
	(119, NULL, 'ESP8266Client-230b', '::ffff:192.168.10.104', 50791, 3, '2019-01-05 14:51:40'),
	(120, NULL, 'ESP8266Client-6582', '::ffff:192.168.10.104', 50792, 3, '2019-01-05 14:51:46'),
	(121, NULL, 'ESP8266Client-66a6', '::ffff:192.168.10.104', 50798, 3, '2019-01-05 14:52:49'),
	(122, NULL, 'ESP8266Client-50c5', '::ffff:192.168.10.104', 50799, 3, '2019-01-05 14:52:54'),
	(123, NULL, 'ESP8266Client-d2fb', '::ffff:192.168.10.104', 50800, 3, '2019-01-05 14:52:59'),
	(124, NULL, 'ESP8266Client-5d0a', '::ffff:192.168.10.104', 50801, 3, '2019-01-05 14:53:17'),
	(125, NULL, 'ESP8266Client-a5f0', '::ffff:192.168.10.104', 50802, 3, '2019-01-05 14:53:22'),
	(126, NULL, 'ESP8266Client-bfd6', '::ffff:192.168.10.104', 50803, 3, '2019-01-05 14:53:27'),
	(127, NULL, 'ESP8266Client-fc23', '::ffff:192.168.10.104', 50804, 3, '2019-01-05 14:53:32'),
	(128, NULL, 'ESP8266Client-8cb3', '::ffff:192.168.10.104', 50805, 3, '2019-01-05 14:53:37'),
	(129, NULL, 'ESP8266Client-7985', '::ffff:192.168.10.104', 50806, 3, '2019-01-05 14:53:42'),
	(130, NULL, 'ESP8266Client-fe57', '::ffff:192.168.10.104', 50807, 3, '2019-01-05 14:53:47'),
	(131, NULL, 'ESP8266Client-3c4a', '::ffff:192.168.10.104', 50808, 3, '2019-01-05 14:53:53'),
	(132, NULL, 'ESP8266Client-cce', '::ffff:192.168.10.104', 50809, 3, '2019-01-05 14:53:58'),
	(133, NULL, 'ESP8266Client-a2a8', '::ffff:192.168.10.104', 50810, 3, '2019-01-05 14:54:03'),
	(134, NULL, 'ESP8266Client-797a', '::ffff:192.168.10.104', 50811, 3, '2019-01-05 14:54:08'),
	(135, NULL, 'ESP8266Client-6d17', '::ffff:192.168.10.104', 50812, 3, '2019-01-05 14:54:13'),
	(136, NULL, 'ESP8266Client-9885', '::ffff:192.168.10.104', 50813, 3, '2019-01-05 14:54:18'),
	(137, NULL, 'ESP8266Client-c361', '::ffff:192.168.10.104', 50814, 3, '2019-01-05 14:54:23'),
	(138, NULL, 'ESP8266Client-2b06', '::ffff:192.168.10.104', 50815, 3, '2019-01-05 14:54:28'),
	(139, NULL, 'ESP8266Client-851b', '::ffff:192.168.10.104', 50816, 3, '2019-01-05 14:54:33'),
	(140, NULL, 'ESP8266Client-e1f', '::ffff:192.168.10.104', 50817, 3, '2019-01-05 14:54:38'),
	(141, NULL, 'ESP8266Client-9059', '::ffff:192.168.10.104', 50818, 3, '2019-01-05 14:54:44'),
	(142, NULL, 'ESP8266Client-1157', '::ffff:192.168.10.104', 50819, 3, '2019-01-05 14:54:49'),
	(143, NULL, 'ESP8266Client-f936', '::ffff:192.168.10.104', 50820, 3, '2019-01-05 14:54:54'),
	(144, NULL, 'ESP8266Client-870d', '::ffff:192.168.10.104', 50821, 3, '2019-01-05 14:54:59'),
	(145, NULL, 'ESP8266Client-4718', '::ffff:192.168.10.104', 50822, 3, '2019-01-05 14:55:04'),
	(146, NULL, 'ESP8266Client-578e', '::ffff:192.168.10.104', 50823, 3, '2019-01-05 14:55:09'),
	(147, NULL, 'ESP8266Client-e1df', '::ffff:192.168.10.104', 50824, 3, '2019-01-05 14:55:14'),
	(148, NULL, 'ESP8266Client-c5f2', '::ffff:192.168.10.104', 50825, 3, '2019-01-05 14:55:19'),
	(149, NULL, 'ESP8266Client-957', '::ffff:192.168.10.104', 50826, 3, '2019-01-05 14:55:24'),
	(150, NULL, 'ESP8266Client-a147', '::ffff:192.168.10.104', 50834, 3, '2019-01-05 14:56:48'),
	(151, NULL, 'ESP8266Client-2a72', '::ffff:192.168.10.104', 50835, 3, '2019-01-05 14:56:53'),
	(152, NULL, 'ESP8266Client-dbf', '::ffff:192.168.10.104', 50859, 3, '2019-01-05 15:01:01'),
	(153, NULL, 'ESP8266Client-f690', '::ffff:192.168.10.104', 50860, 3, '2019-01-05 15:01:06'),
	(154, NULL, 'ESP8266Client-8c0b', '::ffff:192.168.10.104', 50861, 3, '2019-01-05 15:01:11'),
	(155, NULL, 'ESP8266Client-7137', '::ffff:192.168.10.104', 50862, 3, '2019-01-05 15:01:17'),
	(156, NULL, 'ESP8266Client-f1b', '::ffff:192.168.10.104', 50863, 3, '2019-01-05 15:01:22'),
	(157, NULL, 'ESP8266Client-a1f', '::ffff:192.168.10.104', 50864, 3, '2019-01-05 15:01:27'),
	(158, NULL, 'ESP8266Client-e1fb', '::ffff:192.168.10.104', 50865, 3, '2019-01-05 15:01:32'),
	(159, NULL, 'ESP8266Client-c9b7', '::ffff:192.168.10.104', 50866, 3, '2019-01-05 15:01:37'),
	(160, NULL, 'ESP8266Client-2a10', '::ffff:192.168.10.104', 50867, 3, '2019-01-05 15:01:42'),
	(161, NULL, 'ESP8266Client-5c8f', '::ffff:192.168.10.104', 50868, 3, '2019-01-05 15:01:47'),
	(162, NULL, 'ESP8266Client-6016', '::ffff:192.168.10.104', 50869, 3, '2019-01-05 15:01:52'),
	(163, NULL, 'ESP8266Client-ef64', '::ffff:192.168.10.104', 50870, 3, '2019-01-05 15:01:58'),
	(164, NULL, 'ESP8266Client-2be1', '::ffff:192.168.10.104', 50872, 3, '2019-01-05 15:02:13'),
	(165, NULL, 'ESP8266Client-f3d6', '::ffff:192.168.10.104', 50873, 3, '2019-01-05 15:02:18'),
	(166, NULL, 'ESP8266Client-5d93', '::ffff:192.168.10.104', 50877, 3, '2019-01-05 15:03:26'),
	(167, NULL, 'ESP8266Client-c6c8', '::ffff:192.168.10.104', 50878, 3, '2019-01-05 15:03:31'),
	(168, NULL, 'ESP8266Client-7c0c', '::ffff:192.168.10.104', 50879, 3, '2019-01-05 15:03:36'),
	(169, NULL, 'ESP8266Client-11c4', '::ffff:192.168.10.104', 50880, 3, '2019-01-05 15:03:44'),
	(170, NULL, 'ESP8266Client-8554', '::ffff:192.168.10.104', 50881, 3, '2019-01-05 15:03:49'),
	(171, NULL, 'ESP8266Client-54ef', '::ffff:192.168.10.104', 50882, 3, '2019-01-05 15:03:54'),
	(172, NULL, 'ESP8266Client-c0b1', '::ffff:192.168.10.104', 50883, 3, '2019-01-05 15:03:59'),
	(173, NULL, 'ESP8266Client-e651', '::ffff:192.168.10.104', 50884, 3, '2019-01-05 15:04:05'),
	(174, NULL, 'ESP8266Client-b597', '::ffff:192.168.10.104', 50885, 3, '2019-01-05 15:04:10'),
	(175, NULL, 'ESP8266Client-bccc', '::ffff:192.168.10.104', 50886, 3, '2019-01-05 15:04:15'),
	(176, NULL, 'ESP8266Client-671a', '::ffff:192.168.10.104', 50887, 3, '2019-01-05 15:04:20'),
	(177, NULL, 'ESP8266Client-299f', '::ffff:192.168.10.104', 50888, 3, '2019-01-05 15:04:25'),
	(178, NULL, 'ESP8266Client-116', '::ffff:192.168.10.104', 50889, 3, '2019-01-05 15:04:30'),
	(179, NULL, 'ESP8266Client-4e4a', '::ffff:192.168.10.104', 50890, 3, '2019-01-05 15:04:35'),
	(180, NULL, 'ESP8266Client-5466', '::ffff:192.168.10.104', 50891, 3, '2019-01-05 15:04:40'),
	(181, NULL, 'ESP8266Client-6ade', '::ffff:192.168.10.104', 50892, 3, '2019-01-05 15:04:45'),
	(182, NULL, 'ESP8266Client-bebe', '::ffff:192.168.10.104', 50893, 3, '2019-01-05 15:04:51'),
	(183, NULL, 'ESP8266Client-25a2', '::ffff:192.168.10.104', 50894, 3, '2019-01-05 15:04:56'),
	(184, NULL, 'ESP8266Client-4dbf', '::ffff:192.168.10.104', 50895, 3, '2019-01-05 15:05:01'),
	(185, NULL, 'ESP8266Client-f2e9', '::ffff:192.168.10.104', 50896, 3, '2019-01-05 15:05:06'),
	(186, NULL, 'ESP8266Client-3797', '::ffff:192.168.10.104', 50897, 3, '2019-01-05 15:05:11'),
	(187, NULL, 'ESP8266Client-f6d0', '::ffff:192.168.10.104', 50898, 3, '2019-01-05 15:05:16'),
	(188, NULL, 'ESP8266Client-c3d3', '::ffff:192.168.10.104', 50899, 3, '2019-01-05 15:05:21'),
	(189, NULL, 'ESP8266Client-a676', '::ffff:192.168.10.104', 50900, 3, '2019-01-05 15:05:26'),
	(190, NULL, 'ESP8266Client-8be8', '::ffff:192.168.10.104', 50901, 3, '2019-01-05 15:05:32'),
	(191, NULL, 'ESP8266Client-50cc', '::ffff:192.168.10.104', 50902, 3, '2019-01-05 15:05:37'),
	(192, NULL, 'ESP8266Client-44bf', '::ffff:192.168.10.104', 50903, 3, '2019-01-05 15:05:43'),
	(193, NULL, 'ESP8266Client-1240', '::ffff:192.168.10.104', 51615, 3, '2019-01-05 17:06:18'),
	(194, NULL, 'ESP8266Client-714b', '::ffff:192.168.10.104', 51616, 3, '2019-01-05 17:06:23'),
	(195, NULL, 'ESP8266Client-d7d5', '::ffff:192.168.10.104', 51617, 3, '2019-01-05 17:06:28'),
	(196, NULL, 'ESP8266Client-cec5', '::ffff:192.168.10.104', 51618, 3, '2019-01-05 17:06:33'),
	(197, NULL, 'ESP8266Client-a304', '::ffff:192.168.10.104', 51619, 3, '2019-01-05 17:06:38'),
	(198, NULL, 'ESP8266Client-37d1', '::ffff:192.168.10.104', 51620, 3, '2019-01-05 17:06:43'),
	(199, NULL, 'ESP8266Client-2796', '::ffff:192.168.10.104', 51621, 3, '2019-01-05 17:06:49'),
	(200, NULL, 'ESP8266Client-3948', '::ffff:192.168.10.104', 51622, 3, '2019-01-05 17:06:54'),
	(201, NULL, 'ESP8266Client-e5db', '::ffff:192.168.10.104', 51623, 3, '2019-01-05 17:06:59'),
	(202, NULL, 'ESP8266Client-a35f', '::ffff:192.168.10.104', 51624, 3, '2019-01-05 17:07:04'),
	(203, NULL, 'ESP8266Client-2cf5', '::ffff:192.168.10.104', 51625, 3, '2019-01-05 17:07:09'),
	(204, NULL, 'ESP8266Client-31de', '::ffff:192.168.10.104', 51626, 3, '2019-01-05 17:07:14'),
	(205, NULL, 'ESP8266Client-ffe', '::ffff:192.168.10.104', 51627, 3, '2019-01-05 17:07:19'),
	(206, NULL, 'ESP8266Client-4125', '::ffff:192.168.10.104', 51628, 3, '2019-01-05 17:07:24'),
	(207, NULL, 'ESP8266Client-2012', '::ffff:192.168.10.104', 51629, 3, '2019-01-05 17:07:29'),
	(208, NULL, 'ESP8266Client-10f9', '::ffff:192.168.10.104', 51630, 3, '2019-01-05 17:07:34'),
	(209, NULL, 'ESP8266Client-4f13', '::ffff:192.168.10.104', 51631, 3, '2019-01-05 17:07:40'),
	(210, NULL, 'ESP8266Client-51fe', '::ffff:192.168.10.104', 58543, 3, '2019-01-05 17:27:05'),
	(211, NULL, 'ESP8266Client-55bb', '::ffff:192.168.10.104', 58545, 3, '2019-01-05 17:31:22'),
	(212, NULL, 'ESP8266Client-de86', '::ffff:192.168.10.104', 58546, 3, '2019-01-05 17:41:54'),
	(213, NULL, 'ESP8266Client-1315', '::ffff:192.168.10.104', 58547, 3, '2019-01-05 17:42:06'),
	(214, NULL, 'ESP8266Client-ac7f', '::ffff:192.168.10.104', 58548, 3, '2019-01-05 17:42:12'),
	(215, NULL, 'ESP8266Client-6c3a', '::ffff:192.168.10.104', 58549, 3, '2019-01-05 17:42:31'),
	(216, NULL, 'ESP8266Client-820f', '::ffff:192.168.10.104', 58551, 3, '2019-01-05 17:51:01'),
	(217, NULL, 'ESP8266Client-125d', '::ffff:192.168.10.104', 58552, 3, '2019-01-05 17:51:47'),
	(218, NULL, 'ESP8266Client-56a8', '::ffff:192.168.10.104', 58553, 3, '2019-01-05 17:51:54'),
	(219, NULL, 'ESP8266Client-5233', '::ffff:192.168.10.104', 58555, 3, '2019-01-05 17:54:26'),
	(220, NULL, 'ESP8266Client-42f9', '::ffff:192.168.10.104', 58556, 3, '2019-01-05 17:54:39'),
	(221, NULL, 'ESP8266Client-67d1', '::ffff:192.168.10.104', 58557, 3, '2019-01-05 17:54:59'),
	(222, NULL, 'ESP8266Client-b928', '::ffff:192.168.10.104', 58558, 3, '2019-01-05 17:55:06'),
	(223, NULL, 'ESP8266Client-beae', '::ffff:192.168.10.104', 58559, 3, '2019-01-05 17:55:47'),
	(224, NULL, 'ESP8266Client-db96', '::ffff:192.168.10.104', 58560, 3, '2019-01-05 17:59:00'),
	(225, NULL, 'ESP8266Client-668', '::ffff:192.168.10.104', 58567, 3, '2019-01-05 18:00:07'),
	(226, NULL, 'ESP8266Client-a25c', '::ffff:192.168.10.104', 58568, 3, '2019-01-05 18:00:27'),
	(227, NULL, 'ESP8266Client-6cbb', '::ffff:192.168.10.104', 58569, 3, '2019-01-05 18:00:35'),
	(228, NULL, 'ESP8266Client-b947', '::ffff:192.168.10.104', 63204, 3, '2019-01-05 19:22:33'),
	(229, NULL, 'ESP8266Client-fff7', '::ffff:192.168.10.104', 63205, 3, '2019-01-05 19:23:11'),
	(230, NULL, 'ESP8266Client-86dc', '::ffff:192.168.10.104', 63207, 3, '2019-01-05 20:07:06'),
	(231, NULL, 'NodeRed', '::ffff:192.168.10.100', 62169, 3, '2019-01-05 20:51:12'),
	(232, NULL, 'NodeRed', '::ffff:192.168.10.100', 62171, 3, '2019-01-05 20:54:24'),
	(233, NULL, 'NodeRed', '::ffff:192.168.10.100', 62172, 3, '2019-01-05 20:54:39'),
	(234, NULL, 'NodeRed', '::ffff:192.168.10.100', 62174, 3, '2019-01-05 20:55:17'),
	(235, NULL, 'NodeRed', '::ffff:192.168.10.100', 62175, 3, '2019-01-05 20:56:35'),
	(236, NULL, 'NodeRed', '::ffff:192.168.10.100', 62176, 3, '2019-01-05 20:56:40'),
	(237, NULL, 'NodeRed', '::ffff:192.168.10.100', 62181, 3, '2019-01-05 20:58:52'),
	(238, NULL, 'NodeRed', '::ffff:192.168.10.100', 62182, 3, '2019-01-05 20:59:13'),
	(239, NULL, 'NodeRed', '::ffff:192.168.10.100', 62183, 3, '2019-01-05 20:59:59'),
	(240, NULL, 'NodeRed', '::ffff:192.168.10.105', 53993, 3, '2019-01-06 13:24:48'),
	(241, NULL, 'NodeRed', '::ffff:192.168.10.105', 62231, 3, '2019-01-06 13:24:53'),
	(242, NULL, 'NodeRed', '::ffff:192.168.10.105', 62234, 3, '2019-01-06 13:25:26'),
	(243, NULL, 'NodeRed', '::ffff:192.168.10.105', 62235, 3, '2019-01-06 13:41:51'),
	(244, NULL, 'NodeRed', '::ffff:192.168.10.105', 62236, 3, '2019-01-06 13:42:30'),
	(245, NULL, 'NodeRed', '::ffff:192.168.10.105', 62247, 3, '2019-01-06 14:19:17'),
	(246, NULL, 'NodeRed', '::ffff:192.168.10.105', 62251, 3, '2019-01-06 14:27:35'),
	(247, NULL, 'NodeRed', '::ffff:192.168.10.105', 62252, 3, '2019-01-06 14:28:09'),
	(248, NULL, 'NodeRed', '::ffff:192.168.10.105', 62256, 3, '2019-01-06 14:28:48'),
	(249, NULL, 'NodeRed', '::ffff:192.168.10.105', 62257, 3, '2019-01-06 14:29:17'),
	(250, NULL, 'NodeRed', '::ffff:192.168.10.105', 62258, 3, '2019-01-06 14:29:32'),
	(251, NULL, 'NodeRed', '::ffff:192.168.10.105', 62264, 3, '2019-01-06 14:35:40'),
	(252, NULL, 'NodeRed', '::ffff:192.168.10.105', 62267, 3, '2019-01-06 14:42:59'),
	(253, NULL, 'NodeRed', '::ffff:192.168.10.105', 56415, 3, '2019-01-06 15:13:28'),
	(254, NULL, 'NodeRed', '::ffff:192.168.10.105', 56416, 3, '2019-01-06 15:15:12'),
	(255, NULL, 'NodeRed', '::ffff:192.168.10.105', 56417, 3, '2019-01-06 15:23:09'),
	(256, NULL, 'NodeRed', '::ffff:192.168.10.105', 56418, 3, '2019-01-06 15:23:15'),
	(257, NULL, 'NodeRed', '::ffff:192.168.10.105', 56419, 3, '2019-01-06 15:24:59'),
	(258, NULL, 'NodeRed', '::ffff:192.168.10.105', 56421, 3, '2019-01-06 15:25:24'),
	(259, NULL, 'NodeRed', '::ffff:192.168.10.105', 56422, 3, '2019-01-06 15:25:32'),
	(260, NULL, 'NodeRed', '::ffff:192.168.10.105', 56423, 3, '2019-01-06 15:26:33'),
	(261, NULL, 'NodeRed', '::ffff:192.168.10.105', 56424, 3, '2019-01-06 15:27:06'),
	(262, NULL, 'NodeRed', '::ffff:192.168.10.105', 56425, 3, '2019-01-06 15:27:38'),
	(263, NULL, 'NodeRed', '::ffff:192.168.10.105', 56426, 3, '2019-01-06 15:29:06'),
	(264, NULL, 'NodeRed', '::ffff:192.168.10.105', 56427, 3, '2019-01-06 15:29:27'),
	(265, NULL, 'NodeRed', '::ffff:192.168.10.105', 56428, 3, '2019-01-06 15:40:05'),
	(266, NULL, 'NodeRed', '::ffff:192.168.10.105', 56429, 3, '2019-01-06 15:40:28'),
	(267, NULL, 'NodeRed', '::ffff:192.168.10.105', 56430, 3, '2019-01-06 15:40:46');
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
	(1, 'Não permitir conexões de itens que não estão cadastrados'),
	(2, 'Permitir somente conexões seguras');
/*!40000 ALTER TABLE `server_options` ENABLE KEYS */;

-- Copiando estrutura para tabela mqtt.tp_publish
CREATE TABLE IF NOT EXISTS `tp_publish` (
  `device_id` int(11) DEFAULT NULL,
  `tp_publish` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela mqtt.tp_publish: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `tp_publish` DISABLE KEYS */;
/*!40000 ALTER TABLE `tp_publish` ENABLE KEYS */;

-- Copiando estrutura para tabela mqtt.tp_subscribe
CREATE TABLE IF NOT EXISTS `tp_subscribe` (
  `device_id` int(11) DEFAULT NULL,
  `tp_subscribe` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela mqtt.tp_subscribe: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `tp_subscribe` DISABLE KEYS */;
/*!40000 ALTER TABLE `tp_subscribe` ENABLE KEYS */;

-- Copiando estrutura para tabela mqtt.users
CREATE TABLE IF NOT EXISTS `users` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `senha` varchar(200) NOT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela mqtt.users: ~1 rows (aproximadamente)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
REPLACE INTO `users` (`id_user`, `nome`, `email`, `senha`) VALUES
	(3, 'Leonardo Everson', 'leonardo@batista.g12.br', '$2b$10$6Vm9DldTJTs5FNSNgHl9h.pZBNs5uQcaWyGWUV9Nv9UcRfZwHhr2.'),
	(7, 'Leonardo Everson', 'llinharespinheiro@gmail.com', '$2b$10$.YsW//S0gpyf2.NeC/v4VOZJHTCL83UXD4RkQF6slsjuROF.YATbu');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

-- Copiando estrutura para tabela mqtt.user_devices
CREATE TABLE IF NOT EXISTS `user_devices` (
  `id_user` int(11) NOT NULL,
  `device_id` int(11) NOT NULL AUTO_INCREMENT,
  `device_name` varchar(200) NOT NULL DEFAULT '0',
  `publish` int(1) DEFAULT NULL,
  `subscribe` int(1) DEFAULT NULL,
  PRIMARY KEY (`device_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela mqtt.user_devices: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `user_devices` DISABLE KEYS */;
REPLACE INTO `user_devices` (`id_user`, `device_id`, `device_name`, `publish`, `subscribe`) VALUES
	(3, 13, 'NodeRed', 2, 2),
	(3, 14, 'NodeRed2', 2, 2),
	(3, 15, 'NodeRed1', 1, 2);
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
