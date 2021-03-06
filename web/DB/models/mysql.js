const connection = require('../index');

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

const deleteItem = (name, callback) => {
  const queryString = `DELETE FROM Products WHERE name = '${name}'`;

  connection.query(queryString, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

const addProduct = (body, callback) => {
  const queryString = `INSERT INTO Products (name, shop_id, description, price, rating) VALUES ('${body.name}', '${body.shop_id}', '${body.description}', '${body.price}', '${body.rating}')`;

  connection.query(queryString, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

const updateSeller = (body, shopId, callback) => {
  const queryString = `UPDATE Shops SET shop_name = '${body.shop_name}', owner_name = '${body.owner_name}', location = '${body.location}' WHERE id = '${shopId}'`;

  connection.query(queryString, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

module.exports = {
  getProduct,
  getShop,
  getColors,
  deleteItem,
  addProduct,
  updateSeller,
};
