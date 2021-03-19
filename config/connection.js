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

var JAWSDB_URL = 'mysql://hkq3pgqpeorrajet:nbi3nl64q4xbhqvg@klbcedmmqp7w17ik.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/qhdjq7e0x35jy371'

var connection = mysql.createConnection(process.env.JAWSDB_URL);




module.exports = connection;

