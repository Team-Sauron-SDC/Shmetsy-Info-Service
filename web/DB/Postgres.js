const { Sequelize, DataTypes } = require('sequelize');
const { Pool } = require('pg');

const pool = new Pool({
  user: 'jorel',
  host: 'localhost',
  database: 'product_info',
  password: 'pass',
  port: 5432,
});

const sequelize = new Sequelize('product_info', 'jorel', 'pass', {
  host: 'localhost',
  dialect: 'postgres',
});

const Product = sequelize.define('products', {
  id: { type: DataTypes.INTEGER, primaryKey: true },
  name: { type: DataTypes.STRING },
  description: { type: DataTypes.STRING(1000)},
  price: { type: DataTypes.DECIMAL },
  rating: { type: DataTypes.DECIMAL },
  shop_name: { type: DataTypes.STRING },
  owner_name: { type: DataTypes.STRING },
  total_sales: { type: DataTypes.INTEGER },
  location: { type: DataTypes.STRING },
  owner_url: { type: DataTypes.STRING },
  colors: { type: DataTypes.STRING },
}, { timestamps: false });

pool.connect()
.then(() => console.log('connected to postgres'))
.then(() => {
  Product.sync()
})
.catch((err) => console.log('failed to connect: ', err));

const getProduct = (id, callback) => {
  const queryStr = `SELECT name, description, price, rating FROM products WHERE id = ${id}`;
  pool.query(queryStr, (err, res) => {
    if (err) {
      callabck(err, null);
    } else {
      callback(null, res)
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
      callabck(err, null);
    } else {
      callabck(null, res);
    }
  });
};

module.exports = {
  getProduct,
  getShop,
  getColors,
}
