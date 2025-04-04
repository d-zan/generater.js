const { randomInt } = require("crypto");

const Msal = [
  { string: "22 x 1", number: 22 * 1 },
  { string: "22 x 2", number: 22 * 2 },
  { string: "22 + 1", number: 22 + 1 },
  { string: "33 - 33", number: 33 - 33 },
  { string: "2 x 1", number: 2 * 1 },
  { string: "8 ÷ 2", number: 8 / 2 },
  { string: "2 + 3", number: 2 + 3 },
  { string: "8 x 3", number: 8 * 3 },
  { string: "20 + 20", number: 20 + 20 },
  { string: "11 x 3", number: 11 * 3 },
  { string: "3 - 3", number: 3 - 3 },
  { string: "10 × 1", number: 10 * 1 },
  { string: "2 x 1", number: 2 * 1 },
];
/**
 * @typedef {'*'|'-'|'/'|'+'|'all'} Msal
 * @param {Msal} type
 * @param {number} max 
 * @param {number} min 
 */
function msalFunc(type,min,max) {
  if (!type) return;
  const first = randomInt(min, max);
  const second = randomInt(min, max);
  if (type === "*") {
    return {
      string: `${first} x ${second}`,
      number: first * second,
    };
  } else if (type === "+") {
    return {
      string: `${first} + ${second}`,
      number: first + second,
    };
  } else if (type === "-") {
    return {
      string: `${first} - ${second}`,
      number: first - second,
    };
  } else if (type === "/") {
    return {
      string: `${first} ÷ ${second}`,
      number: first / second,
    };
  } else if (type === 'all') {
    const con = [
       {string:`${first} x ${second}`,number:Math.floor(first*second)},
       {string:`${first} - ${second}`,number:Math.floor(first-second)},
       {string:`${first} ÷ ${second}`,number:Math.floor(first/second)},
       {string:`${first} + ${second}`,number:Math.floor(first+second)}
      ];
    const conR = con[Math.floor(Math.random() * con.length)];

    return conR
  }
}

module.exports = { msalFunc };
