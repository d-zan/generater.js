const crypto = require("crypto");
const phoneData = require("../data/phoneData");
/**
@return {string}
*/
function createPhoneByData(country) {
  const data = phoneData[country];
  const started = data.started; // اول
  const telecome = data.telecom; //شركات كلها
  const randomTelecome = telecome[Math.floor(Math.random() * telecome.length)];

  const randomByte = crypto.randomBytes(4);
  const randomNumber = randomByte.readUInt32BE(0);
  const phone = randomNumber % data.number;
  const generated = `${started}${randomTelecome}${phone}`;
  return generated;
}
module.exports = createPhoneByData;