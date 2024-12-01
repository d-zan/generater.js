# Generater.js

A powerful Node.js library for generating various types of random data, including keys, passwords, phone numbers, emails, and more.

## Installation

```bash
npm install generater.js
```
## Features
- Generate Random Keys
- Generate Strong Passwords
- Generate Phone Numbers for Multiple Countries
- Create Random Colors
- Generate Email Addresses
- Create Domain Names
- Generate Credit Card Details (Visa, Mastercard)
- One-Time Password (OTP) Generation
- And More!

## Usage
Random Key Generation
```js
const { generateKey } = require('generater.js');

// Generate a random key with custom options
const key = generateKey(32, {
  bigWords: true,
  smallWords: false,
  removeNumbers: false,
  split: {
    split: true,
    splitLength: 4,
    inSpace: '-'
  },
  startWith: {
    startWith: true,
    text: 'Blacklist_'
  }
});
console.log(key); // Outputs a random key
```
Password Generation
```js
const { generatePassword } = require('generater.js');

// Generate passwords with different power levels
const lowPowerPassword = generatePassword(12, 'LOW');
const mediumPowerPassword = generatePassword(16, 'MEDIUM');
const highPowerPassword = generatePassword(20, 'HIGH');
```
Phone Number Generation
```js
const { generatePhoneNumber } = require('generater.js');

// Generate phone numbers for different countries
const egyptPhoneNumber = generatePhoneNumber('EGYPT');
const usaPhoneNumber = generatePhoneNumber('USA');
const ukPhoneNumber = generatePhoneNumber('UK');
```
Random Color Generation
```js
const { generateColor } = require('generater.js');

// Generate random colors HEX or RGB
const blueHexColor = generateColor('BLUE', 'HEX'); ///#color_hex
const calmRGBColor = generateColor('CALM', 'RGB'); ///rgb(r,g,b)
```



OTP (One-Time Password) Generation

```js
const { generateOTP, verifyOTP } = require('generater.js');

// Generate OTP
const otpResult = generateOTP({
  length: 6,
  includeLetters: false,
  includeSpecialChars: false,
  expirationTime: 5 // 5 minutes
});
console.log(otpResult.otp);

// Verify OTP
const verificationResult = verifyOTP(otpResult, userInputOTP);
console.log(verificationResult.valid);
```

## Supported Features
### Countries for Phone Numbers
- Egypt
- Saudi Arabia
- USA
- UK
- UAE
- Germany
- France
- India
- Australia
- Canada
### Color Types
- CALM
- RED
- DARK
- WHITE
- RANDOM
- GREEN
- BLUE
###  Password Power Levels
- Low
- Medium
- High

## Developer
**Y.Karm (DZAN)**
- [GitHub](https://github.com/d-zan)
- [npm](https://npmjs.com/~dzan)
- [Twitter / X](https://x.com/_dz4n)
- [Tiktok](https://tiktok.com/@i.dzan)
- [Discord](https://discord.com/users/776359293276258315)