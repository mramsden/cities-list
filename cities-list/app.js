const cities = require('all-the-cities');

const app = {};

app.lambdaHandler = async event => {
    const response = {
        statusCode: 200,
        body: JSON.stringify(cities),
    };
    return response;
};

module.exports = app;
