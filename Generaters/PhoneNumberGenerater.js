const crypto = require("crypto");
/**
 G- Phone number for any countries.
* @param {import("../types/Generater").CountriesSupport} country - The countries supported
* @return {string}
*/
function generatePhoneNumber(country) {
  if (country === 'EGYPT') {
      const started = "+20"; // اول
      const telecome = ["11", "12", "10", "15"]; //شركات كلها
      const randomTelecome = telecome[Math.floor(Math.random() * telecome.length)];

      const randomByte = crypto.randomBytes(4);
      const randomNumber = randomByte.readUInt32BE(0);
      const phone = randomNumber % 10000000;
      const generated = `${started}${randomTelecome}${phone}`;
      return generated;
  } else if (country === 'KSA') {
    const started = "+966"; 
    const telecome = ["50", "51", "52", "53", "54", "55", "56", "57", "58", "59"]; 
    const randomTelecome = telecome[Math.floor(Math.random() * telecome.length)];
  
    const randomByte = crypto.randomBytes(4);
    const randomNumber = randomByte.readUInt32BE(0);
    const phone = randomNumber % 10000000; 
    const generated = `${started}${randomTelecome}${phone.toString().padStart(7, '0')}`; 
    return generated;
  
  } else if (country === 'USA') {
    const started = "+1"; 
    const areaCodes = ["202", "212", "213", "310", "415", "617", "718", "305", "512", "720"]; 
    const randomAreaCode = areaCodes[Math.floor(Math.random() * areaCodes.length)];
  
    const randomByte = crypto.randomBytes(4);
    const randomNumber = randomByte.readUInt32BE(0);
    

    const centralOfficeCode = Math.floor(100 + Math.random() * 900);
    const lineNumber = randomNumber % 10000; 
  

    const formattedLineNumber = lineNumber.toString().padStart(4, '0');
  
    const generated = `${started} ${randomAreaCode}-${centralOfficeCode}-${formattedLineNumber}`;
    return generated;
  } else if (country === 'UK') {
    const started = "+44"; 
    const areaCodes = ["20", "121", "131", "141", "151", "161", "191", "207", "208", "300"]; 
    const randomAreaCode = areaCodes[Math.floor(Math.random() * areaCodes.length)];
  
    const randomByte = crypto.randomBytes(4);
    const randomNumber = randomByte.readUInt32BE(0);
    

    const lineNumber = randomNumber % 1000000000; 
  

    const formattedLineNumber = lineNumber.toString().padStart(8, '0');
  
    const generated = `${started} ${randomAreaCode} ${formattedLineNumber}`;
    return generated;
  } else if (country === 'UAE') {
    const started = "+971"; 
    const telecome = ["2", "3", "4", "5", "6", "7", "8", "9"]; 
    const randomTelecome = telecome[Math.floor(Math.random() * telecome.length)];

    const randomByte = crypto.randomBytes(4);
    const randomNumber = randomByte.readUInt32BE(0);
    const phone = randomNumber % 10000000; 
    const formattedPhone = phone.toString().padStart(7, '0'); 
    const generated = `${started}${randomTelecome}${formattedPhone}`;
    
    return generated;
  } else if (country === 'GERMANY') {
    const started = "+49";
    const telecome = ["30", "40", "69", "89", "151", "152", "160", "170", "171", "172"]; 
    const randomTelecome = telecome[Math.floor(Math.random() * telecome.length)];

    const randomByte = crypto.randomBytes(4);
    const randomNumber = randomByte.readUInt32BE(0);
    const phone = randomNumber % 1000000000; 
    const formattedPhone = phone.toString().padStart(8, '0'); 
    const generated = `${started}${randomTelecome}${formattedPhone}`;
    
    return generated;
  } else if (country === 'FRANCE') {
    const started = "+33";
    const telecome = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]; 
    const randomTelecome = telecome[Math.floor(Math.random() * telecome.length)];

    const randomByte = crypto.randomBytes(4);
    const randomNumber = randomByte.readUInt32BE(0);
    const phone = randomNumber % 1000000000; 
    const formattedPhone = phone.toString().padStart(8, '0'); 
    const generated = `${started}${randomTelecome}${formattedPhone}`;
    
    return generated;
  } else if (country === 'INDIA') {
    const started = "+91"; 
    const telecome = ["7", "8", "9"]; 
    const randomTelecome = telecome[Math.floor(Math.random() * telecome.length)];

    const randomByte = crypto.randomBytes(4);
    const randomNumber = randomByte.readUInt32BE(0);
    const phone = randomNumber % 1000000000; 
    const formattedPhone = phone.toString().padStart(9, '0'); 
    const generated = `${started}${randomTelecome}${formattedPhone}`;
    
    return generated;
  } else if (country === "AUSTRALIA") {
    const started = "+61"; 
    const telecome = ["2", "3", "4", "7", "8"];
    const randomTelecome = telecome[Math.floor(Math.random() * telecome.length)];

    const randomByte = crypto.randomBytes(4);
    const randomNumber = randomByte.readUInt32BE(0);
    const phone = randomNumber % 1000000000; 
    const formattedPhone = phone.toString().padStart(8, '0'); 
    const generated = `${started}${randomTelecome}${formattedPhone}`;
    
    return generated;
  } else if (country === "CANADA") {
    const started = "+1"; 
    const areaCodes = ["204", "226", "236", "249", "250", "289", "306", "343", "416", "418", "431", "437", "450", "506", "514", "519", "548", "579", "581", "604", "613", "639", "647", "672", "705", "709", "778", "780", "782", "807", "819", "873", "902", "905"]; 
    const randomAreaCode = areaCodes[Math.floor(Math.random() * areaCodes.length)];

    const randomByte = crypto.randomBytes(4);
    const randomNumber = randomByte.readUInt32BE(0);
    const phone = randomNumber % 10000000; 
    const formattedPhone = phone.toString().padStart(7, '0'); 
    const generated = `${started}${randomAreaCode}${formattedPhone}`;
    
    return generated;
  }
};

module.exports = generatePhoneNumber;
