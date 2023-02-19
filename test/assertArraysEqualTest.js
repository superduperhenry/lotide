const assertArraysEqual = require("../assertArraysEqual");

//TEST
assertArraysEqual([1, 2, 3], [1, 2, 3]); // expects pass
assertArraysEqual([1, 2, 3], [4, 5, 6]); // expects fail
assertArraysEqual([1, 2, 3], [1]); // expects fail
assertArraysEqual([1, 1, 1, 1, 1], [1, 1, 1, 1, 1]); // expects pass
