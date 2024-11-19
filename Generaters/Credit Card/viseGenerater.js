const crypto = require("crypto");
function vise() {
     return {
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

      const vise = `47${one} ${two} ${three} ${four}`;

      return vise;
    },
    cvc() {
      const CVC =
        crypto.randomInt(9).toString(9) +
        crypto.randomInt(9).toString(9) +
        crypto.randomInt(9).toString(9);
      return CVC;
    },
    value() {
      const VALID_THRU =
        "0" + crypto.randomInt(1, 9) + "/" + crypto.randomInt(24, 29);
      return VALID_THRU;
    },
  };
}
module.exports = vise;
