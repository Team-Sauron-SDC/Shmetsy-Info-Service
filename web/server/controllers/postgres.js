const Postgres = require('../../DB/models/postgres');

exports.getColors = ((req, res) => {
  const id = Number(req.params.id);
  Postgres.getColors(id)
    .then((results) => {
      const colors = JSON.parse(results[0].colors.replace(/'/g, '"'));
      res.send(colors);
    })
    .catch((err) => res.sendStatus(400));
});

exports.getProduct = (req, res) => {
  const id = Number(req.params.id);
  Postgres.getProduct(id)
    .then((result) => res.send(result))
    .catch((err) => res.sendStatus(400));
};

exports.getShop = (req, res) => {
  const id = Number(req.params.shopId);
  Postgres.getShop(id)
    .then((result) => res.send(result))
    .catch((err) => res.sendStatus(400));
};

exports.addProduct = (req, res) => {
  const newProduct = req.body;
  Postgres.addShop(newProduct)
    .then((result) => res.send(result))
    .catch((err) => res.sendStatus(400));
};
