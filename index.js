// EXAMPLE 1 - Add a Key/Value pair to all Objects in Array in JavaScript

const arr = [{id: 1}, {id: 2}];

arr.forEach(object => {
  object.color = 'red';
});

// 👇️ [{id: 1, color: 'red'}, {id: 2, color: 'red'}]
console.log(arr);

// ------------------------------------------------------------------

// // EXAMPLE 2 - Add a Key/Value pair to all Objects in Array using `Array.map()`

// const arr = [{id: 1}, {id: 2}];

// const arrWithColor = arr.map(object => {
//   return {...object, color: 'red'};
// });

// // 👇️ [{id: 1, color: 'red'}, {id: 2, color: 'red'}]
// console.log(arrWithColor);

// // 👇️ [{id: 1}, {id: 2}]
// console.log(arr);

// ------------------------------------------------------------------

// // EXAMPLE 3 - Using Object.assign() instead of the spread syntax (...)

// const arr = [{id: 1}, {id: 2}];

// const arrWithColor = arr.map(object => {
//   return Object.assign(object, {color: 'red', country: 'Chile'});
// });

// // [
// //   { id: 1, color: 'red', country: 'Chile' },
// //   { id: 2, color: 'red', country: 'Chile' }
// // ]
// console.log(arrWithColor);

// ------------------------------------------------------------------

// // EXAMPLE 4 - Conditionally adding a key-value pair to all objects in an array

// const arr = [{id: 1}, {id: 2}];

// const arrWithColor = arr.map(object => {
//   return {...object, name: object.id > 1 ? 'Bobby' : 'Alice'};
// });

// // 👇️ [ { id: 1, name: 'Alice' }, { id: 2, name: 'Bobby' } ]
// console.log(arrWithColor);

// ------------------------------------------------------------------

// // EXAMPLE 5 - Add a Key/Value pair to all Objects in an Array using for...of

// const arr = [{id: 1}, {id: 2}];

// for (const obj of arr) {
//   obj.color = 'red';
// }

// // 👇️ [ { id: 1, color: 'red' }, { id: 2, color: 'red' } ]
// console.log(arr);

// ------------------------------------------------------------------

// // EXAMPLE 6 - Add a Key/Value pair to all Objects in an Array using a `for` loop

// const arr = [{id: 1}, {id: 2}];

// for (let index = 0; index < arr.length; index++) {
//   arr[index].color = 'green';
// }

// // 👇️ [ { id: 1, color: 'green' }, { id: 2, color: 'green' } ]
// console.log(arr);
