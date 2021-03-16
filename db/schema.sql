DROP DATABASE IF EXISTS webdev_student_db ;

CREATE DATABASE webdev_student_db ;

USE webdev_student_db ;

CREATE TABLE topics (
    id INT NOT NULL AUTO_INCREMENT, 
    topic_name VARCHAR(50) NOT NULL,
    topic_summary VARCHAR(100) NOT NULL,
    learned BOOLEAN
);