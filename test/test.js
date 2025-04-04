const argsGenerater = require("../Generaters/argsGenerater");
const generateKey = require("../Generaters/KeyGenerater");
const mathGenerater = require("../Generaters/mathGenerater");
const { generateOTP, verifyOTP } = require("../Generaters/OTPGenerater");
const {
  calmHEX,
  calmRGB,
  blueHEX,
  blueRGB,
  darkHEX,
  darkRGB,
  greenHEX,
  greenRGB,
  randomHEX,
  randomRGB,
  redHEX,
  redRGB,
  whiteHEX,
  whiteRGB,
} = require("../types/colors");
/*
console.log(`
Calm: [ Hex:${calmHEX.length} , RGB: ${calmRGB.length} ];
Blue: [ Hex:${blueHEX.length} , RGB: ${blueRGB.length} ];
Dark: [ Hex:${darkHEX.length} , RGB: ${darkRGB.length} ];
Green: [ Hex:${greenHEX.length} , RGB: ${greenRGB.length} ];
Random: [ Hex:${randomHEX.length} , RGB: ${randomRGB.length} ];
Red: [ Hex:${redHEX.length} , RGB: ${redRGB.length} ];
White: [ Hex:${whiteHEX.length} , RGB: ${whiteRGB.length} ];
`);*/
// Generate OTP
const otpResult = generateOTP({
    length: 6,
    includeLetters: false,
    includeSpecialChars: false,
    expirationTime: 5 // 5 minutes
  });
  console.log(otpResult.otp);
  /*
  // Verify OTP
  const verificationResult = verifyOTP(otpResult, otpResult.otp);
  console.log(verificationResult.valid);
  
*/
const crypto = require("crypto");

  const msal = mathGenerater("LOW",'*');
  console.log(msal.string + ' = ' + '??' );
  
const randomByte = crypto.randomBytes(4);
 console.log(randomByte.readUInt32BE(0)%1000000 );
