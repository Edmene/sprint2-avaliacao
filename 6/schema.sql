CREATE DATABASE EVALUATION;

USE EVALUATION;

CREATE TABLE STORE_REGISTRATION(
	ID INT NOT NULL AUTO_INCREMENT,
	NAME VARCHAR(100) NOT NULL,
	OWNER VARCHAR(100) NOT NULL,
	REGISTRATION_DATE DATE NOT NULL,
	BUSINESS_TYPE VARCHAR(100) NOT NULL,
	PRIMARY KEY (ID)
);
