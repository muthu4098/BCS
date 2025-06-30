 1. Currying
Definition:
Currying is the process of transforming a function with multiple arguments into a sequence of functions each taking a single argument.

Example:
```js

// Uncurried version
function add(a, b) {
  return a + b;
}

// Curried version
function curriedAdd(a) {
  return function(b) {
    return a + b;
  };
}

const addFive = curriedAdd(5);
console.log(addFive(3)); // 8
```
## Arrow function
```js

const curriedAdd = a => b => a + b;
```
 2. Partial Application
Definition:
Partial application refers to the process of fixing a number of arguments to a function, producing another function of smaller arity (fewer parameters).

Example:
```js
function multiply(a, b, c) {
  return a * b * c;
}

function partialMultiplyBy2(b, c) {
  return multiply(2, b, c);
}

console.log(partialMultiplyBy2(3, 4)); // 24




function partial(fn, ...fixedArgs) {
  return function(...remainingArgs) {
    return fn(...fixedArgs, ...remainingArgs);
  };
}
```    
```js
const multiply = (a, b, c) => a * b * c;
const multiplyBy2 = partial(multiply, 2);

console.log(multiplyBy2(3, 4)); // 24

```
 3. Point-Free Style
Definition:
Point-free (or tacit) style is a way of defining functions without explicitly mentioning their arguments. It focuses on function composition.

```js
// Traditional
const toUpperCase = str => str.toUpperCase();
const exclaim = str => str + '!';

const shout = str => exclaim(toUpperCase(str));

// Point-free
const { compose } = require('ramda');

const shout = compose(exclaim, toUpperCase);

console.log(shout("hello")); // "HELLO!"

```

Here's an overview of the three functional programming concepts you mentioned—**Currying**, **Partial Application**, and **Point-free Style**—along with simple examples in JavaScript for clarity.

---

## 🔹 1. Currying

### **Definition**:

Currying is the process of transforming a function with multiple arguments into a sequence of functions each taking a single argument.

### **Example**:

```javascript
// Uncurried version
function add(a, b) {
  return a + b;
}

// Curried version
function curriedAdd(a) {
  return function(b) {
    return a + b;
  };
}

const addFive = curriedAdd(5);
console.log(addFive(3)); // 8
```

Or using arrow functions:

```javascript
const curriedAdd = a => b => a + b;
```

---

## 🔹 2. Partial Application

### **Definition**:

Partial application refers to the process of fixing a number of arguments to a function, producing another function of smaller arity (fewer parameters).

### **Example**:

```javascript
function multiply(a, b, c) {
  return a * b * c;
}

function partialMultiplyBy2(b, c) {
  return multiply(2, b, c);
}

console.log(partialMultiplyBy2(3, 4)); // 24
```

Or using a generic `partial` function:

```javascript
function partial(fn, ...fixedArgs) {
  return function(...remainingArgs) {
    return fn(...fixedArgs, ...remainingArgs);
  };
}

const multiply = (a, b, c) => a * b * c;
const multiplyBy2 = partial(multiply, 2);

console.log(multiplyBy2(3, 4)); // 24
```

---

## 🔹 3. Point-Free Style

### **Definition**:

Point-free (or tacit) style is a way of defining functions **without explicitly mentioning** their arguments. It focuses on **function composition**.

### **Example** (using Ramda or similar libraries):

```javascript
// Traditional
const toUpperCase = str => str.toUpperCase();
const exclaim = str => str + '!';

const shout = str => exclaim(toUpperCase(str));

// Point-free
const { compose } = require('ramda');

const shout = compose(exclaim, toUpperCase);

console.log(shout("hello")); // "HELLO!"
```

---

### ✅ Summary Table:

| Paradigm                | Description                                     | Example Syntax                |
| ----------------------- | ----------------------------------------------- | ----------------------------- |
| **Currying**            | Transform `f(a, b)` into `f(a)(b)`              | `const add = a => b => a + b` |
| **Partial Application** | Pre-fill some args to create a simpler function | `partial(multiply, 2)`        |
| **Point-free Style**    | Define functions without mentioning arguments   | `compose(f, g)`               |

## compose


