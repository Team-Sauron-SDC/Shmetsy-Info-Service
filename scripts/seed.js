const mysql = require('mysql');
const faker = require('faker');

const connection = mysql.createConnection({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'Shmetsy',
});

let shopId = 1;

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
  const price = faker.fake('{{commerce.price}}');

  const queryString = `INSERT INTO Products (name, shop_id, description, price) VALUES ('${productName}', ${shopId}, '${description}', '${price}')`;

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
      console.log('Successfully added 1 row to table');
    }
  });
}


for (let i = 1; i < 101; i += 1) {
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
