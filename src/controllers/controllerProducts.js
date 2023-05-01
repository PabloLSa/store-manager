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

const insertProducts = async (req, res) => {
  const productName = req.body.name;
  const { message } = await services.insertProducts(productName);

  return res.status(201).json(message);
};

module.exports = { getAllproducts, productById, insertProducts }; 