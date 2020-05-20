const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');
const db = require('../DB/index.js')

const app = express();

app.use(compression());
app.use(express.static(path.join(__dirname, '/../public')));
app.use("/:id", express.static(path.join(__dirname, '/../public')));
app.use(bodyParser.json());

const PORT = 3001

app.get('/product/:id', (req, res) => {
  db.getProduct(Number(req.params.id), (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get('/:id/undefined', (req, res) => {
  res.sendStatus(200);
})

app.get('/product/colors/:id', (req, res) => {
  db.getColors(Number(req.params.id), (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get('/product/shop/:shopId', (req, res) => {
  db.getShop(Number(req.params.shopId), (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// database functions
app.listen(PORT, (err) => {
  if (err) {
    console.error('Error starting  server', err);
  } else {
    console.log(`server listening at port, http://localhost:${PORT}/1`);
  }
});