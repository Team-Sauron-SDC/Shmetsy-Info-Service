const { Sequelize, DataTypes } = require('sequelize');
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

const sequelize = new Sequelize(process.env.PGDATABASE,
  process.env.PGUSER, process.env.PGPASSWORD, {
    host: process.env.PGHOST,
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
