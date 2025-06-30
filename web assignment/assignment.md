## TASK-1

### Simple Arrow Function

#### Create an arrow function that adds two numbers

## Answer

```js
const add = (x1, x2) => x1 + x2;
console.log(add(5, 3));
console.log(add(10, 7));
```

## TASK-2

### Basic Template Literal

#### Create a function that returns a greeting using template literals

## Answer

```js
const greetUser = (name) => {
  `Hello, ${name}!`;
};

console.log(greetUser("Alice"));
console.log(greetUser("Bob"));
```

## TASK-3

### Simple Optional Chaining

```js
const user1 = { name: "Alice", age: 25 };
const user2 = { name: "Bob" };
const user3 = null;

const getUserAge = (user) => {};

console.log(getUserAge(user1));
console.log(getUserAge(user2));
console.log(getUserAge(user3));
```

## Basic Object Destructuring

### Exercise 9

1.Extract properties from an object using destructuring assignment

### Ans

const person = { name: "Alice", age: 30, city: "New York" };

// ===== YOUR CODE BELOW =====
// Use object destructuring to extract name and age
const extractPersonInfo = (person) => {
// Your code here - use destructuring

return `${name} is ${age} years old`;
};

console.log(extractPersonInfo(person));

### Expected output

Alice is 30 years old

## Exercise 10

### Extract elements from an array using destructuring assignment.

### Answer

```js
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
```

## Expected Output:

First: red, Second: green
