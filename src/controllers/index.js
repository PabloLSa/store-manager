const {
  getAllproducts,
  productById,
  insertProducts,
  updateProduct } = require('./controllerProducts');
const controllerSales = require('./controllerSales');

module.exports = { getAllproducts, productById, insertProducts, controllerSales, updateProduct };