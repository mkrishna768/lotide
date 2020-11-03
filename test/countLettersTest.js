const assert = require('chai').assert;
const countLetters = require('../countLetters');
describe("#countLetters", () => {
  it("returns correct count 1", () => {
    const test = countLetters("a bb ccc g");
    assert.strictEqual(test["a"], 1);
  });

  it("returns correct count 2", () => {
      const test = countLetters("a bb ccc g");
      assert.strictEqual(test["b"], 2);
  });
  
  it("returns correct count 3", () => {
    const test = countLetters("a bb ccc g");
    assert.strictEqual(test["c"], 3);
  });

  it("returns correct count 4", () => {
    const test = countLetters("a bb ccc g");
    assert.strictEqual(test["g"], 1);
  });

  it("doesnt return letter if not present", () => {
    const test = countLetters("a bb ccc g");
    assert.strictEqual(test["d"], undefined);
  });

  it("doesnt count spaces", () => {
    const test = countLetters("a bb ccc g");
    assert.strictEqual(test[" "], undefined);
  });

});
