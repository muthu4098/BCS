Here’s a clear, well-structured, and emoji-enhanced version of your notes for easy understanding and accurate facts! 🚀✨

---

# 📊 Presentation Tools & Tips

* **Carbon** ([https://carbon.now.sh](https://carbon.now.sh)) — Convert your **code to beautiful images** 📸
* **Google Slides** — Create engaging presentations 🎤

---

## 🧩 Coding Arrangement Format

Organize your code for clarity and maintainability:

1. **Early Return** ⏩ — Return early for invalid or special cases
2. **Edge Case / Corner Case** ⚠️ — Handle unusual or boundary conditions
3. **General Case** ✅ — Handle normal, everyday logic

---

## ⚙️ Handy Shortcut

* Press **Ctrl + Shift + P** to open **Run command** in browser dev tools (Inspect Snippets) 🛠️

---

# Day 07: JavaScript Concepts 🧠

---

## 🔍 Truthy / Falsy Values

### What is Truthy?

* A value that converts to `true` in Boolean context (like in `if` statements) is called **truthy**.
* JavaScript treats many values as “truthy” even if they’re not strictly `true`.
* Examples of **truthy** values:

  * Non-empty strings: `"hello"` ✍️
  * Numbers except 0: `42`, `-1` 🔢
  * Objects (including empty ones): `{}` 🧱
  * Arrays (including empty ones): `[]` 📚
  * The Boolean `true` itself ✔️

```js
// Without truthy check
if (name !== null && name !== undefined && name !== "") {
    // do something
}

// With truthy check
if (name) {
    // do something
}
```

---

### What is Falsy?

* Values that convert to `false` in Boolean context are **falsy**.
* Only **7 falsy values** exist in JavaScript:

| Falsy Value | Description                          |
| ----------- | ------------------------------------ |
| `false`     | Boolean false                        |
| `0`         | Number zero                          |
| `-0`        | Negative zero (rarely used)          |
| `""`        | Empty string                         |
| `null`      | Null (no value)                      |
| `undefined` | Undefined variable                   |
| `NaN`       | Not-a-Number (invalid number result) |

> ⚠️ Common error: **Cannot read properties of undefined/null** — occurs when you try to access a property on `null` or `undefined`.

---

## 🔒 Optional Chaining (`?.`)

* Safe way to access nested object properties without errors if intermediate properties are `null` or `undefined`.
* Example: `obj?.prop?.subProp`

---

## 🎯 Ternary Operator (`? :`)

* A shorthand for if-else conditions.
* Syntax:

```js
condition ? exprIfTrue : exprIfFalse
```

Example:

```js
let score = 85;
let grade = (score >= 90) ? "A" :
            (score >= 75) ? "B" :
            (score >= 60) ? "C" : "F";

console.log(grade); // "B"
```

---

## 🔢 Operators in JavaScript

| Type             | Examples                          |   |         |
| ---------------- | --------------------------------- | - | ------- |
| **Mathematical** | `+`, `-`, `*`, `/`, `%`           |   |         |
| **Relational**   | `>`, `<`, `>=`, `<=`, `==`, `===` |   |         |
| **Logical**      | `&&`, \`                          |   | `, `!\` |
| **Unary**        | `++`, `--`, `!`                   |   |         |

---

## 🔄 Shorthand Techniques

### Nullish Coalescing Operator (`??`)

* Returns the right operand **only if** the left operand is `null` or `undefined`.
* Unlike `||`, it **does NOT** treat `0`, `false`, or `""` as nullish.

```js
let name = null;
let displayName = name ?? "Guest"; // "Guest"

let age = 0;
let userAge = age ?? 18; // 0 (not 18)
```

> 🔗 Reference: [Josh W. Comeau's Operator Lookup](https://www.joshwcomeau.com/operator-lookup/)

---

## 🛡️ Defensive Coding

* Write code to **prevent errors** before they happen.
* Use **optional chaining**, **default values**, and **type checks** to avoid runtime errors.

---

## 🚀 Arrow Functions

* Concise syntax for functions.
* Supports **implicit return** for one-liner functions.

```js
const add = (a, b) => a + b; // Implicitly returns a + b
```

---
