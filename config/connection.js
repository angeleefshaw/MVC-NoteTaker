var mysql = require('mysql');

// const connection = mysql.createConnection({
//     host: 'localhost',
  
//     // Your port, if not 3306
//     port: 3306,
  
//     // Your MySQL username
//     user: 'root',
  
//     // Your MySQL password
//     password: 'somethingsimple',
  
//     // Name of database
//     database: 'webdev_student_db'
//   });

const JAWSDB_URL = 'mysql://eqbd535643ez09w6:i007qjq8gj34zy1o@xlf3ljx3beaucz9x.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/bx5axmgvd849v2z1'

var connection = mysql.createConnection(process.env.JAWSDB_URL);




module.exports = connection;

