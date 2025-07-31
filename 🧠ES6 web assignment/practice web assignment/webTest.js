// // const add = (x1, x2) => x1 + x2;
// // console.log(add(5, 3));
// // console.log(add(10, 7));
// // // =======================================

// // const greetUser = (name) => {
// //   return `Hello, ${name}!`;
// // };

// // console.log(greetUser("Alice"));
// // console.log(greetUser("Bob"));
// // // ============================================
// // const user1 = { name: "Alice", age: 25 };
// // const user2 = { name: "Bob" };
// // const user3 = null;

// // const getUserAge = (user) => {
// //   return user?.age;
// // };

// // console.log(getUserAge(user1));
// // console.log(getUserAge(user2));
// // console.log(getUserAge(user3));

// // // Expected Output:
// // // 25
// // // undefined
// // // undefined

// // //===============================================================

// // // Basic Object Destructuring
// // const person = { name: "Alice", age: 30, city: "New York" };
// // const { name, age } = person;
// // // ===== YOUR CODE BELOW =====
// // // Use object destructuring to extract name and age
// // const extractPersonInfo = (person) => {
// //   return `${name} is ${age} years old`;
// // };

// // console.log(extractPersonInfo(person));
// // //==================================================

// // const colors = ["red", "green", "blue", "yellow"];
// // const coordinates = [10, 20];

// // // ===== YOUR CODE BELOW =====
// // // Use array destructuring to extract first two colors
// // const getFirstTwoColors = (colors) => {
// //   // Your code here - use array destructuring
// //   const [first, second] = colors;
// //   return `First: ${first}, Second: ${second}`;
// // };

// // console.log(getFirstTwoColors(colors));
// // //=====================================================

// // const numbers = [1, 2, 3, 4, 5];

// // // ===== YOUR CODE BELOW =====
// // // Use map to double each number
// // const doubleNumbers = (numbers) => {
// //   return numbers.map((number) => number * 2);
// // };

// // console.log(JSON.stringify(doubleNumbers(numbers)));
// //==================================
// // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // // ===== YOUR CODE BELOW =====
// // // Use filter to keep only even numbers
// // const getEvenNumbers = (numbers) => {
// //   // Your code here
// //   return numbers.filter((number) => number % 2 == 0);
// // };

// // console.log(JSON.stringify(getEvenNumbers(numbers)));
// //========================================================
// const userData = {
//   user: {
//     profile: {
//       name: "Alice",
//       age: null,
//     },
//   },
// };

// const userWithAge = { user: { profile: { age: 25 } } };
// const userWithoutProfile = { user: {} };

// // ===== YOUR CODE BELOW =====
// // Write a function that safely returns the user's age or a default message
// const getUserAge = (data) => {
//   return data?.user?.profile?.age ?? "Age not provided";

//   // Your code here
// };

// console.log(getUserAge(userData));
// console.log(getUserAge(userWithAge));
// console.log(getUserAge(userWithoutProfile));
// // =======================================================
// const products = [
//   { id: 1, name: "Laptop", price: 1000 },
//   { id: 2, name: "Phone", price: 500 },
//   { id: 3, name: "Tablet", price: 700 },
// ];

// // ===== YOUR CODE BELOW =====
// // Write a function that calculates the total price of all products
// const getTotalPrice = (products) => {
//   // Your code here
//   return products.reduce((product, crr) => product + crr.price, 0);
// };

// console.log(getTotalPrice(products));
// //============================================================================
// const user1 = { name: "Jane", active: true };
// const user2 = { name: "John", active: false };
// const user3 = { name: "Alice", active: null };

// // ===== YOUR CODE BELOW =====
// // Write a function that returns a message indicating if the user is active
// const getUserStatus = (user) => {
//   const { name, active } = user;

//   const status = user.active ?? "unkown person";
//   return `${name} is currently ${
//     status === true ? "active" : status === false ? "inactive" : "unkown"
//   } `;
// };

// // Your code here - use template literals and conditional logic

// console.log(getUserStatus(user1));
// console.log(getUserStatus(user2));
// console.log(getUserStatus(user3));
// //==============================================================================================================
// const userProfile = {
//   id: 1,
//   name: "Eve",
//   settings: {
//     theme: "dark",
//   },
// };

// const userWithoutSettings = { id: 2, name: "Adam" };

// // ===== YOUR CODE BELOW =====
// // Write a function that extracts the user's name and theme with default values
// const getUserSettings = (user) => {
//   // Your code here - use destructuring with default values
//   const { name, settings: { theme = "light" } = {} } = user;
//   return `${name} prefers the ${theme}theme`;
// };

// console.log(getUserSettings(userProfile));
// console.log(getUserSettings(userWithoutSettings));
// //================================================================================================================

// const employees = [
//   {
//     id: 1,
//     name: "Alice",
//     position: "Developer",
//     skills: ["JavaScript", "React"],
//   },
//   {
//     id: 2,
//     name: "Bob",
//     position: "Manager",
//     skills: ["Leadership", "Communication"],
//   },
//   {
//     id: 3,
//     name: "Charlie",
//     position: "CEO",
//     skills: ["Strategy", "Vision"],
//   },
// ];

