const services = require('../services');
const { updateProductService } = require('../services/productService');

const getAllproducts = async (_req, res) => {
  const { message } = await services.getProducts();
console.log(message);
  return res.status(200).json(message);
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
  if (!productName) {
    return res.status(400).json({ message: '"name" is required' });
  }
  if (productName.length < 5) {
    return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  }
  const { message } = await services.insertProducts(productName);

  return res.status(201).json(message);
};

const updateProduct = async (req, res) => {
  const newName = req.body.name;
  const id = Number(req.params.id);
  const { type, message } = await updateProductService(id, newName);
  
  if (type) return res.status(type).json({ message });
  return res.status(200).json({ id, name: newName });
 };

module.exports = { getAllproducts, productById, insertProducts, updateProduct }; 