const mySql = require('../../DB/index.js');

exports.getProduct = ((req, res) => {
  mySql.getProduct(Number(req.params.id), (err, data) => {
    if (err) {
      res.status(400);
    } else {
      res.status(200).send(data);
    }
  });
});

exports.getColors = ((req, res) => {
  mySql.getColors(Number(req.params.id), (err, data) => {
    if (err) {
      res.status(400);
    } else {
      res.status(200).send(data);
    }
  });
});

exports.getShop = ((req, res) => {
  mySql.getShop(Number(req.params.shopId), (err, data) => {
    if (err) {
      res.status(400);
    } else {
      res.status(200).send(data);
    }
  });
});

exports.deleteItem = ((req, res) => {
  mySql.deleteItem(req.body.name, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

exports.addProduct = ((req, res) => {
  mySql.addProduct(req.body, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

exports.updateSeller = ((req, res) => {
  mySql.updateSeller(req.body, Number(req.params.shopId), (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});
