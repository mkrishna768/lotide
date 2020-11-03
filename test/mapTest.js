const map = require('../map');
const assert = require('chai').assert;

describe("#map", () => {
  it("returns correctly for all tests", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const results1 = map(words, word => word[0]);
    assert.deepEqual(results1, ["g", "c", "t", "m", "t"]);
    assert.deepEqual(map([1, 2, 3], x => x * 2), [2, 4, 6]);
    assert.deepEqual(map([], x => x * 3), []);
  });
});

