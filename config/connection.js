var mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
  
    // Your port, if not 3306
    port: 3306,
  
    // Your MySQL username
    user: 'root',
  
    // Your MySQL password
    password: 'somethingsimple',
  
    // Name of database
    database: 'webdev_student_db'
  });

module.exports = connection;
