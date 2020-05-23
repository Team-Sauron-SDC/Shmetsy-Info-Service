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
    const createDatatype = 'CREATE TYPE colors ( color text, price_mod int );';
    client.execute(createDatatype);
  })
  .then(() => {
    const createTable = 'CREATE TABLE products (id int PRIMARY KEY, name text, description text, price double, rating text, shop_name text, owner_name text, totalSales int, location text, owner_url text)';

    client.execute(createTable)
      .then((err) => (err ? console.log('failed to create table', err) : console.log('table created!')));
  });
