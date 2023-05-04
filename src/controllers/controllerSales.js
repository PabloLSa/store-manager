const { salesService } = require('../services');

const registerSale = async (req, res) => {
  const arrayOfSales = req.body;
  const { type, message } = await salesService.insertSales(arrayOfSales);
  if (type) return res.status(type).json({ message });
  return res.status(201).json(message);
};

module.exports = { registerSale };