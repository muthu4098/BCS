// Case 1:
setTimeout(() => {
  console.log("Hi, Veera 🍊");
}, 1000 * 3);

// Case 2:
const callbackFn = () => {
  console.log("Hi, Veera 🍊");
};

setTimeout(callbackFn, 1000 * 3);

[2, 3, 4].map((n) => n * 2);

// Assignment
function ownMap(fn, arr) {
  // code
}

ownMap((n) => n * 2, [2, 3, 4]); // [4, 6, 8]

// When a function takes an another function as argument
// Argument is callback function

// Event loop