const mysql = require('mysql');

require('dotenv').config({silent: true});

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

connection.connect(function(err){
  if(err){
    console.log('Error connecting to Db', err);
    return;
  }
  console.log('Connection established');
});

connection.query('CREATE TABLE IF NOT EXISTS Users (id INT(11) AUTO_INCREMENT PRIMARY KEY, username VARCHAR(30), password VARCHAR(20));', (err) => {
  if(err) throw err;
  console.log('Users Table Created');
});

connection.query('CREATE TABLE IF NOT EXISTS Activities (id INT(11) AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100), address VARCHAR(100), phone_number VARCHAR(20), rating VARCHAR(5), image VARCHAR(100));', (err) => {
  if(err) throw err;
  console.log('Activities Table Created');
});

connection.query('CREATE TABLE IF NOT EXISTS Users_Activities (id INT(11) AUTO_INCREMENT PRIMARY KEY, user_id INT(11), activities_id INT(11), FOREIGN KEY (user_id) REFERENCES Users(id), FOREIGN KEY (activities_id) REFERENCES Activities(id));', (err) => {
  if(err) throw err;
  console.log('Relational Table Created');
});

module.exports = connection;
