const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database');


const PORT = 4200;
const app = express();

app.use(express.static(path.join(__dirname, '/../public')));
app.use("/:id", express.static(path.join(__dirname, '/../public')));
app.use(bodyParser.json());


app.get('/product/:id', (req, res) => {
  db.getProduct(Number(req.params.id), (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get('/product/colors/:id', (req, res) => {
  db.getColors(Number(req.params.id), (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get('/product/shop/:shopId', (req,res) => {
  db.getShop(Number(req.params.shopId), (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
