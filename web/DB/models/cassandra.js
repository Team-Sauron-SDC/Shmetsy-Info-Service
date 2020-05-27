const client = require('../Cassandra');

const getProduct = (id, callback) => {
  const queryStr = `SELECT name, description, price, rating FROM product_info.products WHERE id = ${id}`;

  client.execute(queryStr, (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const getShop = (id, callback) => {
  const queryStr = `SELECT shop_name, owner_name, total_sales, location, owner_url FROM product_info.products WHERE id = ${id}`;

  client.execute(queryStr, (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const getColors = (id, callback) => {
  const queryStr = `SELECT colors FROM product_info.products WHERE id = ${id}`;

  client.execute(queryStr, (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(res);
    }
  });
};

module.exports = {
  getProduct,
  getShop,
  getColors,
};
