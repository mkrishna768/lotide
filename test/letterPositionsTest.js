const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe("#letterPositions", () => {
  it("returns correctly for all tests", () => {
    const test = "hello";
    const result = letterPositions(test);
    assert.deepEqual(result["h"], [0]);
    assert.deepEqual(result["e"], [1]);
    assert.deepEqual(result["l"], [2, 3]);
    assert.deepEqual(result["o"], [4]);
  });
});
