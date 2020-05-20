const mysql = require('mysql');
const faker = require('faker');

const connection = mysql.createConnection({
	host: process.env.MYSQL_HOST || 'localhost',
	user: process.env.MYSQL_USER || 'root',
	password: process.env.MYSQL_PASSWORD || '',
	database: process.env.MYSQL_DATABASE || 'Shmetsy'
});

let shopId = 1;
const possibleRatings = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];


for (let i = 0; i < 99; i += 1) {
  if (i === 20) {
    shopId += 1;
  } else if (i === 40) {
    shopId += 1;
  } else if (i === 60) {
    shopId += 1;
  } else if (i === 80) {
    shopId += 1;
  }
  const description = faker.fake('{{lorem.paragraphs}}');
  const productName = faker.fake('{{commerce.productName}}');
  const price = Math.floor(Math.random() * (10000 - 500) + 500) / 100;
  const rating = possibleRatings[Math.floor(Math.random() * 10)];

  const queryString = `INSERT INTO Products (name, shop_id, description, price, rating) VALUES ('${productName}', ${shopId}, '${description}', ${price}, ${rating})`;

  connection.query(queryString, (err) => {
    if (err) {
      console.error('There was an error: ', err);
    } else {
      console.log('Successfully added 1 row to table');
    }
  });
}

for (let i = 2; i < 6; i += 1) {
  const shopName = faker.fake('{{company.companyName}}');
  const ownerName = faker.fake('{{name.firstName}} {{name.lastName}}');
  const year = String(Math.floor(Math.random() * (2020 - 2006)) + 2006);
  const totalSales = Math.floor(Math.random() * (500000 - 100)) + 100;
  const location = faker.fake('{{address.city}}, {{address.country}}');
  const url = `https://shmetsy.s3.us-east-2.amazonaws.com/owner${i}.jpeg`;

  const queryString = `INSERT INTO Shops (shop_name, owner_name, location, total_sales, founded_date, owner_url) VALUES ('${shopName}', '${ownerName}', '${location}', ${totalSales}, '${year}', '${url}')`;

  connection.query(queryString, (err) => {
    if (err) {
      console.error('There was an error: ', err);
    } else {
      console.log('Successfully added 1 row to table Shops');
    }
  });
}


for (let i = 2; i < 101; i += 1) {
  for (let j = 0; j < 5; j += 1) {
    const color = faker.fake('{{commerce.productAdjective}} {{commerce.color}}');
    const mod = Math.floor(Math.random() * (200 - 1) + 1);
    const queryString = `INSERT INTO Colors (color_name, price_modifier, product_id) VALUES ('${color}', ${mod}, ${i})`;

    connection.query(queryString, (err) => {
      if (err) {
        console.error('There was an error: ', err);
      } else {
        console.log('Successfully added 1 row to table');
      }
    });
  }
}

connection.end();