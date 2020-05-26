const Postgres = require('../../DB/models/postgres');

exports.getColors = ((req, res) => {
  Postgres.getColors(Number(req.params.id), (err, data) => {
    if (err) {
      res.status(400);
    } else {
      console.log(data.rows[0].colors);
      // const colors = JSON.parse(data.rows);
      res.status(200).send(data.rows);
    }
  });
});

exports.getProduct = ((req, res) => {
  Postgres.getProduct(Number(req.params.id), (err, data) => {
    if (err) {
      res.status(400);
    } else {
      res.status(200).send(data.rows);
    }
  });
});

exports.getShop = ((req, res) => {
  Postgres.getShop(Number(req.params.shopId), (err, data) => {
    if (err) {
      res.status(400);
    } else {
      res.status(200).send(data.rows);
    }
  });
});
