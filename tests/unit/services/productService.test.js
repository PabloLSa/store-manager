const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../src/models/conecctions');
const productService = require('../../../src/services');
const productModel = require('../../../src/models');
const { productServiceAll, productServiceById, productSearchByName } = require('./mocks/productService.mock');
describe('productService', function () {
  it('Test FindAll', async () => {
  
    sinon.stub(productModel, 'getAllproducts').resolves(productServiceAll)
    const response = { type:null, message: productServiceAll }
    const date = await productService.getProducts();
    expect(date).to.be.deep.equal(response);
  })
  afterEach(function () {
    sinon.restore();
  });
})