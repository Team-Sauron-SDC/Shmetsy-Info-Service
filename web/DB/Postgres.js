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
  logging: false,
});

const Product = sequelize.define('products', {
  id: { type: DataTypes.INTEGER, primaryKey: true },
  name: { type: DataTypes.STRING },
  description: { type: DataTypes.STRING(1000) },
  price: { type: DataTypes.DECIMAL },
  rating: { type: DataTypes.DECIMAL },
  shop_name: { type: DataTypes.STRING },
  owner_name: { type: DataTypes.STRING },
  total_sales: { type: DataTypes.INTEGER },
  location: { type: DataTypes.STRING },
  owner_url: { type: DataTypes.STRING },
  colors: { type: DataTypes.STRING },
}, {
  indexes: [{ name: 'id', fields: ['id'] }],
  timestamps: false,
});

pool.connect()
  .then(() => console.log('connected to postgres'))
  .then(() => {
    Product.sync();
  })
  .catch((err) => console.log('failed to connect: ', err));

module.exports = {
  pool,
  Product,
};
