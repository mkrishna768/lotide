const middle = require('../middle');
const assert = require('chai').assert;
describe("#middle", () => {
  it("returns empty for single item array", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns empty for 2 item array", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("returns 1 item for odd length array", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns 1 item for different odd length array", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("returns 2 items for even length array", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("returns 2 items for even length array", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});

// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);