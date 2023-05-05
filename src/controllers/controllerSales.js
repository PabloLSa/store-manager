const { salesService } = require('../services');

const registerSale = async (req, res) => {
  const arrayOfSales = req.body;
  const { type, message } = await salesService.insertSales(arrayOfSales);
  if (type) return res.status(type).json({ message });
  return res.status(201).json(message);
};

const getAllSales = async (_req, res) => {
  const response = await salesService.getAllSales();
  return res.status(200).json(response);
};

const getSalesById = async (req, res) => {
  const id = Number(req.params.id);
  const { type, message } = await salesService.getSalesById(id);
  if (type) return res.status(type).json({ message });
  return res.status(200).json(message);
};

module.exports = { registerSale, getAllSales, getSalesById };