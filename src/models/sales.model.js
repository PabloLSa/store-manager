const connection = require('./conecctions');

const registerSale = async () => {
  const [{ insertId }] = await
    connection.execute('INSERT  INTO StoreManager.sales(date) VALUE(NOW())');
  return insertId;
};

const resgisterProductSold = async (saleId, productId, quantity) => {
  connection.execute(
    `INSERT INTO StorageManager.sales_products(sale_id, product_id, quantity)
    VALUE(?,?,?) `,
    [saleId, productId, quantity], 
  );
  return saleId;
};

module.exports = { registerSale, resgisterProductSold };