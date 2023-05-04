const express = require('express');
const controller = require('../controllers');

const productRouter = express.Router();

productRouter.get('/', controller.getAllproducts);
productRouter.get('/:id', controller.productById);
productRouter.post('/', controller.insertProducts);

module.exports = productRouter;