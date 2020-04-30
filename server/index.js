const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database');


const PORT = 4200;
const app = express();

app.use(express.static(path.join(__dirname, '/../public')));
app.use(bodyParser.json());

app.get('/populate', (req, res) => {
  db.populateDatabase();
  res.send('Successfully added dummy data to database Shmetsy');
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
