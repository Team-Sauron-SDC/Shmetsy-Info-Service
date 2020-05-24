const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');
// const db = require('../DB/index.js');
const db = require('../DB/Cassandra.js');


const app = express();

app.use(compression());
app.use(express.static(path.join(__dirname, '/../public')));
app.use('/:id', express.static(path.join(__dirname, '/../public')));
app.use(bodyParser.json());

const PORT = 3001;

app.get('/product/:id', (req, res) => {
  db.getProduct(Number(req.params.id), (err, data) => {
    if (err) {
      res.status(400);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get('/:id/undefined', (req, res) => {
  res.sendStatus(200);
});

app.get('/product/colors/:id', (req, res) => {
  db.getColors(Number(req.params.id), (err, data) => {
    if (err) {
      res.status(400);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get('/product/shop/:shopId', (req, res) => {
  db.getShop(Number(req.params.shopId), (err, data) => {
    if (err) {
      res.status(400);
    } else {
      res.status(200).send(data);
    }
  });
});

app.delete('/product/:id', (req, res) => {
  db.deleteItem(req.body.name, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

app.post('/product/', (req, res) => {
  db.addProduct(req.body, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

app.put('/product/shop/:shopId', (req, res) => {
  db.updateSeller(req.body, Number(req.params.shopId), (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

app.listen(PORT, (err) => {
  if (err) {
    console.error('Error starting  server', err);
  } else {
    console.log(`server listening at port, http://localhost:${PORT}/1`);
  }
});
