const connection = require('./conecctions');

const getAllproducts = async () => {
  const [result] = await connection.execute('Select * From StoreManager.products');
  return result;
};

const productById = async (productId) => {
  const [[product]] = await connection.execute(
    'Select * From products Where id =?', [productId],
  );
  return product;
};

module.exports = { getAllproducts, productById };