const crypto = require("crypto");
const randomNumber = (min=0, max=10) => {
    const numbers = crypto.randomBytes(4);
    const buffer = Buffer.from(numbers);
    const number = buffer.readUInt32BE(0);
    const theNumber = Math.floor(number / 0x100000000 * (max - min + 1) + min + 1);
    return theNumber;
};
module.exports = randomNumber;