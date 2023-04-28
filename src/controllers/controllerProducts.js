const services = require('../services');

const getAllproducts = async (_req, res) => {
  const products = await services.getAllproducts();

  return res.status(200).json(products);
};

const productsById = async (req, res) => {
  const { id } = req.params;
  const productsId = await services.productsById(id);
  if (!productsId) {
    
  }

  return res.status(200).json(productsId);
};

module.exports = { getAllproducts, productsById };