const express = require('express');
const controller = require('../controllers');

const router = express.Router();

router.get('/', controller.getAllproducts);
router.get('/:id', controller.productById);
router.post('/', controller.insertProducts);

module.exports = router;