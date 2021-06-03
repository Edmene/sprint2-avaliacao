CREATE DATABASE EVALUATION;

USE EVALUATION;

CREATE TABLE MONEY_TRANSACTION(
	ID INT NOT NULL AUTO_INCREMENT,
	SENDER VARCHAR(100) NOT NULL,
	SENDER_BANK_ACCOUNT VARCHAR(100) NOT NULL,
	RECEIVER VARCHAR(100) NOT NULL,
	RECEIVER_BANK_ACCOUNT VARCHAR(100) NOT NULL,
	AMOUNT DOUBLE(100, 2) NOT NULL,
	PRIMARY KEY (ID)
);