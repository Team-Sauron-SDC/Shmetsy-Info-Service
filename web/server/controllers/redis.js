const redis = require('../../Cache/connect.js');

module.exports = {

  checkProduct: (req, res, next) => {
    const id = Number(req.params.id);

    redis.productCache(`product${id}`, (err, data) => {
      if (err) {
        throw (err);
      }
      if (data !== null) {
        const result = JSON.parse(data);
        res.send([result]);
      } else {
        next();
      }
    });
  },

  checkShop: (req, res, next) => {
    const id = Number(req.params.shopId);

    redis.shopCache(`shopId${id}`, (err, data) => {
      if (err) {
        throw (err);
      }
      if (data !== null) {
        const result = JSON.parse(data);
        res.send([result]);
      } else {
        next();
      }
    });
  },

  checkColor: (req, res, next) => {
    const id = Number(req.params.id);

    redis.colorCache(`colors${id}`, (err, data) => {
      if (err) {
        throw (err);
      }
      if (data !== null) {
        const result = JSON.parse(data);
        res.send(result);
      } else {
        next();
      }
    });
  },
};
