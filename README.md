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

# New 2.1.2
- Fix `keyGenerater`
- Edit `Vise and Mastercard is class`
- Add more color
-----
### `mathGenerater(power: "LOW" |"MEDIUM" | "HIGH")`
- A sample function to generate a math question
```js
  const msal = mathGenerater("MEDIUM");
  console.log(msal.string + ' = ' + msal.number ); //'82 x 23' = 1886
```
### `argsGenerater(content: string): string[]`
- Just make a `string` => `string[]`.
```js
 const args = argsGenerater("Hello world");
 console.log(args); //: [ "Hello", "world" ]
 console.log(args[0]) //: "Hello"
 console.log(args[1]) //: "world"
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