const services = require('../services');

const getAllproducts = async (_req, res) => {
  const products = await services.getAllproducts();

  return res.status(200).json(products);
};

const productById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await services.productById(id);
  if (type) {
    return res.status(404).json({ message });
  }

  return res.status(200).json(message);
};

module.exports = { getAllproducts, productById }; 