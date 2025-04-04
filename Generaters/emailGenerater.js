const { randomInt } = require("crypto");

class GeneraterError extends Error {
  get name() {
    return "GeneraterError";
  }
}

/**
 * Generate powerful example,try-use email.
 * @param {import("../types/Generater").EmailOptions} options 
 * @returns
 * @example
emailGenerater({
  prefix: "test",
  domains: "@gmail.com", //test@gmail.com
  addNumber: true,
  numberRange: {
    min: 1,
    max: 223,
  }, //test123@gmail.com
  randomizePrefix: true,
  prefixOptions: ["hi", "ge"], // hi123@gmail.com / ge123@gmail.com
});
 */
function emailGenerater(options) {
  if (!options) throw new GeneraterError()
  const {
    prefix,
    domains,
    addNumber,
    randomizePrefix,
    prefixOptions,
    numberRange,
  } = options;
  let emailPrefix = prefix;
  if (!prefix) throw new GeneraterError('[EmailGenerater]: Email prefix is not defined');
  if (prefix.length < 1) throw new GeneraterError('[EmailGenerater]: Email prefix is empty');
  if (!domains) throw new GeneraterError('[EmailGenerater]: Email domains is not defined');
  if (domains.length < 1) throw new GeneraterError('[EmailGenerater]: Email domains is empty');

  if (randomizePrefix) {
    if (!prefixOptions) throw new GeneraterError('[EmailGenerater]: Prefix options is not defined');
    if (prefixOptions.length < 1) throw new GeneraterError('[EmailGenerater]: Prefix options is empty');
    emailPrefix = prefixOptions[Math.floor(Math.random() * prefixOptions.length)];
  }

  if (addNumber) {
    if (!numberRange) throw new GeneraterError('[EmailGenerater]: Number range is not defined');
    if (numberRange.min < 0) throw new GeneraterError('[EmailGenerater]: Number range min is less than 0');
    if (numberRange.max < 0) throw new GeneraterError('[EmailGenerater]: Number range max is less than 0');
    if (numberRange.min > numberRange.max) throw new GeneraterError('[EmailGenerater]: Number range min is greater than max');
    const randomNumber = randomInt(numberRange.min, numberRange.max);
    emailPrefix += randomNumber;
  }


  

  const email = `${emailPrefix}${domains}`;
  return email;
}

module.exports = emailGenerater;
