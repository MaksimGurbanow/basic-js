const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(str, key) {
    return this.code(str, key, "encrypt");
  }

  decrypt(str, key) {
    return this.code(str, key, "decrypt");
  }

  code(str, key, type) {
    if (!str || !key || !type) throw Error("Incorrect arguments!");
    str = str.toUpperCase();
    key = key.toUpperCase();
    const arr = [];
    for (let i = 0, j = 0; i < str.length; i++) {
      if (str[i].match(/[A-Z]/)) {
        if (type === "decrypt") {
          arr.push(String.
            fromCharCode((str[i].charCodeAt(0) - "A".charCodeAt(0) +
             (26 - (key[j % key.length].charCodeAt(0) - "A".charCodeAt(0)))) %
             26 + "A".charCodeAt(0)));
        } else {
          arr.push(String.
            fromCharCode((str[i].charCodeAt(0) - "A".charCodeAt(0) +
           (key[j % key.length].charCodeAt(0) - "A".charCodeAt(0))) %
           26 + "A".charCodeAt(0)));
        }
        j++
      } else {
        arr.push(str[i]);
      }
    }
    return this.isDirect ? arr.join("") : arr.reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine
};
