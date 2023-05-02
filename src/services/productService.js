const model = require('../models');

const getProducts = async () => {
  const products = await model.getAllproducts();

  return { type: null, message: products };
};

const productById = async (productByiD) => {
  const product = await model.productById(productByiD);
  if (!product) {
    return { type: 'PRODUCT NOT FOUND', message: 'Product not found' };
  }

  return { type: null, message: product };
};

const insertProducts = async (productName) => {
  const idNewProduct = await model.insertProducts(productName);

  return {
    type: null,
message: {
      id: idNewProduct,
      name: productName,
    },
  };
};

module.exports = { getProducts, productById, insertProducts };