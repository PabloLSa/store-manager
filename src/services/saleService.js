const { salesModel, getAllproducts } = require('../models');

const insertSales = async (arrayOfSales) => {
  const validQuantity = arrayOfSales.every((sale) => sale.quantity > 0);
  if (!validQuantity) {
 return { type: 422, message: '"quantity" must be greater than or equal to 1' }; 
  }

  const products = await getAllproducts();
  const validIds = products.map((product) => product.id);
  const validId = arrayOfSales.every((sale) => validIds.include(sale.productId));
  if (!validId) return { type: 404, message: 'Product not found' };

  const saleId = await salesModel.resgisterSale();
  await Promise.all(arrayOfSales.map(async (sale) => salesModel
    .resgisterProductSold(saleId, sale.productId, sale.quantity))); 
  return {
    type: null,
    message: {
      id: saleId,
      itemSold: arrayOfSales,
    },
  };
};

module.exports = { insertSales };