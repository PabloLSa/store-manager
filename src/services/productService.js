const model = require('../models');

const getAllproducts = async () => {
  const products = await model.getAllproducts();

  return products;
};

const productById = async (productByiD) => {
  const product = await model.productById(productByiD);
  if (!product) {
    return { type: 'PRODUCT NOT FOUND', message: 'Product not found' };
  }

  return { type: null, message: product };
};

module.exports = { getAllproducts, productById };