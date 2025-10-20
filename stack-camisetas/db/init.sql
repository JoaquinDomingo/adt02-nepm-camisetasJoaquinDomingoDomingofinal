CREATE DATABASE `camisetas`;

USE `camisetas`;

CREATE TABLE `Camiseta` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `Talla` enum('xxs','xs','s','m','l','xl','xxl') NOT NULL,
  `Sexo` enum('chico','chica','unisex','niño','niña','unisex_infantil') NOT NULL,
  `Color` varchar(100) NOT NULL,
  `Marca` varchar(100) NOT NULL,
  `Stock` int NOT NULL,
  `Precio` double NOT NULL
) ENGINE='InnoDB';


CREATE TABLE `Usuario` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `Nombre_Usuario` varchar(100) NOT NULL,
  `Contraseña` varchar(100) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Telefono` varchar(100) NOT NULL,
  `Direccion` varchar(300) NOT NULL,
  `Tipo` enum('OPERARIO','CLIENTE') NOT NULL
) ENGINE=InnoDB;


CREATE TABLE `Pedido` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `Fecha_Pedido` datetime NOT NULL,
  `Estado` enum('carrito','pagado','procesando','procesado','enviado','recibido') NOT NULL,
  `Cliente` int NOT NULL,
  `Total` decimal NOT NULL,
  FOREIGN KEY (`Cliente`) REFERENCES `Usuario` (`id`)
) ENGINE='InnoDB';

CREATE TABLE `Linea_Pedido` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `Pedido` int NOT NULL,
  `Producto` int NOT NULL,
  `Precio_Venta` decimal NOT NULL,
  FOREIGN KEY (`Pedido`) REFERENCES `Pedido` (`id`),
  FOREIGN KEY (`Producto`) REFERENCES `Camiseta` (`id`)
) ENGINE='InnoDB';



INSERT INTO `Usuario` (`Nombre_Usuario`, `Contraseña`, `Email`, `Telefono`, `Direccion`, `Tipo`)
VALUES ('joaquin', '$2a$10$2HfFzDDJ1iY9Fv01v1lck.4tKVUd6eY/SGslObHnwe0ZD0KHJo1/S', 'dojoaquindo@gmail.com', '012345678', 'Mi casa, 34675, La Conchinchina', 'OPERArIO');

-- joaquin Secreto_123