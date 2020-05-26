/* eslint-disable no-console */
const mysql = require('mysql');

// const PORT = process.env.PORT
// const HOST = process.env.HOST;


// mysql credentials
// const connection = mysql.createConnection({
// host: process.env.MYSQL_HOST,
// user: process.env.MYSQL_USER,
// password: process.env.MYSQL_PASSWORD,
// database: process.env.MYSQL_DATABASE,
// });

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'Shmetsy',
});

connection.connect((err) => {
  if (err) {
    // console.log(process.env.MYSQL_DATABASE);
    console.error('error connecting mysql: ', err);
  } else {
    console.log('mysql connection successful');
  }
});

module.exports = connection;
