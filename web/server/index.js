const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');
// const Mysql = require('./controllers/mysql.js');
const Postgres = require('./controllers/postgres.js');
// const Cassandra = require('./controllers/cassandra.js');

const app = express();

app.use(compression());
app.use(express.static(path.join(__dirname, '/../public')));
app.use('/:id', express.static(path.join(__dirname, '/../public')));
app.use(bodyParser.json());

const PORT = 3001;

app.get('/:id/undefined', (req, res) => {
  res.sendStatus(200);
});

/* MYSQL */
// app.get('/product/:id', Mysql.getProduct);

// app.get('/product/colors/:id', Mysql.getColors);

// app.get('/product/shop/:shopId', Mysql.getShop);

// app.delete('/product/:id', Mysql.deleteItem);

// app.post('/product/', Mysql.addProduct);

// app.put('/product/shop/:shopId', Mysql.updateSeller);

/* CASSANDRA */
// app.get('/product/:id', Cassandra.getProduct);

// app.get('/product/colors/:id', Cassandra.getColors);

// app.get('/product/shop/:shopId', Cassandra.getShop);

/* POSTGRES */
app.get('/product/:id', Postgres.getProduct);

app.get('/product/colors/:id', Postgres.getColors);

app.get('/product/shop/:shopId', Postgres.getShop);

app.listen(PORT, (err) => {
  if (err) {
    console.error('Error starting  server', err);
  } else {
    console.log(`server listening at port, http://localhost:${PORT}/1`);
  }
});
