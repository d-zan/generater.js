const { msalFunc } = require("../tools/math");
class GeneraterError extends Error {
  get name() {
    return "GeneraterError";
  }
}
/**
 * Generate a math question string & number
 * @param {import("../types/Generater").MathPower} power - A power of question
 * @param {import("../types/Generater").MathSign} [math] - Choice the question sign
 * @returns {import("../types/Generater").Math}
 */
function mathGenerater(power,math) {
  if(!power) throw new GeneraterError("[MathGenerater]: Math power is require");
  if (math) {
    if (power === "LOW") {
      return msalFunc(math, 1, 9);
    } else if (power === "MEDIUM") {
      return msalFunc(math, 10, 99);
    } else if (power === "HIGH") {
      return msalFunc(math, 100, 999);
    }
  } else {
    if (power === "LOW") {
      return msalFunc("all", 1, 9);
    } else if (power === "MEDIUM") {
      return msalFunc("all", 10, 99);
    } else if (power === "HIGH") {
      return msalFunc("all", 100, 999);
    }
  }
}
module.exports = mathGenerater;