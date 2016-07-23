const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'capleb'
});

// console.log("conn", connection)

connection.connect(function(err){
  if(err){
    console.log('Error connecting to Db', err);
    return;
  }
  console.log('Connection established');
});