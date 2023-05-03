const chai = require('chai');
const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../src/models/conecctions');
const  serviceProducts  = require('../../../src/services');
const { getAllproducts } = require('../../../src/controllers');
const sinonChai = require('sinon-chai');


chai.use(sinonChai);

describe('productcController', function () {
  it('Test GetProducts', async () => {
    const mock = 
      [
         { id: 1, name: 'Martelo de Thor' },
         { id: 2, name: 'Traje de encolhimento' },
        { id: 3, name: 'Escudo do Capitão América' }
      ]
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(serviceProducts, 'getProducts').resolves({ type: null, message: mock })
    const date = await getAllproducts(req,res)
    expect(res.json).to.have.been.calledWith(mock);
  })
  afterEach(function () {
    sinon.restore();
  });
})