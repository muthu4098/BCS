## math.abs(4-5)  // positive show


## math.ceil(4.8)  //5
## math.flour(4.8)   //4



// if ..... elseif ...else

Here's your enhanced and structured version of the notes, optimized for clarity, logical flow, and with added emojis to improve readability and engagement. I've also fact-checked the technical points:

---

# 📘 JavaScript Basics & Best Practices

---

## 🔹 Statements vs Expressions

* Every **line in JavaScript** is a **statement** and should end with a **semicolon (`;`)** 📝
* A **statement** is an instruction that performs an action
* If a **statement returns a value**, it's called an **expression** 💡

```js
let a = 5 + 2; // expression (returns 7)
```

🧠 **Expression in Interpolation**

* You can use expressions inside **template literals** using `${}`:

```js
let name = "Alice";
console.log(`Hello, ${name.toUpperCase()}!`);
```

---

## 🔒 String Immutability

* In JavaScript, **strings are immutable** ❌✍️

  * Once a string is created, **it cannot be changed**
  * Operations like `.trim()`, `.toUpperCase()` return a **new string**

---

## 🔗 Dot Chaining

* **Dot chaining** allows you to call multiple methods in a single line using `.`

```js
let formatted = quote.trim().toLowerCase();
```

🔄 This improves **readability** and **efficiency**

---

## ✨ ES6 Features (ECMAScript 2015)

### Template Literals (`` ` ` ``)

* Use backticks (`` ` ``) for multi-line strings and **interpolation**

```js
let name = "Bob";
console.log(`Hi ${name}, welcome!`);
```

✅ Supports:

* **Multi-line strings**
* **Expression evaluation** inside `${}`
* Improves **developer experience (DX)** and **readability**

---

## 🚫 Deprecated

* "Deprecated" means a feature is **no longer recommended** and may be **removed** in the future.
* Example: `var` is mostly replaced by `let` and `const` now.

---

## 🧠 Pointers (General Concept)

> JavaScript **does not have traditional pointers** like C/C++, but...

* Variables storing **non-primitive types (objects, arrays, functions)** store **references** 🧭
* These references point to a memory location where the data is stored.

---

# 🧼 Code Principles

## 🧩 DRY Principle – *Don't Repeat Yourself*

* **Avoid repeating code** by using functions or modular design
* Helps in:

  * **Cleaner code**
  * **Easier maintenance**
  * **Less bugs**

### 💡 Code Smell

* A sign of **poor structure** (e.g. repetition)
* Solution: **Refactor** the code to improve quality

```js
// Bad
console.log("Hello John");
console.log("Hello Mary");

// Good
function greet(name) {
  console.log(`Hello ${name}`);
}
```

## ⚡ Fail Fast, Learn Fast

* Embrace **quick feedback** through:

  * Breakpoints 🔍
  * Console logs 🖨️
  * Try/catch blocks 🛡️

---

# 🌱 Git & GitHub Essentials

### 🛠️ Git Configuration (One-time setup)

```bash
git config --global user.name "yourusername"
git config --global user.email "youremail@example.com"
```

These commands set your identity when you commit code on GitHub 🌐

---

# 📝 Taking Smart Notes Using ChatGPT

## 🧠 Keywords to Use:

* ✅ `multiple parts`
* 🔍 `correct factual errors`
* 🗂️ `notes`
* 🧱 `logical`
* 🧵 `coherent`
* 😀 `emoji`
* 🧠 `add flash cards`

### Example Prompt:

> “Summarize this topic into multiple parts, correct factual errors, structure it logically and coherently, and add emojis.”

---

# 🔁 Flash Cards (Review Time!)

### ❓What is a JavaScript expression?

> Any valid unit of code that **returns a value**

---

### ❓Why are strings in JavaScript immutable?

> Because once created, **they cannot be altered**, only replaced with a new string

---

### ❓What are template literals used for?

> Multi-line strings and **expression interpolation** using `` ` `` and `${}`

---

### ❓What is the DRY principle?

> **Don’t Repeat Yourself** — Avoid code duplication for better maintainability

---


