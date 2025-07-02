---

# 📘 JavaScript Functions — Fundamentals

---

## 🔢 **Basic Arithmetic Example**

```js
var a = 50;
var b = 40;
var c = a + b; // ➡️ c = 90
```

---

## 🔁 **What is a Function?**

> A **function** is a reusable block of code designed to perform a specific task.
> **Declare once ➡️ Use many times** 🔄

---

## 🧱 **Parts of a Function**

```js
function sum(n1, n2) {
  var ans = n1 + n2;
  return ans.toFixed(2); // returns a string with 2 decimal places
}
```

| Term          | Meaning                                          |
| ------------- | ------------------------------------------------ |
| `sum`         | Function name 📛                                 |
| `n1`, `n2`    | Parameters (inputs defined in function) 🧾       |
| `{ ... }`     | Function body (code block) 🧱                    |
| `return`      | Sends value back to where function was called 🔙 |
| `.toFixed(2)` | Formats number to 2 decimal places (string) 💡   |

---

## ✅ **Function Calls & Outputs**

```js
var result1 = sum(60, 80); // ➡️ "140.00"
var result2 = sum(70, 100); // ➡️ "170.00"
var result3 = sum(70.7511, 100.1213); // ➡️ "170.87"

console.log(result1);
console.log(result2);
console.log(result3);
```

### ⚠️ Notes:

- If you pass **more arguments** than parameters, the extra values are ignored.
- If you **don’t return** anything in the function, it returns `undefined`.

---

## 🧮 **Default Parameters**

```js
function sum(n1, n2 = 0) {
  return (n1 + n2).toFixed(2);
}

var result = sum(60); // ➡️ "60.00" (n2 defaults to 0)
```

> ✅ Use default values to avoid `undefined` or missing argument errors.

---

## ✨ **Rest Parameters (`...rest`)**

```js
function sum(n1, n2 = 0, ...rest) {
  let total = n1 + n2;
  for (let num of rest) {
    total += num;
  }
  return total.toFixed(2);
}

var result2 = sum(70, 100, 80, 30, 50); // ➡️ "330.00"
console.log(result2);
```

### 🧠 What's Happening?

- `...rest` collects all **extra arguments** into an array 📦
- You can loop through `rest` to perform operations like sum, average, etc.

---

## 🚨 **Important Function Facts**

| Concept            | Explanation                                  |
| ------------------ | -------------------------------------------- |
| No `return`        | Function returns `undefined` by default      |
| `.toFixed()`       | Always returns a **string**, not a number    |
| Extra arguments    | Ignored unless handled using `...rest`       |
| Default parameters | Used when argument is missing or `undefined` |

---

### ✅ Summary Example:

```js
function sum(n1, n2 = 0, ...rest) {
  let total = n1 + n2;
  for (let r of rest) total += r;
  return total.toFixed(2);
}

console.log(sum(60)); // "60.00"
console.log(sum(70, 100)); // "170.00"
console.log(sum(70, 100, 80, 50)); // "300.00"
```

---
