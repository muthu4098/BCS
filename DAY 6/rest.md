---

# 📚 JavaScript Core Concepts (Simplified & Structured)

---

## 🧯 **Rest Operator (`...`)**

* ✅ Used to **collect remaining values** into an array.
* ✅ Works in both **functions** and **destructuring**.
* ⚠️ The **rest parameter must be the last** in the list — always!

```js
const [a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(rest); // ➡️ [3, 4, 5]
```

### 🧠 Note:

> People sometimes confuse **rest** and **spread** because they use the same syntax `...`.
> **Rule of thumb:**

* `...rest` 👉 **collects**
* `...spread` 👉 **spreads/unpacks**

---

## 🧱 **Destructuring in JavaScript**

### 📍 Array Destructuring

```js
const arr = [10, 20, 30];
const [x, y, z] = arr;
console.log(x, y); // ➡️ 10 20
```

### 📍 Object Destructuring

```js
const student = {
  name: "Abishek",
  age: 20,
  age: 21 // ⚠️ Duplicate keys are overridden
};

const { name, age } = student;
console.log(age); // ➡️ 21 (last key wins)
```

> 🚨 Object keys must be unique — duplicates will override previous values.

---

## 🧩 **Functions**

Functions help you **reuse code**, **organize logic**, and **encapsulate tasks**.

```js
function greet(name = "Guest") {
  return `Hello, ${name}`;
}
console.log(greet()); // ➡️ Hello, Guest
```

---

## 🧠 **Scope in JavaScript** → *Where variables live & die*

### 1️⃣ **Block Scope** `{}`

Applies to:

* `if`, `else`, `for`, `while`, etc.
* `let` & `const` are **block-scoped**

```js
{
  let a = 10;
  console.log(a); // valid
}
// console.log(a); // ❌ ReferenceError
```

### 2️⃣ **Function Scope**

* `var`, `let`, and `const` are also **function-scoped** when declared inside functions

```js
function show() {
  var x = 5;
}
// console.log(x); // ❌ ReferenceError
```

---

## 🔍 **Lexical Scope (Closures)**

> A function can **access variables from its outer scope**, even after the outer function has executed.

```js
function outer() {
  let outerVar = "I'm outside!";
  return function inner() {
    console.log(outerVar); // Has access ✅
  };
}
const innerFunc = outer();
innerFunc(); // ➡️ I'm outside!
```

✅ This behavior is called a **closure**.

---

## ⚙️ **JavaScript Execution: Just-In-Time (JIT) Compilation**

### 🛠️ JIT - Just in Time

* JavaScript is **interpreted & compiled** in real time (not precompiled like Java or C++)
* The JS Engine (e.g., V8, SpiderMonkey) uses JIT to optimize performance

---

## ⏳ **Hoisting**

> JavaScript uses **2-phase execution**:

### 1. **Compilation Phase**

* Variable & function **declarations** are hoisted (moved to the top)
* `let` and `const` are hoisted, but remain **uninitialized**

### 2. **Execution Phase**

* Code runs line by line (synchronously unless async/await)

### ⚠️ TDZ — Temporal Dead Zone

* The time between **hoisting** and **actual declaration** for `let` and `const`
* Accessing the variable during TDZ results in ❌ **ReferenceError**

```js
console.log(a); // ❌ ReferenceError
let a = 10;
```

---

## 🔥 Extra Tips

* `{}` always creates a **block scope** — especially important for loops and conditions
* Use **PracticePen** or **JSFiddle** to experiment and learn by doing 👨‍💻👩‍💻
* Use `const` by default, switch to `let` if you need reassignment
* Avoid `var` in modern code — use `let` or `const` instead ✅

---

---
