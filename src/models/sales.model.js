const connection = require('./conecctions');

const registerSale = async () => {
  const [{ insertId }] = await
    connection.execute('INSERT  INTO StoreManager.sales(date) VALUE(NOW())');
  // console.log(insertId);
  return insertId;
};

const resgisterProductSold = async (saleId, productId, quantity) => {
 await connection.execute(
    `INSERT INTO StoreManager.sales_products(sale_id, product_id, quantity)
    VALUE(?,?,?) `,
    [saleId, productId, quantity], 
  );
  return saleId;
};

const getAllSales = async () => {
  const [result] = await connection.execute(
    `SELECT
      s.id AS saleId, s.date, sp.product_id AS productId, sp.quantity
    FROM
      StoreManager.sales AS s
    INNER JOIN
      StoreManager.sales_products AS sp
    ON
      s.id = sp.sale_id
    ORDER BY
      s.id, sp.product_id `,
);
  return result;
};

module.exports = { registerSale, resgisterProductSold, getAllSales };