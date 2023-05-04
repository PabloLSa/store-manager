const validSalesBody = async (req, res, next) => {
  const arrayOfSales = req.body;
  try {
    const validProductId = arrayOfSales.every((sale) => sale.productId);
    if (!validProductId) throw new Error('"produictId" is required');
    const validQuantity = arrayOfSales.every((sale) => sale.quantity);
    if (!validQuantity) throw new Error('"quantity" is required');
    return next();
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = { validSalesBody };