// const addSkill = (employees, newSkill) => {
//   object = { ...employees };
//   return (array = [...object.skills, newSkill]);
// };
// // ===== YOUR CODE BELOW =====
// console.log(JSON.stringify(addSkill(employees, "Problem Solving"), null, 2));
// ================================================================================================
// const sample = 'Hello World';

// ===== YOUR CODE BELOW =====
// Write a function to reverse a string using spread, reverse & join
// const reverseString = (str) => {
//   // Your code here
//    return [...str].reverse().join("")
// };

// // console.log(reverseString(sample));
// // =============================================
// const sentence = 'mastering javascript is fun';

// // ===== YOUR CODE BELOW =====
// // Write a function to convert sentence to title case
// const toTitleCase = (str) => {
//   // Your code here
//  return str
//     .split(' ')
//     .map(word => word[0].toUpperCase() + word.slice(1))
//     .join(' ');
// };

// console.log(toTitleCase(sentence));
// // ==============================================================================
//  const inputs = ['Madam', 'RaceCar!', 'Hello'];

// // ===== YOUR CODE BELOW =====
// // Write a function that checks for palindrome
// const isPalindrome = (s) => {
//   // Your code here
//   let palindrome=s.toLowerCase().replace(/[^a-z0-9]/g, "")
//   const rever=palindrome.split("").reverse().join("")
//  return palindrome===rever
// };

// console.log(inputs.map(isPalindrome));
// // ==================================================================================
//  const email1 = 'ragavkumarv@example.com'; const email2 = 'john.doe@gmail.com';

// // ===== YOUR CODE BELOW =====
// // Write a function to mask email username
// const maskEmail = (email) => {
//   const [username, domain] = email.split('@');
//   if (username.length <= 2) return email;

//   const masked = username[0] + '*'.repeat(username.length - 2) + username.slice(-1);
//   return `${masked}@${domain}`
// };

// console.log(maskEmail('ragavkumarv@example.com')); 
// console.log(maskEmail('john.doe@gmail.com'));      
// // =================================================================================
// // Array methods-22
// const movies = [
//   {
//     id: 1,
//     title: "Baahubali",
//     director: "S. S. Rajamouli",
//     year: 2015,
//     ratings: [8, 9, 10],
//     genre: "Action",
//   },
//   {
//     id: 2,
//     title: "Arjun Reddy",
//     director: "Sandeep Reddy Vanga",
//     year: 2017,
//     ratings: [9, 8, 9],
//     genre: "Drama",
//   },
//   {
//     id: 3,
//     title: "Mahanati",
//     director: "Nag Ashwin",
//     year: 2018,
//     ratings: [10, 9, 8],
//     genre: "Biography",
//   },
// ];

// // ===== YOUR CODE BELOW =====
// // Write a function that formats movie titles with their ratings
// const getTitlesAndRatings = (movies) => {
//   // Your code here
//   return movies.map((movie) => movie.title + ": " + movie.ratings).join(" | ");
  
// };

// console.log(getTitlesAndRatings(movies));
// =========================================================================================================================================
// const movies = [
//   { id: 1, title: "Baahubali", genre: "Action" },
//   { id: 2, title: "Arjun Reddy", genre: "Drama" },
// ];

// const moreMovies = [
//   { id: 3, title: "Jersey", genre: "Sports" },
//   { id: 4, title: "Eega", genre: "Fantasy" },
// ];

// // ===== YOUR CODE BELOW =====
// // Write a function that merges movie arrays with default handling
// const mergeMovies = (movies, moreMovies = []) => {
//   // Your code here
//   return [...movies,...moreMovies]
// };

// // console.log(JSON.stringify(mergeMovies(movies, moreMovies)));
// // console.log(JSON.stringify(mergeMovies(movies)));
// // =======================================================
// const movie1 = { id: 1, title: "Baahubali", genre: "Action" };
// const movie2 = { id: 2, title: "Arjun Reddy", genre: "Drama" };
// const movie3 = { id: 3, title: "Jersey", genre: "Sports" };

// // ===== YOUR CODE BELOW =====
// // Write a function that collects titles from any number of movies
// const getTitles = (...movies) => {
//   // Your code here
//   return movies.map(movie=>movie.title)
  
// };

// console.log(JSON.stringify(getTitles(movie1, movie2, movie3)));
// console.log(JSON.stringify(getTitles(movie1, movie2)));
// ==============================================================
const movies = [
  { id: 1, title: "Baahubali", genre: "Action" },
  { id: 2, title: "Arjun Reddy", genre: "Drama" },
  { id: 3, title: "Mahanati", genre: "Biography" },
  { id: 4, title: "Eega", genre: "Fantasy" },
  { id: 5, title: "Jersey", genre: "Sports" },
];

// ===== YOUR CODE BELOW =====
// Write a function that fetches movie titles by multiple IDs
const getMovieTitlesByIds = (movies, ...ids) => {
  return ids.map(id => {
    const movie = movies.find(movie => movie.id === id);
    return movie ? movie.title : "Unknown Title";
  });
};
console.log(getMovieTitlesByIds(movies, 1, 3, 5));
console.log(getMovieTitlesByIds(movies, 1, 6));
