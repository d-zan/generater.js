const crypto = require('crypto');

/**
 * Generate custom OTP,  
 * @param {import('../types/Generater').OTPOptions} options - OTP generation options
 * @returns {import('../types/Generater').OTP} 
 */
function otpGenerater(options) {

    const config = {
        length: options.length || 6,
        includeLetters: options.includeLetters || false,
        includeSpecialChars: options.includeSpecialChars || false
    };

    
    const numbers = '0123456789';
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';


    let characters = numbers;
    if (config.includeLetters) characters += letters;
    if (config.includeSpecialChars) characters += specialChars;


    let otp = '';
    for (let i = 0; i < config.length; i++) {
        const randomIndex = crypto.randomInt(0, characters.length);
        otp += characters[randomIndex];
    }


    const otpId = crypto.randomBytes(16).toString('hex');

    return {
        otp: otp,
        otpId: otpId
    };
}


// Export functions
module.exports = otpGenerater
