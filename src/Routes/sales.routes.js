const express = require('express');
const { controllerSales } = require('../controllers');
const { validSalesBody } = require('../middlewares/validSalesBody');

const saleRouter = express.Router();
saleRouter.post('/', validSalesBody, controllerSales.registerSale);
saleRouter.get('/', controllerSales.getAllSales);
saleRouter.get('/:id', controllerSales.getSalesById);
module.exports = saleRouter;