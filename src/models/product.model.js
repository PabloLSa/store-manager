const connection = require('./conecctions');

const getAllproducts = async () => {
  const [result] = await connection.execute('Select * From StoreManager.products');
  return result;
};

const productByiD = async (productId) => {
  const [[products]] = await connection.execute(
    'Select * From products Where id =?', [productId],
  );
  return products;
};

module.exports = { getAllproducts, productByiD };