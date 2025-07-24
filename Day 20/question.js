console.log(1);

// Normal Q
setTimeout(() => {
  console.log(2);
}, 0);

// VIP Q
Promise.resolve(5).then((x) => console.log(x));
Promise.resolve(6).then((x) => console.log(x));

// new Promise((resolve)=> {
//     resolve(5)
// })
// .then((x) => console.log(x))

console.log(3);

// Output?