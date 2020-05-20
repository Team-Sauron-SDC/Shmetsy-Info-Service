const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql');
const compression = require('compression');

// const PORT = process.env.PORT
// const HOST = process.env.HOST;
const PORT = 3001

// mysql credentials
// const connection = mysql.createConnection({
// 	host: process.env.MYSQL_HOST,
// 	user: process.env.MYSQL_USER,
// 	password: process.env.MYSQL_PASSWORD,
// 	database: process.env.MYSQL_DATABASE,
// });

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'Shmetsy',
});

connection.connect((err) => {
	if (err) {
    // console.log(process.env.MYSQL_DATABASE);
		console.error('error connecting mysql: ', err);
	} else {
		console.log('mysql connection successful');
		app.listen(PORT, (err) => {
			if (err) {
				console.error('Error starting  server', err);
			} else {
				console.log(`server listening at port, http://localhost:${PORT}/1`);
			}
		});
	}
});

const app = express();

app.use(compression());
app.use(express.static(path.join(__dirname, '/../public')));
app.use("/:id", express.static(path.join(__dirname, '/../public')));
app.use(bodyParser.json());


app.get('/product/:id', (req, res) => {
  getProduct(Number(req.params.id), (err, data) => {
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
  getColors(Number(req.params.id), (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get('/product/shop/:shopId', (req, res) => {
  getShop(Number(req.params.shopId), (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// database functions

const getProduct = (id, callback) => {
  const queryString = `SELECT * from Products where id = ${id}`;

  connection.query(queryString, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

const getColors = (id, callback) => {
  const queryString = `SELECT * from Colors where product_id = ${id}`;

  connection.query(queryString, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

const getShop = (id, callback) => {
  const queryString = `SELECT * from Shops where id = ${id}`;

  connection.query(queryString, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};