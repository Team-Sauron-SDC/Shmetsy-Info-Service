/* eslint-disable no-unused-vars */
require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const dotenv = require('dotenv').config();

const redis = require('./controllers/redis.js');
const db = require('./controllers');

const app = express();

app.use(compression());
app.use(express.static('public'));
app.use('/:id', express.static('public'));
app.use(bodyParser.json());

const { PORT } = process.env;

app.get('/:id/undefined', (req, res) => {
  res.sendStatus(200);
});

app.get('/product/:id', redis.checkProduct, db.getProduct);

app.get('/product/colors/:id', redis.checkColor, db.getColors);

app.get('/product/shop/:shopId', redis.checkShop, db.getShop);

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
