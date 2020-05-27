const pool = require('../Postgres');

const getProduct = (id, callback) => {
  const queryStr = `SELECT name, description, price, rating FROM products WHERE id = ${id}`;
  pool.query(queryStr, (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const getShop = (id, callback) => {
  const queryStr = `SELECT shop_name, owner_name, total_sales, location, owner_url FROM products where id = ${id}`;
  pool.query(queryStr, (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const getColors = (id, callback) => {
  const queryStr = `SELECT colors FROM products WHERE  id = ${id}`;
  pool.query(queryStr, (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

module.exports = {
  getProduct,
  getShop,
  getColors,
};
