const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = "" + n;
  let maximumNum = -10000000000;
  for (let i = 0; i < str.length; i++) {
    let temp = str.slice(0, i) + str.slice(i + 1)
    maximumNum = Math.max(parseInt(temp), maximumNum)
  }
  return maximumNum;
}

module.exports = {
  deleteDigit
};
