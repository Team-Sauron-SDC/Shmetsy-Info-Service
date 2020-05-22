const fs = require('fs');
const csvWriter = require('csv-write-stream');

const writer = csvWriter();
const faker = require('faker');


const generateColors = () => {
  const colorGroup = {
    colors: [],
  };
  for (let i = 0; i < 1; i += 1) {
    for (let j = 0; j < 5; j += 1) {
      const color = faker.fake('{{commerce.productAdjective}} {{commerce.color}}');
      const mod = Math.floor(Math.random() * (200 - 1) + 1);
      colorGroup.colors.push({ color, mod });
    }
  }
  return colorGroup;
};

const generateData = () => {
  writer.pipe(fs.createWriteStream('data.csv'));
  const possibleRatings = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
  for (let i = 0; i < 10000000; i += 1) {
    writer.write({
      id: i,
      product_name: faker.fake('{{commerce.productName}}'),
      description: faker.fake('{{lorem.paragraphs}}'),
      price: Math.floor(Math.random() * (10000 - 500) + 500) / 100,
      product_rating: possibleRatings[Math.floor(Math.random() * 10)],
      shopName: faker.fake('{{company.companyName}}'),
      ownerName: faker.fake('{{name.firstName}} {{name.lastName}}'),
      totalSales: Math.floor(Math.random() * (500000 - 100)) + 100,
      location: faker.fake('{{address.city}}, {{address.country}}'),
      url: faker.image.avatar(),
    });
  }
  writer.end();
  console.log('done');
};

generateData();
