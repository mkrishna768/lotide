const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it("returns length of 2 for tail([1, 2, 3])", () => {
    assert.strictEqual(tail([1, 2, 3]).length, 2);
  });
  it("returns correct value", () => {
    assert.deepEqual(tail(["a", "b", "c"]), ["b", "c"]);
  });
  it("Original array not modded", () => {
    const testArr = [1, 2, 3];
    tail(testArr);
    assert.deepEqual(testArr, [1, 2, 3]);
  });
  it("returns empty array for single item array", () => {
    assert.deepEqual(tail([1]), []);
  });
  it("returns empty array for empty array", () => {
    assert.deepEqual(tail([]), []);
  });
});
