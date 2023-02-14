/* Importing the mysql module. */
const mysql = require('mysql');

/* Creating a connection to the database. */
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'chat-clone-db'
});

/* This is a callback function that is called when the connection is established. */
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }

  console.log('Connected to MySQL as id ' + connection.threadId);
});