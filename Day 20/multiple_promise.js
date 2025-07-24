// fetch("/users")
//   .then(() => fetch("/posts"))
//   .then(() => fetch("/books"));

// //   Step by Step
// const users = await fetch("/users").then((data) => console.log(data)); // 4s
// const posts = await fetch("/posts").then((data) => console.log(data)); // 2s
// const books = await fetch("/books").then((data) => console.log(data)); // 1s

// const allData = [users, posts, books]; // 7s

// console.log(allData);

// // Case 1:
// let P4 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(2);
//   }, 2000);
// }); // 2s

// let P5 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(8);
//   }, 1000);
// }); // 1s

// let P6 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(3);
//   }, 4000);
// }); // 4s

// console.log("Started...");

// //  [2, 8, 3]
// Promise.all([P4, P5, P6]).then((data) => console.log(data));

// // Case 2:
// let P4 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(2);
//   }, 2000);
// }); // 2s

// let P5 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(8);
//   }, 1000);
// }); // 1s

// let P6 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(3);
//   }, 4000);
// }); // 4s

// console.log("Started...");

// //  [2, 8, 3]
// Promise.all([P4, P5, P6])
//   .then((data) => console.log(data))
//   .catch((err) => console.log("Oops:", err));

// // Case 1:
// let P4 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(2);
//   }, 2000);
// }); // 2s

// let P5 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(8);
//   }, 1000);
// }); // 1s

// let P6 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(3);
//   }, 4000);
// }); // 4s

// Promise.race([P4, P5, P6])
//     .then((data) => console.log(data));

// // Case 2:
// let P4 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(2);
//   }, 2000);
// }); // 2s

// let P5 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(8);
//   }, 1000);
// }); // 1s

// let P6 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(3);
//   }, 4000);
// }); // 4s

// Promise.race([P4, P5, P6]).then((data) => console.log(data));

// Case 3:
let P4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 2000);
}); // 2s

let P5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(8);
  }, 1000);
}); // 1s

let P6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 4000);
}); // 4s

Promise.race([P4, P5, P6]).then((data) => console.log(data));