const crypto = require("crypto");
/**
 * Random number from , to
 * @param {number} min - from
 * @param {number} max - to
 * @returns {number}
 */
function randomNumber(min, max){
    const numbers = crypto.randomBytes(4);
    const buffer = Buffer.from(numbers);
    const number = buffer.readUInt32BE(0);
    const theNumber = Math.floor(number / 0x100000000 * (max - min + 1) + min);
    return theNumber;
};
module.exports = randomNumber;