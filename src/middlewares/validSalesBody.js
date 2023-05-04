const validSalesBody = (req, res, next) => {
  try {
    const isProductId = req.body.every((sale) => Object.keys(sale).includes('productId'));
    const isQuantity = req.body.every((sale) => Object.keys(sale).includes('quantity'));
    if (!isProductId) throw new Error('"productId" is required');
    if (!isQuantity) throw new Error('"quantity" is required');
    return next();
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = { validSalesBody };