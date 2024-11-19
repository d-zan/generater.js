const { randomInt } = require("crypto");
{
  (prefix = "user"),
    (domains = ["gmail.com", "yahoo.com", "hotmail.com"]),
    (addNumber = false),
    (randomizePrefix = false),
    (prefixOptions = []),
    (numberRange = { min: 1, max: 99 });
}
/**
 *
 * @param {import("../types/Generater").EmailOptions} options
 * @returns
 */
const generateEmail = (options) => {
  const {
    prefix,
    domains,
    addNumber,
    randomizePrefix,
    prefixOptions,
    numberRange,
  } = options;
  let emailPrefix = prefix;
  // Randomize prefix if required
  if (randomizePrefix && prefixOptions.length > 0) {
    emailPrefix = prefixOptions[randomInt(0, prefixOptions.length - 1)];
  }

  // Add a random number if specified
  if (addNumber) {
    const randomNumber = randomInt(numberRange.min, numberRange.max);
    emailPrefix += randomNumber;
  }

  // Randomly select a domain from the provided list
  const emailDomain = domains[randomInt(0, domains.length - 1)];

  const email = `${emailPrefix}@${emailDomain}`;
  return email;
};
module.exports = generateEmail;
