const createPhoneByData = require("../tools/createPhoneNumber");

/**
 Generate Phone number for any countries.
* @param {import("../types/Generater").CountriesSupport} country - The countries supported
* @return {string}
*/
function generatePhoneNumber(country) {
  return createPhoneByData(country);
}

module.exports = generatePhoneNumber;
