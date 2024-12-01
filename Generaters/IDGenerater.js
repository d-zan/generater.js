const transliterate = require('transliteration');

/**
 * Generate Custom ID
 * @param {string} firstName - like Yousef, يوسف
 * @param {string} lastName - like Karm , كرم
 * @returns {string} Generated unique ID
 */
function generateID(firstName, lastName) {
    
    const translatedFirstName = transliterate.transliterate(firstName);
    const translatedLastName = transliterate.transliterate(lastName);
  
    const firstNameInitial = translatedFirstName.charAt(0).toUpperCase();
    const lastNameInitial = translatedLastName.charAt(0).toUpperCase();

    const randomNum = Math.floor(1000 + Math.random() * 9000);

    return `${firstNameInitial}${lastNameInitial}${randomNum}`;
}
module.exports = generateID;