const add = (x1, x2) => x1 + x2;
console.log(add(5, 3));
console.log(add(10, 7));
// =======================================

const greetUser = (name) => {
  return `Hello, ${name}!`;
};

console.log(greetUser("Alice"));
console.log(greetUser("Bob"));
// ============================================
const user1 = { name: "Alice", age: 25 };
const user2 = { name: "Bob" };
const user3 = null;

const getUserAge = (user) => {
  return user?.age;
};

console.log(getUserAge(user1));
console.log(getUserAge(user2));
console.log(getUserAge(user3));

// Expected Output:
// 25
// undefined
// undefined

//===============================================================

// Basic Object Destructuring
const person = { name: "Alice", age: 30, city: "New York" };
const { name, age } = person;
// ===== YOUR CODE BELOW =====
// Use object destructuring to extract name and age
const extractPersonInfo = (person) => {
  return `${name} is ${age} years old`;
};

console.log(extractPersonInfo(person));
//==================================================

const colors = ["red", "green", "blue", "yellow"];
const coordinates = [10, 20];

// ===== YOUR CODE BELOW =====
// Use array destructuring to extract first two colors
const getFirstTwoColors = (colors) => {
  // Your code here - use array destructuring
  const [first, second] = colors;
  return `First: ${first}, Second: ${second}`;
};

console.log(getFirstTwoColors(colors));
//=====================================================
