const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let dict1 = {}
  let dict2 = {}
  let count = 0
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] in dict1) {
      dict1[s1[i]] += 1
    }
    else{
      dict1[s1[i]] = 1
    }
  }
  for (let i = 0; i < s2.length; i++) {
    if (s2[i] in dict2) {
      dict2[s2[i]] += 1
    }
    else{
      dict2[s2[i]] = 1
    }
  }

  for (const char in dict1) {
    if (char in dict2) {
      count += Math.min(dict2[char], dict1[char])
    }
  }
  return count
}

module.exports = {
  getCommonCharacterCount
};
