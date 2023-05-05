const { salesModel, getAllproducts } = require('../models');

const insertSales = async (arrayOfSales) => {
  const validQuantity = arrayOfSales.every((sale) => sale.quantity > 0);
  if (!validQuantity) {
 return { type: 422, message: '"quantity" must be greater than or equal to 1' }; 
  }

  const products = await getAllproducts();
  const validIds = products.map((product) => product.id);
  const validId = arrayOfSales.every((sale) => validIds.includes(sale.productId));
  if (!validId) return { type: 404, message: 'Product not found' };
  const saleId = await salesModel.registerSale();
  await Promise.all(arrayOfSales.map(async (sale) => salesModel
    .resgisterProductSold(saleId, sale.productId, sale.quantity))); 
  return {
    type: null,
    message: {
      id: saleId,
      itemsSold: arrayOfSales,
    },
  };
};
  const getAllSales = async () => {
    const sales = await salesModel.getAllSales();
    return sales;
  };

const getSalesById = async (id) => {
  const sales = await salesModel.getAllSales();
  const validIds = sales.map((sale) => sale.saleId);
  const isValidId = validIds.includes(id);
  if (!isValidId) return { type: 404, message: 'Sale not found' };
  const saleById = sales.filter((sale) => sale.saleId === id);
  const response = saleById.map(({ saleId, ...rest }) => ({ ...rest }));
  return { type: null, message: response };
};

module.exports = { insertSales, getAllSales, getSalesById };