## Code Quality-5 Pillars

1-Readabillity-75% -varnable-good name,Declartive code,Comments
2-Maintaibility-Code Debt,Resuse,Refactoring or output same but Quailty Increased
3-Extensibility - Camera ,no problem to add fuction for futhure
4-Testability -
5-Performance- o(n)-Time Complexity (nested loop)-O(2n)-O(n)

## Declarative -What to do?

## Imperative -How to do?

## Learn

-unit testing learn
-cypreass learn
-space Complexxity

## to string

//string +object

==================================================================================================================
Here is your enhanced and structured note on **Code Quality – 5 Pillars**, with **emojis**, **clear sections**, and **factually correct terminology**. This version is designed to be easy to present or study from, with simplified examples and helpful highlights.

---

## 🧱 **Code Quality – 5 Pillars**

> Good code is not just code that works — it’s code that is easy to **read**, **maintain**, **extend**, **test**, and **perform well**.

---

### 1️⃣ **Readability** – _"Can others understand your code?"_

📊 Weight: **\~75% of code quality**
Key elements:

- 🧠 **Good variable names** (`userList`, not `x`)
- 📄 **Declarative style** – Express **what** needs to be done
- 💬 **Comments** – Explain _why_, not just _what_

✅ Example (Readable):

```js
const isAdult = user.age >= 18;
```

❌ Example (Not readable):

```js
const a = u.a >= 18;
```

---

### 2️⃣ **Maintainability** – _"Can we easily fix or improve it?"_

🔁 Focus on:

- 🧹 **Code Reuse** – Avoid duplication
- ♻️ **Refactoring** – Improve structure without changing output
- 📉 **Reduce Technical Debt** – Keep code clean for long-term health

💡 Good maintenance = **same output**, but **better structure**.

---

### 3️⃣ **Extensibility** – _"Can we add new features easily?"_

🚀 Your code should support **future growth** without breaking.
Example:
🎥 Adding a camera filter feature to an existing camera app **without rewriting everything**.

💡 Think ahead: “Can I add more without rewriting core logic?”

---

### 4️⃣ **Testability** – _"Can I write tests for this code?"_

🧪 Easy-to-test code is:

- 🔄 Modular
- 📤 Has clear inputs/outputs
- ❌ Avoids side-effects

✅ Helps with writing **Unit Tests**, **Integration Tests**, and using tools like:

- 🧪 **Jest**
- 🌐 **Cypress** (for front-end/end-to-end testing)

---

### 5️⃣ **Performance** – _"How fast and efficient is the code?"_

⏱️ Understand **Time Complexity** (Big O Notation):

- ✅ `O(n)` – Linear (good)
- ⚠️ `O(n^2)` – Nested loops (can be slow)
- ⚡ `O(1)` – Constant time (ideal!)
- 🧠 Also learn: **Space Complexity**

---

## 🆚 Declarative vs Imperative

| Style              | Description  | Example                             |
| ------------------ | ------------ | ----------------------------------- |
| **Declarative** 🧾 | What to do   | `users.filter(isAdult)`             |
| **Imperative** 🔧  | How to do it | Use a `for` loop to filter manually |

---

## 📚 Learn & Improve

🎯 Topics to explore:

- 🧪 **Unit Testing** – Test small functions independently
- 🌐 **Cypress** – End-to-end testing for web apps
- 🧠 **Space Complexity** – How much memory your code uses

---

## 🧵 `toString()` in JavaScript

🔄 When you use:

```js
const message = "User: " + user;
```

🧩 JavaScript automatically calls:

```js
user.toString();
```

➡️ Converts the object into a **string** representation.

✅ You can **override** `toString()` in custom objects for better output.

---
