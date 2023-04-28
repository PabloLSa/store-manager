const services = require('../services');

const getAllproducts = async (_req, res) => {
  const products = await services.getAllproducts();

  return res.status(200).json(products);
};

const productById = async (req, res) => {
  const { id } = req.params;
  const product = await services.productById(id);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  return res.status(200).json(product);
};

module.exports = { getAllproducts, productById }; 