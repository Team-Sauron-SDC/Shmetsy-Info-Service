const { Product } = require('../Postgres');


const getProduct = (id) => Product.findAll({ attributes: ['name', 'description', 'price', 'rating'], where: { id } });

const getShop = (id) => Product.findAll({ attributes: ['shop_name', 'owner_name', 'total_sales', 'location', 'owner_url'], where: { id } });

const getColors = (id) => Product.findAll({ attributes: ['colors'], where: { id } });

const addShop = (body) => Product.create(body);

module.exports = {
  getProduct,
  getShop,
  getColors,
  addShop,
};

/* NON SEQUELIZE */
// const { pool } = require('../Postgres');

// const getProduct = (id, callback) => {
//   const queryStr = `SELECT name, description, price, rating FROM products WHERE id = ${id}`;
//   pool.query(queryStr, (err, res) => {
//     if (err) {
//       callback(err, null);
//     } else {
//       callback(null, res);
//     }
//   });
// };

// const getShop = (id, callback) => {
//   const queryStr = `SELECT shop_name, owner_name, total_sales, location, owner_url
// FROM products where id = ${id}`;
//   pool.query(queryStr, (err, res) => {
//     if (err) {
//       callback(err, null);
//     } else {
//       callback(null, res);
//     }
//   });
// };

// const getColors = (id, callback) => {
//   const queryStr = `SELECT colors FROM products WHERE  id = ${id}`;
//   pool.query(queryStr, (err, res) => {
//     if (err) {
//       callback(err, null);
//     } else {
//       callback(null, res);
//     }
//   });
// };
