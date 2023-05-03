const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../src/models/conecctions');
const { getAllproducts } = require('../../../src/models');

describe('productModel', function () {
  it('Test FindAll', async () => {
    const mock = [
      {
        "id": 1,
        "name": "Martelo de Thor"
      },
      {
        "id": 2,
        "name": "Traje de encolhimento"
      },
      {
        "id": 3,
        "name": "Escudo do Capitão América"
      }
    ]
    sinon.stub(connection, 'execute').resolves([mock])
    const date = await getAllproducts()
    expect(date).to.be.deep.equal(mock)
  })
  afterEach(function () {
    sinon.restore();
  });
})