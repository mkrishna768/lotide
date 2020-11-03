const assert = require('chai').assert;
const eqArrays = require('../eqArrays');
describe("#countArrays", () => {
  it("returns correctly for all tests", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2"]), false);

    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true)

    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false)
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false)

    assert.strictEqual(eqArrays([], []), true);
    assert.strictEqual(eqArrays([[2]], [[2]]), true);
  });
});
