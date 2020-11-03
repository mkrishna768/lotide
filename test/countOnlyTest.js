const assert = require('chai').assert;
const countOnly = require('../countOnly');
describe("#countOnly", () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
  it("returns correct count 1", () => {
    assert.strictEqual(result["Jason"], 1);
  });

  it("returns correct count if not present", () => {
    assert.strictEqual(result["Karima"], undefined);
  });

  it("returns correct count 3", () => {
    assert.strictEqual(result["Fang"], 2);
  });

  it("returns correct count if false", () => {
    assert.strictEqual(result["Agouhanna"], undefined);
  });
});
