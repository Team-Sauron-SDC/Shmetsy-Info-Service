const Redis = require('ioredis');

const client = new Redis(6379);

// const empty = () => {
//   client.flushdb((err, res) => {
//     console.log(res);
//   });
// };
// empty();

const productCache = (id, callback) => {
  client.get(id, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

const shopCache = (id, callback) => {
  client.get(id, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

const colorCache = (id, callback) => {
  client.get(id, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

const insert = (id, data) => {
  client.set(id, data)
    .catch((err) => console.log(err));
};

module.exports = {
  productCache,
  colorCache,
  shopCache,
  insert,
};
