/* eslint-disable camelcase */
const fs = require('fs');
const faker = require('faker');

const start = new Date();

const generateColors = () => {
  const colorGroup = [];
  for (let j = 0; j < 3; j += 1) {
    const color_name = faker.commerce.color();
    const price_modifier = Math.floor(Math.random() * (200 - 1) + 1);
    colorGroup.push({ color_name, price_modifier });
  }
  return JSON.stringify(colorGroup);
};

const writeProducts = fs.createWriteStream('product.csv');
writeProducts.write('id|name|description|price|rating|shop_name|owner_name|total_sales|location|url|colors\n', 'utf8');

const generateData = (writer, encoding, callback) => {
  let i = 10000000;
  let productId = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      productId += 1;
      const id = productId;
      const name = faker.commerce.productName();
      const description = faker.lorem.paragraph();
      const price = faker.commerce.price();
      const rating = faker.random.arrayElement([0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]);
      const shop_name = faker.company.companyName(0);
      const owner_name = faker.name.findName();
      const total_sales = faker.random.number({ min: 100, max: 50000 });
      const location = faker.fake('{{address.city}}, {{address.country}}');
      const owner_url = faker.image.avatar();
      const colorsobj = generateColors();
      const colors = colorsobj.replace(/"/g, "'");
      const data = `${id}|${name}|${description}|${price}|${rating}|${shop_name}|${owner_name}|${total_sales}|${location}|${owner_url}|${colors}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      console.log('drained: ', i);
      writer.once('drain', write);
    }
  }
  console.log(`started at: ${start.toUTCString()}`);
  write();
};

generateData(writeProducts, 'utf-8', () => {
  writeProducts.end();
  const end = new Date().getTime() - start.getTime();
  console.log(`Data generated, Time spent: ${Math.floor(end / 60000)}m and ${((end % 60000) / 1000).toFixed(0)}secs`);
});
