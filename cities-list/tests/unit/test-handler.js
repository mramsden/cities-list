const app = require('../../app');
const chai = require('chai');
const expect = chai.expect;
let event, context;

describe('handler', () => {
    it('returns a successful response', async () => {
        const result = await app.lambdaHandler(event, context);

        expect(result).to.be.an('object');
        expect(result.statusCode).to.equal(200);
        expect(result.body).to.be.an('string');

        const response = JSON.parse(result.body);

        expect(response).to.be.an('array');
    });
});
