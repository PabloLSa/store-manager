const { getProducts, productById, insertProducts } = require('./productService');
const salesService = require('./saleService');

module.exports = { getProducts, productById, insertProducts, salesService };