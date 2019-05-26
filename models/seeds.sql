--
USE fur_db;

INSERT INTO users(first_name, last_name, role, email, password, about_me, location, created, modified) VALUES ("Betsy", "Smith", "Pet Owner", "betsy.smith@gmail.com", "password234", "I love pets!", "Provo, Utah", "2019-05-01 12:00:00", "2019-05-01 12:00:00");
INSERT INTO users(first_name, last_name, role, email, password, about_me, location, created, modified) VALUES ("John", "Hammerford", "Salon Owner", "anemail@yahoo.com", "passwor234234", "I love dogs!", "Orem, Utah", "2019-05-01 12:00:00", "2019-05-01 12:00:00");
INSERT INTO users(first_name, last_name, role, email, password, about_me, location, created, modified) VALUES ("Lauren", "Oswald", "Dog Walker", "unicornFlower@gmail.com", "passworsdfs", "I love cats!", "Salt Lake City, Utah", "2019-05-01 12:00:00", "2019-05-01 12:00:00");
INSERT INTO users(first_name, last_name, role, email, password, about_me, location, created, modified) VALUES ("Billy", "McMann", "Pet Owner", "billMc@aol.com", "passwordo7yuk", "I love animals!", "Taylorsville, Utah", "2019-05-01 12:00:00", "2019-05-01 12:00:00");


INSERT INTO pets(pet_name, owner_id, pet_type, about_me, location, created, modified) VALUES ("Steve", "2", "Snake", "I'm a snake who likes eggs!", "Orem, Utah", "2019-05-02 12:00:00", "2019-05-02 12:00:00");
INSERT INTO pets(pet_name, owner_id, pet_type, about_me, location, created, modified) VALUES ("Spot", "1", "Dog", "I'm a dog who likes to fetch!", "Provo, Utah", "2019-05-02 12:00:00", "2019-05-02 12:00:00");
INSERT INTO pets(pet_name, owner_id, pet_type, about_me, location, created, modified) VALUES ("Marty", "3", "Cat", "I'm a cat who likes to sleep!", "Salt Lake City, Utah", "2019-05-02 12:00:00", "2019-05-02 12:00:00");
INSERT INTO pets(pet_name, owner_id, pet_type, about_me, location, created, modified) VALUES ("Betsy", "4", "Cow", "I'm a cow who likes grass!", "Taylorsville, Utah", "2019-05-02 12:00:00", "2019-05-02 12:00:00");
