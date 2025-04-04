/**
 * Get a random element from an array.
 * @param {any[]} array 
 * @example
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
 */
function randomOfArray(array) {
    const a = array[Math.floor(Math.random() * array.length)];
    return a
}
module.exports = randomOfArray;