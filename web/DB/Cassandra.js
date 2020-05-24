/* eslint-disable no-console */
const cassandra = require('cassandra-driver');

const tempClient = new cassandra.Client({
  contactPoints: ['localhost'],
  localDataCenter: 'datacenter1',
  keySpace: 'system',
});

const client = new cassandra.Client({
  contactPoints: ['localhost'],
  localDataCenter: 'datacenter1',
  keySpace: 'product_info',
});

tempClient.connect()
  .then(() => {
    const createKeyspace = "CREATE KEYSPACE IF NOT EXISTS product_info WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 1 } AND DURABLE_WRITES = true ;";
    return tempClient.execute(createKeyspace);
  })
  .then(() => {
    client.connect((err) => (err ? console.log('failed to connect', err) : console.log('connect to newkeyspace')));
  })
  .then(() => {
    const createTable = 'CREATE TABLE IF NOT EXISTS product_info.products (id int PRIMARY KEY, name text, description text, price double, rating text, shop_name text, owner_name text, total_sales int, location text, owner_url text, colors text)';

    return client.execute(createTable);
  })
  .catch((err) => console.log('connection err: ', err));

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
  const queryStr = `SELECT shop_name, owner_name, total_sales, location, owner_url FROM products WHERE id = ${id}`;

  client.execute(queryStr, (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const getColors = (id, callback) => {
  const queryStr = `SELECT colors FROM products WHERE id = ${id}`;

  client.execute(queryStr, (err, res) => {
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
