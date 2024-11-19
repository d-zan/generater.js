const crypto = require('crypto');

/**
 * Generate OTP
 * @param {import('../types/Generater').OTPOptions} options - OTP generation options
 * @returns {import('../types/Generater').OTPResult} 
 */
function generateOTP(options) {
    // Default configuration with error messages
    const config = {
        length: options.length || 6,
        includeLetters: options.includeLetters || false,
        includeSpecialChars: options.includeSpecialChars || false,
        expirationTime: options.expirationTime || 5,
        errorMessages: {
            invalidLength: options.errorMessages?.invalidLength || 'Invalid OTP length',
            expiredOTP: options.errorMessages?.expiredOTP || 'OTP has expired',
            invalidOTP: options.errorMessages?.invalidOTP || 'Invalid OTP'
        }
    };

    // Character sets
    const numbers = '0123456789';
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    // Determine allowed characters
    let characters = numbers;
    if (config.includeLetters) characters += letters;
    if (config.includeSpecialChars) characters += specialChars;

    // Generate OTP using crypto for security
    let otp = '';
    for (let i = 0; i < config.length; i++) {
        const randomIndex = crypto.randomInt(0, characters.length);
        otp += characters[randomIndex];
    }

    // Create unique OTP identifier
    const otpId = crypto.randomBytes(16).toString('hex');

    // Calculate expiration time
    const createdAt = new Date();
    const expiresAt = new Date(createdAt.getTime() + config.expirationTime * 60000);

    return {
        otp: otp,
        otpId: otpId,
        createdAt: createdAt,
        expiresAt: expiresAt,
        config: config,
        verify: function(inputOTP) {
            // Validate OTP length
            if (inputOTP.length !== this.config.length) {
                return {
                    isValid: false,
                    message: this.config.errorMessages.invalidLength
                };
            }

            // Check for expiration
            if (new Date() > this.expiresAt) {
                return {
                    isValid: false,
                    message: this.config.errorMessages.expiredOTP
                };
            }

            // Verify OTP
            if (this.otp !== inputOTP) {
                return {
                    isValid: false,
                    message: this.config.errorMessages.invalidOTP
                };
            }

            return {
                isValid: true,
                message: 'OTP verified successfully'
            };
        },
        getRemainingTime: function() {
            // Calculate remaining time
            const now = new Date();
            const remainingTime = this.expiresAt.getTime() - now.getTime();
            return Math.max(0, Math.floor(remainingTime / 1000)); // in seconds
        }
    };
}

/**
 * Verify OTP
 * @param {import('../types/Generater').OTPResult} otpObject 
 * @param {string} inputOTP 
 * @returns {import('../types/Generater').OTPVerificationResult}
 */
function verifyOTP(otpObject, inputOTP) {
    if (!otpObject || !otpObject.verify) {
        return {
            valid: false,
            message: 'Invalid OTP',
            remainingTime: 0
        };
    }

    const verificationResult = otpObject.verify(inputOTP);
    
    return {
        valid: verificationResult.isValid,
        message: verificationResult.message,
        remainingTime: otpObject.getRemainingTime()
    };
}

// Export functions
module.exports = {
    generateOTP,
    verifyOTP
};