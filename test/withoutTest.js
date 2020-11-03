const without = require('../without');
const assert = require('chai').assert;

describe("#takeUntil", () => {
  it("returns correctly for all tests", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
    assert.deepEqual(without([1, 2, 3], []), [1, 2, 3]);
    assert.deepEqual(without([], [1]), []);
    let test = [1, 2, 3];
    without(test, [1]);
    assert.deepEqual(test, [1, 2, 3]);
  });
});


