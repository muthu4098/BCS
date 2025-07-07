// const add = (x1, x2) => x1 + x2;
// console.log(add(5, 3));
// console.log(add(10, 7));
// // =======================================

// const greetUser = (name) => {
//   return `Hello, ${name}!`;
// };

// console.log(greetUser("Alice"));
// console.log(greetUser("Bob"));
// // ============================================
// const user1 = { name: "Alice", age: 25 };
// const user2 = { name: "Bob" };
// const user3 = null;

// const getUserAge = (user) => {
//   return user?.age;
// };

// console.log(getUserAge(user1));
// console.log(getUserAge(user2));
// console.log(getUserAge(user3));

// // Expected Output:
// // 25
// // undefined
// // undefined

// //===============================================================

// // Basic Object Destructuring
// const person = { name: "Alice", age: 30, city: "New York" };
// const { name, age } = person;
// // ===== YOUR CODE BELOW =====
// // Use object destructuring to extract name and age
// const extractPersonInfo = (person) => {
//   return `${name} is ${age} years old`;
// };

// console.log(extractPersonInfo(person));
// //==================================================

// const colors = ["red", "green", "blue", "yellow"];
// const coordinates = [10, 20];

// // ===== YOUR CODE BELOW =====
// // Use array destructuring to extract first two colors
// const getFirstTwoColors = (colors) => {
//   // Your code here - use array destructuring
//   const [first, second] = colors;
//   return `First: ${first}, Second: ${second}`;
// };

// console.log(getFirstTwoColors(colors));
// //=====================================================

// const numbers = [1, 2, 3, 4, 5];

// // ===== YOUR CODE BELOW =====
// // Use map to double each number
// const doubleNumbers = (numbers) => {
//   return numbers.map((number) => number * 2);
// };

// console.log(JSON.stringify(doubleNumbers(numbers)));
//==================================
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // ===== YOUR CODE BELOW =====
// // Use filter to keep only even numbers
// const getEvenNumbers = (numbers) => {
//   // Your code here
//   return numbers.filter((number) => number % 2 == 0);
// };

// console.log(JSON.stringify(getEvenNumbers(numbers)));
//========================================================
const userData = {
  user: {
    profile: {
      name: "Alice",
      age: null,
    },
  },
};

const userWithAge = { user: { profile: { age: 25 } } };
const userWithoutProfile = { user: {} };

// ===== YOUR CODE BELOW =====
// Write a function that safely returns the user's age or a default message
const getUserAge = (data) => {
  return data?.user?.profile?.age ?? "Age not provided";

  // Your code here
};

console.log(getUserAge(userData));
console.log(getUserAge(userWithAge));
console.log(getUserAge(userWithoutProfile));
// =======================================================
const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 700 },
];

// ===== YOUR CODE BELOW =====
// Write a function that calculates the total price of all products
const getTotalPrice = (products) => {
  // Your code here
  return products.reduce((product, crr) => product + crr.price, 0);
};

console.log(getTotalPrice(products));
//============================================================================
const user1 = { name: "Jane", active: true };
const user2 = { name: "John", active: false };
const user3 = { name: "Alice", active: null };

// ===== YOUR CODE BELOW =====
// Write a function that returns a message indicating if the user is active
const getUserStatus = (user) => {
  const { name, active } = user;

  const status = user.active ?? "unkown person";
  return `${name} is currently ${
    status === true ? "active" : status === false ? "inactive" : "unkown"
  } `;
};

// Your code here - use template literals and conditional logic

console.log(getUserStatus(user1));
console.log(getUserStatus(user2));
console.log(getUserStatus(user3));
//==============================================================================================================
const userProfile = {
  id: 1,
  name: "Eve",
  settings: {
    theme: "dark",
  },
};

const userWithoutSettings = { id: 2, name: "Adam" };

// ===== YOUR CODE BELOW =====
// Write a function that extracts the user's name and theme with default values
const getUserSettings = (user) => {
  // Your code here - use destructuring with default values
  const { name, settings: { theme = "light" } = {} } = user;
  return `${name} prefers the ${theme}theme`;
};

console.log(getUserSettings(userProfile));
console.log(getUserSettings(userWithoutSettings));
//================================================================================================================

const employees = [
  {
    id: 1,
    name: "Alice",
    position: "Developer",
    skills: ["JavaScript", "React"],
  },
  {
    id: 2,
    name: "Bob",
    position: "Manager",
    skills: ["Leadership", "Communication"],
  },
  {
    id: 3,
    name: "Charlie",
    position: "CEO",
    skills: ["Strategy", "Vision"],
  },
];

const addSkill = (employees, newSkill) => {
  object = { ...employees };
  return (array = [...object.skills, newSkill]);
};
// ===== YOUR CODE BELOW =====
console.log(JSON.stringify(addSkill(employees, "Problem Solving"), null, 2));
