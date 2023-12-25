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

  encrypt(message, key) {
    this.validateInput(message, key);

    const encryptedMessage = this.processMessage(message, key, true);
    return this.isDirect ? encryptedMessage.join('') : encryptedMessage.reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    this.validateInput(encryptedMessage, key);

    const decryptedMessage = this.processMessage(encryptedMessage, key, false);
    return this.isDirect ? decryptedMessage.join('') : decryptedMessage.reverse().join('');
  }

  validateInput(message, key) {
    if (typeof message !== 'string' || typeof key !== 'string') {
      throw new Error('Both message and key must be strings');
    }
  }

  processMessage(message, key, isEncrypt) {
    const result = [];
    const keyRepeating = key.repeat(Math.ceil(message.length / key.length)).toUpperCase();

    for (let i = 0, j = 0; i < message.length; i++) {
      if (/[A-Z]/.test(message[i])) {
        const messageCharCode = message[i].toUpperCase().charCodeAt(0);
        const keyCharCode = keyRepeating[j].charCodeAt(0);
        const shift = isEncrypt ? keyCharCode - 65 : 65 - keyCharCode;

        const encryptedCharCode = ((messageCharCode + shift) % 26) + 65;
        result.push(String.fromCharCode(encryptedCharCode));

        j++;
      } else {
        result.push(message[i]);
      }
    }

    return result;
  }
}

module.exports = {
  VigenereCipheringMachine
};
