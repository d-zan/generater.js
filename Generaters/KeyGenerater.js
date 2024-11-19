const crypto = require("crypto");
/**
 * @description G- Custom key
 * @param {import("../types/Generater").GeneraterKeyOptions} options - Create with some options
 * @param {number} length 
 * @return {string} Key
 */
function generateKey(length,options) {
    const x = crypto.randomBytes(length);
  let key = x.toString("hex");

  if (options.bigWords) key = key.toUpperCase();
  if (options.smallWords) key = key.toLowerCase();
  if (options.removeNumbers) key = key.replace(/\d/g, "");
  if (options.split.split) {
    const splitKey = [];
    for (let i = 0; i < key.length; i += options.split.splitLength) {
      splitKey.push(key.substring(i, i + options.split.splitLength));
    }
    key = splitKey.join(options.split.inSpace);
  }
  if (options.startWith.startWith) {
    key = startWith.text + key;
  }
  return key;
}

module.exports = generateKey;