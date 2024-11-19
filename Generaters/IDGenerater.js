const transliterate = require('transliteration');

/**
 * G- Custom ID
 * @param {string} firstName - like Yousef, يوسف
 * @param {string} lastName - like Karm , كرم
 * @returns {string} Generated unique ID
 */
function generateID(firstName, lastName) {
    // ترجمة الاسم من العربية للإنجليزية
    const translatedFirstName = transliterate.transliterate(firstName);
    const translatedLastName = transliterate.transliterate(lastName);

    // استخراج الحرف الأول من الاسم المترجم
    const firstNameInitial = translatedFirstName.charAt(0).toUpperCase();
    const lastNameInitial = translatedLastName.charAt(0).toUpperCase();

    // توليد رقم عشوائي
    const randomNum = Math.floor(1000 + Math.random() * 9000);

    // إنشاء المعرف
    return `${firstNameInitial}${lastNameInitial}${randomNum}`;
}
module.exports = generateID;