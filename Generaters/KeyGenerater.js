const crypto = require("crypto");
class GeneraterError extends Error {
  get name() {
    return "GeneraterError";
  }
}
/**

 * Generate Custom key
 * @param {import("../types/Generater").GeneraterKeyOptions} [options] - Create with some options
 * @param {number} length 
 * @return {string} Key
 * @example
  keyGenerater(12,//7d74b1e79f1e
  {
bigWords:true , //7D74B1E79F1E 12
smallWords:true, //7d74b1e79f1e 12
removeNumbers:true, //dbefe 5
split:{
 splitLength:4,
  inSpace:'-'
}, //dbef-e 6
startWith: {
  text:"GAZA_"
} // GAZA_dbef-e 11
  }); 
 
 */
function keyGenerater(length,options) {
    if (!length) throw new GeneraterError("[KEY_LENGTH]: length is required");
    const x = crypto.randomBytes(length/2);
    let key = x.toString("hex");
if (options) {

  if (options.bigWords){ key = key.toUpperCase();}
  
  if (options.smallWords) {key = key.toLowerCase();}
  
  if (options.removeNumbers) {key = key.replace(/\d/g, "");}
  
  if (options.split) {
    const splitKey = [];
    for (let i = 0; i < key.length; i += options.split.splitLength) {
      splitKey.push(key.substring(i, i + options.split.splitLength));
    }
    if (options.split.inSpace.length < 1) throw new GeneraterError("[KeyGenerater]: Split space is required");

    key = splitKey.join(options.split.inSpace);
  }
  if (options.startWith) {
    if (options.startWith.text.length < 1) throw new GeneraterError("[KeyGenerater]: StartWith text is required");
    key = options.startWith.text + key;
  }
}
  return key;
}

module.exports = keyGenerater;