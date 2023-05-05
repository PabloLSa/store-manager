const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { salesService } = require('../../../src/services');
const { registerSale } = require('../../../src/controllers/controllerSales');
chai.use(sinonChai);
const { expect } = chai;

describe('controllerSales', () => {
  it('registerSale', async () => {
    const arrayOfSales = [
      { productId: 1, quantity: 1 },
      { productId: 2, quantity: 2 },
    ]
    sinon.stub(salesService, 'insertSales').resolves({
      type: null,
      message: {
        id: 4,
        itemsSold: arrayOfSales,
      },
    });
    const res = {};
    const req = {};
    req.body = arrayOfSales; 
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    await registerSale(req, res);
    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith({
      id: 4,
      itemsSold: arrayOfSales,
    });
    afterEach(function () {
      sinon.restore();
    });
})
})

