const {
  getAllproducts,
  productById,
  insertProducts,
  updateProductById } = require('./product.model');
const salesModel = require('./sales.model');

module.exports = { getAllproducts, productById, insertProducts, salesModel, updateProductById };