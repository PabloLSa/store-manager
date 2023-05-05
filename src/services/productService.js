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

const updateProductService = async (id, name) => {
  const products = await model.getAllproducts();
  const validIds = products.map((product) => product.id);
  const isValidId = validIds.includes(id);
  if (!isValidId) return { type: 404, message: 'Product not found' };
  const validIdName = name.length > 4;
  if (!validIdName) {
 return {
    type: 422,
    message: '"name" length must be at least 5 characters long',
  }; 
}
  await model.updateProductById(id, name);
  return { type: null, message: null };
};

module.exports = { getProducts, productById, insertProducts, updateProductService };