var mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'xlf3ljx3beaucz9x.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  
    // Your port, if not 3306
    port: 3306,
  
    // Your MySQL username
    user: 'eqbd535643ez09w6',
  
    // Your MySQL password
    password: 'i007qjq8gj34zy1o',
  
    // Name of database
    database: 'bx5axmgvd849v2z1'
  });

// const JAWSDB_URL = 'mysql://eqbd535643ez09w6:i007qjq8gj34zy1o@xlf3ljx3beaucz9x.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/bx5axmgvd849v2z1'

// var connection = mysql.createConnection(process.env.JAWSDB_URL);




module.exports = connection;

