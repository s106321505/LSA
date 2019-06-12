
var request = require('request');
const assert = require('chai').assert;

describe('CRUD Test', function () {
  it('Get Uers.', function () {
    request(`http://localhost:5408/users/AAA`, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var _User = JSON.parse(body)['Name'];   
        assert.equal(_User, 'AAA');
      }
    })
  });
});

