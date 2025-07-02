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
//=================================================

const books = [
  { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
  { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
  { title: "Sapiens", rating: 4.9, genre: "History" },
  { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
  { title: "Clean Code", rating: 4.7, genre: "Technology" },
];

const getTitles = (books) => {
  return books.map((book) => book.title);
  // Code
};

console.log(getTitles(books));
