//gen
const generateKey = require('./Generaters/KeyGenerater');
const generatePassword = require('./Generaters/PasswordGenerater');
const generatePhoneNumber = require('./Generaters/PhoneNumberGenerater');
const generateEmail = require('./Generaters/e-mailGenerater');
const generateDomain = require('./Generaters/domainsGenerater');
const generateID = require('./Generaters/IDGenerater');
const { generateOTP, verifyOTP } = require('./Generaters/OTPGenerater');
const mastercard = require('./Generaters/Credit Card/mastercardGenerater');
const vise = require('./Generaters/Credit Card/viseGenerater');
///random
const randomColor = require('./Random/RandomColor');
const randomNumber = require('./Random/randomNumber');

module.exports = {
    generateKey,
    generatePassword,
    generatePhoneNumber,
    generateEmail,
    generateDomain,
    generateID,
    randomColor,
    randomNumber,
    generateOTP,
    verifyOTP,
    mastercard,
    vise
};