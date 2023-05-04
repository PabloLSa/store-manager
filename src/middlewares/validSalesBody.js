const validSalesBody = async (req, res, next) => {
  const arrayOfSales = req.body;
  try {
    const isQuantity = arrayOfSales.every((sale) =>
      Object.keys(sale).includes('quantity'));
    if (!isQuantity) throw new Error('"quantity" is required');
    return next();
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = { validSalesBody };