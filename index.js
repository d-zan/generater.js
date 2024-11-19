// Import Generaters
const generateKey = require('./Generaters/KeyGenerater');
const generatePassword = require('./Generaters/PasswordGenerater');
const generatePhoneNumber = require('./Generaters/PhoneNumberGenerater');
const generateEmail = require('./Generaters/e-mailGenerater');
const generateDomain = require('./Generaters/domainsGenerater');
const generateID = require('./Generaters/IDGenerater');
const randomColor = require('./Random/RandomColor');
const randomNumber = require('./Random/randomNumber');
const { generateOTP, verifyOTP } = require('./Generaters/OTPGenerater');

// Credit Card Generators
const mastercard = require('./Generaters/Credit Card/mastercardGenerater');
const vise = require('./Generaters/Credit Card/viseGenerater');

// Export all modules
module.exports = {
    // Key Generators
    generateKey,
    
    // Password Generators
    generatePassword,
    
    // Phone Number Generators
    generatePhoneNumber,
    
    // Email Generators
    generateEmail,
    
    // Domain Generators
    generateDomain,
    
    // ID Generators
    generateID,
    
    // Random Generators
    randomColor,
    randomNumber,
    
    // OTP Generators
    generateOTP,
    verifyOTP,
    
    // Credit Card Generators
    mastercard,
    vise
};