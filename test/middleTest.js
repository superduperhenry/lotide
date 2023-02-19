// const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");
const assert = require("chai").assert;

describe("#middleTest", () => {
  it("returns [] for arrays with 1 elements", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns [] for arrays with 2 elements", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("returns middle element for arrays with odd # of elements, returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns middle element for arrays with even # of elements, returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});
