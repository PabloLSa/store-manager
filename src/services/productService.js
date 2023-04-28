const model = require('../models');

const getAllproducts = async () => {
  const products = await model.getAllproducts();

  return products;
};

const productById = async (productByiD) => {
  const product = await model.productById(productByiD);

  return product;
};

module.exports = { getAllproducts, productById };