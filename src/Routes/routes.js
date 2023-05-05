const express = require('express');
const controller = require('../controllers');
const { validName } = require('../middlewares/validName');

const productRouter = express.Router();

productRouter.get('/', controller.getAllproducts);
productRouter.get('/:id', controller.productById);
productRouter.post('/', controller.insertProducts);
productRouter.put('/:id', validName, controller.updateProduct);

module.exports = productRouter;