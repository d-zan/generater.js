const crypto = require("crypto");
class GeneraterError extends Error {
  get name() {
    return "GeneraterError";
  }
}
/**
 * Generate powerful password .
 * @param {number} length - How many word you want?
 * @param {import('../types/Generater').PasswordPower} power - The password power.
 * @returns {string} password
 */
function passwordGenerater(length,power) {
  if (!length) throw new GeneraterError("[PasswordGenerater]: length is reqiure");
  if (!power) throw new GeneraterError("[PasswordGenerater]: power is reqiure");
  if (power ==='LOW') {
   let characters = "abcdefghijklmnopqrstuvwxyz0123456789";

    let password = "";
    for (let i = 0; i < length; i++) {
      const index = crypto.randomInt(0, characters.length);
      password += characters.charAt(index);
    }
    return password;
  } else if (power === 'MEDIUM') {
    let characters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    let password = "";
    for (let i = 0; i < length; i++) {
      const index = crypto.randomInt(0, characters.length);
      password += characters.charAt(index);
    }
    return password;
  } else if (power === 'HIGH') {
    let characters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=,.<>?";

    let password = "";
    for (let i = 0; i < length; i++) {
      const index = crypto.randomInt(0, characters.length);
      password += characters.charAt(index);
    }
    return password;
  }
};

module.exports = passwordGenerater;
