DROP DATABASE IF EXISTS fur_db;
CREATE DATABASE fur_db;
USE fur_db;


CREATE TABLE `users` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `first_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
 `last_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
 `service_provider` boolean,
 `pet_owner` boolean ,
 `role` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
 `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
 `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
 `image` varbinary(200),
 `about_me` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
 `location` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
 `created` datetime NOT NULL,
 `modified` datetime NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

USE fur_db;
DROP TABLE IF EXISTS examples;
