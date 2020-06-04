// eslint-disable-next-line no-unused-vars
const nr = require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const dotenv = require('dotenv');
dotenv.config();

const db = require('./controllers/index.js');

const app = express();

app.use(compression());
app.use(express.static('public'));
app.use('/:id', express.static('public'));
app.use(bodyParser.json());

const PORT = process.env.PORT;

app.get('/product/:id', db.getProduct);

app.get('/product/colors/:id', db.getColors);

app.get('/product/shop/:shopId', db.getShop);

app.post('/product/1', db.addProduct);

app.get(`${process.env.LOADERKEY}`, (req, res) => {
  res.send(`${process.env.LOADERKEY}`);
});

app.listen(PORT, (err) => {
  if (err) {
    console.error('Error starting  server', err);
  } else {
    console.log(`server listening at port, http://18-225-36-183:${PORT}/1`);
  }
});
