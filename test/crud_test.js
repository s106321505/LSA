
const assert = require('chai').assert;

describe('App', function () {
    
   it('should return -1 when the value is not present in Array.', function () {
    // let result = sayHello()
    assert.equal(-1, [1,2,3].indexOf(4));
  });

});
