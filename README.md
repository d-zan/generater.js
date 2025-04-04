# Generater.js

A powerful Node.js library for generating various types of random data, including keys, passwords, phone numbers, emails, and more.

## Installation

```bash
npm install generater.js
```
## Features
- Generate powerful key
- Generate strong password
- Generate phone numbers for multiple countries
- Generate email addresses
- Generate credit card details (Visa, Mastercard)
- Generate custom One-Time-Password (OTP)
- Create random colors
- Create domain names
- And More!

# New 2.2.5
- Fix Errors , Bugs
- Edit `Vise and Mastercard is class`
- Add more color
- Add more country's phone number
-----
### `mathGenerater(power: "LOW" |"MEDIUM" | "HIGH" ,sign?: "-" |"+" | "*" | "/" ): Math`
- A sample function to generate a math question
```js
  const msal = mathGenerater("MEDIUM");
  console.log(msal.string + ' = ' + msal.number ); //'82 x 23' = 1886 (random[-+*/])
  const msal = mathGenerater("MEDIUM","-");
  console.log(msal.string + ' = ' + msal.number ); //'50 - 20' = 30 (only[-])
```
### `argsGenerater(content: string): string[]`
- Just make a `string` => `string[]`.
```js
 const args = argsGenerater("Hello world");
 console.log(args); //: [ "Hello", "world" ]
 console.log(args[0]) //: "Hello"
 console.log(args[1]) //: "world"
```
### `randomOfArrya(array: any[]): any`
```js
let a = [
  {name1:"Yousef",name2:"Karm"},
  {name1:"Ali",name2:"Naser"},
  {name1:"Nawal",name2:"N"},
];
const data = randomOfArray(a);
console.log(data.name1 +' '+ data.name2 + data); // Yousef Naser / Object

a = [1,2,3,4,5,6,7,8,9,10]; 
const data = randomOfArray(a);
console.log(data); // 10 / number

a = ["Yousef","Ali","Ahmed","Nawal"];
const data = randomOfArray(a);
console.log(data); // Nawal / string
```
```js
const gen = reqiure("generater.js"); \\ ;) 
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
- Japan
- Brazil 
- South Africa
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