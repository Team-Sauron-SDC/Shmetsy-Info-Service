const mysql = require('mysql');

// const PORT = process.env.PORT
// const HOST = process.env.HOST;


// mysql credentials
// const connection = mysql.createConnection({
// 	host: process.env.MYSQL_HOST,
// 	user: process.env.MYSQL_USER,
// 	password: process.env.MYSQL_PASSWORD,
// 	database: process.env.MYSQL_DATABASE,
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

/*** FUNCTIONS ***/
const getProduct = (id, callback) => {
  const queryString = `SELECT * from Products where id = ${id}`;

  connection.query(queryString, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

const getColors = (id, callback) => {
  const queryString = `SELECT * from Colors where product_id = ${id}`;

  connection.query(queryString, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

const getShop = (id, callback) => {
  const queryString = `SELECT * from Shops where id = ${id}`;

  connection.query(queryString, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

module.exports = {
  getProduct,
  getShop,
  getColors,
}