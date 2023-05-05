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

const insertProducts = async (productName) => {
  const [{ insertId }] = await connection
    .execute('Insert  Into StoreManager.products(name) value(?)',
    [productName]);
  console.log(insertId);
  return insertId;
};

const updateProductById = async (id, name) => {
  await connection.execute(
    `UPDATE 
      StoreManager.products
    SET
      name = '${name}'
    WHERE
      id = ${id};`,
    
  );
};

module.exports = { getAllproducts, productById, insertProducts, updateProductById };