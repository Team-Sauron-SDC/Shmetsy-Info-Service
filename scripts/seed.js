const mysql = require('mysql');
var faker = require('faker');
const connection = mysql.createConnection({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'Shmetsy'
})
var productCount = 0;
var shopCount = 0;
var colorCount = 0;
var shopId = 1;

for (var i = 0; i < 99; i ++) {
  if (i === 20) {
    shopId ++;
  } else if (i === 40) {
    shopId ++;
  } else if (i === 60) {
    shopId ++;
  } else if (i === 80) {
    shopId ++;
  }
  var description = faker.fake("{{lorem.paragraphs}}");
  var productName = faker.fake("{{commerce.productName}}");
  var price = faker.fake("{{commerce.price}}");

  var queryString = `INSERT INTO Products (name, shop_id, description, price) VALUES ("${productName}", ${shopId}, "${description}", "${price}")`;

  connection.query(queryString, (err, results) => {
    if (err) {
      console.error("There was an error: ", err);
    } else {
      productCount ++;
      console.log("Successfully added 1 row to table");
    }
  })
}

for (var i = 2; i < 6; i ++) {
  var shopName = faker.fake("{{company.companyName}}");
  var ownerName = faker.fake("{{name.firstName}} {{name.lastName}}");
  var year = String(Math.floor(Math.random() * (2020 - 2006)) + 2006);
  var totalSales = Math.floor(Math.random() * (500000 - 100)) + 100;
  var location = faker.fake("{{address.city}}, {{address.country}}");
  var url = `https://shmetsy.s3.us-east-2.amazonaws.com/owner${i}.jpeg`;

  var queryString = `INSERT INTO Shops (shop_name, owner_name, location, total_sales, founded_date, owner_url) VALUES ("${shopName}", "${ownerName}", "${location}", ${totalSales}, "${year}", "${url}")`;

  connection.query(queryString, (err, results) => {
    if (err) {
      console.error("There was an error: ", err);
    } else {
      shopCount ++;
      console.log("Successfully added 1 row to table");
    }
  })
}


for (var i = 1; i < 101; i ++) {
  for (var j = 0; j < 5; j ++) {
    var color = faker.fake("{{commerce.productAdjective}} {{commerce.color}}");
    var mod = Math.floor(Math.random() * (200 - 1) + 1);
    var queryString = `INSERT INTO Colors (color_name, price_modifier, product_id) VALUES ("${color}", ${mod}, ${i})`;

    connection.query(queryString, (err, results) => {
      if (err) {
        console.error("There was an error: ", err);
      } else {
        colorCount ++;
        console.log("Successfully added 1 row to table");
      }
    })
  }
}

connection.end();

