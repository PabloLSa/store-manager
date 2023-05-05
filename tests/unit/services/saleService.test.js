const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../src/models/conecctions');
const productModel = require('../../../src/models');
const { insertSales } = require('../../../src/services/saleService');

describe('SaleService', function () {
  it('Test insertSales', async () => {
    const mock = [
      { id: 1, name: 'Martelo de Thor' },
      { id: 2, name: 'Traje de encolhimento' },
      { id: 3, name: 'Escudo do Capitão América' }
    ];
    const arrayOfSales = [
      { productId: 1, quantity: 1 },
      { productId: 2, quantity: 2 },
      { productId: 3, quantity: 3 },
    ]
    sinon.stub(productModel, 'getAllproducts').resolves(mock);
    sinon
      .stub(productModel.salesModel, 'resgisterProductSold')
      .resolves();
    sinon.stub(productModel.salesModel, 'registerSale').resolves(4);
    const response = await insertSales(arrayOfSales)
    expect(response).to.be.deep.equal({
      type: null,
      message: {
        id: 4,
        itemsSold: arrayOfSales,
      },
    })
  })
  afterEach(function () {
    sinon.restore();
  });
})