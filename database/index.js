require('dotenv').config();
const mysql = require('mysql');

const connection = mysql.createConnection({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'Shmetsy',
});

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
  getColors,
  getShop,
};
