const model = require('../models');

const getAllproducts = async () => {
  const products = await model.getAllproducts();

  return products;
};

const productsById = async (productByiD) => {
  const productsId = await model.productByiD(productByiD);

  return productsId;
};

module.exports = { getAllproducts, productsById };