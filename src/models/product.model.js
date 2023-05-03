const connection = require('./conecctions');

const getAllproducts = async () => {
  const [result] = await connection.execute('Select * From StoreManager.products');
  console.log(result);
  return result;
};

const productById = async (productId) => {
  const [[product]] = await connection.execute(
    'Select * From products Where id =?', [productId],
  );
  return product;
};

const insertProducts = async (productName) => {
  const [{ insertId }] = await connection
    .execute('Insert  Into StoreManager.products(name) value(?)',
    [productName]);
  console.log(insertId);
  return insertId;
};
module.exports = { getAllproducts, productById, insertProducts };