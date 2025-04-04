const crypto = require("crypto");
/**
 * Generate a fake MasterCard cradit card data.
 */
class Mastercard {
  
    card() {
      const one =
        crypto.randomInt(9).toString(9) + crypto.randomInt(9).toString(9);

      const two =
        crypto.randomInt(9).toString(9) +
        crypto.randomInt(9).toString(9) +
        crypto.randomInt(9).toString(9) +
        crypto.randomInt(9).toString(9);

      const three =
        crypto.randomInt(9).toString(9) +
        crypto.randomInt(9).toString(9) +
        crypto.randomInt(9).toString(9) +
        crypto.randomInt(9).toString(9);

      const four =
        crypto.randomInt(9).toString(9) +
        crypto.randomInt(9).toString(9) +
        crypto.randomInt(9).toString(9) +
        crypto.randomInt(9).toString(9);

      const mastercard = `50${one} ${two} ${three} ${four}`;

      return mastercard;
    };
    cvc() {
      const CVC =
        crypto.randomInt(9).toString(9) +
        crypto.randomInt(9).toString(9) +
        crypto.randomInt(9).toString(9);
      return CVC;
    };
    value() {
      const VALID_THRU =  "0" + crypto.randomInt(1, 9) + "/" + crypto.randomInt(25, 29);
      return VALID_THRU;
    }
  
}

module.exports = Mastercard;
