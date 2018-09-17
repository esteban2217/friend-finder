DROP DATABASE IF EXISTS friends;

CREATE DATABASE friends;

USE friends;

CREATE TABLE people(
 id INT NOT NULL AUTO_INCREMENT,
 name VARCHAR(255) NOT NULL,
 image_url VARCAHR(255) NOT NULL,
 PRIMARY KEY (id)
);

CREATE TABLE answers(
 id INT NOT NULL AUTO_INCREMENT,
 question1 INT NOT NULL,
 question2 INT NOT NULL,
 question3 INT NOT NULL,
 question4 INT NOT NULL,
 question5 INT NOT NULL,
 question6 INT NOT NULL,
 question7 INT NOT NULL,
 question8 INT NOT NULL,
 question9 INT NOT NULL,
 question10 INT NOT NULL,
 PRIMARY KEY (id)
);


