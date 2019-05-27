--
USE fur_db;

INSERT INTO users(first_name, last_name, role, email, password, created, modified) VALUES ("Betsy", "Smith", "Pet Owner", "betsy.smith@gmail.com", "password234", "2019-05-01 12:00:00", "2019-05-01 12:00:00");
INSERT INTO users(first_name, last_name, role, email, password, created, modified) VALUES ("John", "Hammerford", "Salon Owner", "anemail@yahoo.com", "passwor234234", "2019-05-01 12:00:00", "2019-05-01 12:00:00");
INSERT INTO users(first_name, last_name, role, email, password, created, modified) VALUES ("Lauren", "Oswald", "Dog Walker", "unicornFlower@gmail.com", "passworsdfs", "2019-05-01 12:00:00", "2019-05-01 12:00:00");
INSERT INTO users(first_name, last_name, role, email, password, created, modified) VALUES ("Billy", "McMann", "Pet Owner", "billMc@aol.com", "passwordo7yuk", "2019-05-01 12:00:00", "2019-05-01 12:00:00");

SELECT * FROM users;
