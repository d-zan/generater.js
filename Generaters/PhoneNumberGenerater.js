const createPhoneByData = require("../tools/createPhoneNumber");
class GeneraterError extends Error {
  get name() {
    return "GeneraterError";
  }
}
/**
 Generate Phone number for any countries.
* @param {import("../types/Generater").CountriesSupport} country - The countries supported
* @return {string}
*/
function phoneNumberGenerater(country) {
  
  if(!country) throw new GeneraterError("[PhoneNumberGenerater]: country is required");
  if (typeof country !== "string") throw new GeneraterError("[PhoneNumberGenerater]: country must be a string");
  return createPhoneByData(country);
}

module.exports = phoneNumberGenerater;
