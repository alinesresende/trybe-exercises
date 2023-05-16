const app = require('../src/app');
const chai = require('chai');
const chaiHttp = require('chai-http');

const { expect } = chai;

chai.use(chaiHttp);

describe('Usando o método GET em /chocolates', function () {
  it('Retorna a lista completa de chocolates!', async function () {
      const response = await chai
          .request(app)
          .get('/chocolates/total');

        expect(response.status).to.equal(200);
        expect(response.body).to.deep.equal({ totalChocolates: 4 })
  });
});
