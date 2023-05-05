const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../src/models/conecctions');
const { salesModel } = require('../../../src/models');

describe('saletModel', function () {
  it('Test registerSale', async () => {
    sinon.stub(connection, 'execute').resolves([{insertId: 4}])
    const id = await salesModel.registerSale()
    expect(id).to.be.equal(4)
  })

  it('Test resgisterProductSold', async () => {
    sinon.stub(connection, 'execute').resolves();
    const id = await salesModel.resgisterProductSold(4, 2, 1);
    expect(id).to.be.equal(4);
  })


  afterEach(function () {
    sinon.restore();
  });
})