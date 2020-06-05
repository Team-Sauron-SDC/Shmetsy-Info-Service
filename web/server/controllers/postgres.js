const Postgres = require('../../DB/models/postgres');
const redis = require('../../Cache/connect');

exports.getColors = ((req, res) => {
  const colorId = Number(req.params.id);
  Postgres.getColors(colorId)
    .then((results) => {
      const colors = JSON.parse(results[0].colors.replace(/'/g, '"'));
      redis.insert(`colors${colorId}`, JSON.stringify(colors));
      res.send(colors);
    })
    .catch((err) => res.sendStatus(400));
});

exports.getProduct = (req, res) => {
  const id = Number(req.params.id);
  Postgres.getProduct(id)
    .then((results) => {
      redis.insert(`product${id}`, JSON.stringify(results[0].dataValues));
      res.send(results);
    })
    .catch((err) => res.sendStatus(400));
};

exports.getShop = (req, res) => {
  const id = Number(req.params.shopId);
  Postgres.getShop(id)
    .then((results) => {
      redis.insert(`shopId${id}`, JSON.stringify(results[0].dataValues));
      res.send(results);
    })
    .catch((err) => res.sendStatus(400));
};

exports.addProduct = (req, res) => {
  const newProduct = req.body;
  Postgres.addShop(newProduct)
    .then((result) => res.send(result))
    .catch((err) => res.sendStatus(400));
};
