---
# 📘 JavaScript Essentials: Destructuring, Spread, and Nested Objects
---

## 🧠 **1. Nested Objects & Accessing Properties**

```js
const student = {
  name: "Abishek",
  age: 20,
  address: {
    city: "Thrichy",
    state: "TN",
  },
  hobbies: ["cricket", "football", "carrom"],
};
```

### 📝 Accessing Nested Values:

```js
console.log(student.address.city); // ➡️ Thrichy
console.log(student.address.state); // ➡️ TN
console.log(typeof student.address); // ➡️ "object"
```

> ⚠️ `console.log(city)` will throw ❌ **ReferenceError** because `city` is not in the current scope.

---

## 🧩 **2. Nested Destructuring**

### ✅ Extracting values from **nested objects** and **arrays**:

```js
const {
  address: { city },
  hobbies: [, hobby], // Skips the first hobby, gets the second =holes
} = student;

console.log(city); // ➡️ Trichy
console.log(hobby); // ➡️ football
```

---

## 📚 **3. Destructuring Arrays from Objects**

```js
const userData = {
  id: 1,
  name: "Alice",
  hobbies: ["reading", "hiking", "cooking"],
};

const {
  hobbies: [hobby1, hobby2, ...remainingHobbies],
} = userData;

console.log(hobby1); // ➡️ reading
console.log(hobby2); // ➡️ hiking
console.log(remainingHobbies); // ➡️ ["cooking"]
```

> 🧠 Use the `...` operator to collect the remaining items into a new array.

---

## ➗ **4. Destructuring Arrays with Rest Operator**

```js
let a, b, rest;
[a, b] = [10, 20];

console.log(a); // 10
console.log(b); // 20
```

### 🧵 Using the `...rest` to collect remaining values:

```js
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest); // ➡️ [30, 40, 50]
```

> ⚡ `...rest` syntax is a form of **spread**, commonly used in destructuring.

---

## 📦 **5. Spread Operator for Merging Objects**

```js
const book = {
  name: "Harry Potter",
  author: "J.K. Rowling",
  authorAge: 45,
};

const details = {
  year: 2002,
  price: 1200,
  authorAge: 55,
};

const fullDetails = { ...book, ...details };
console.log(fullDetails);
```

### 🧠 What Happens Here?

- Properties from `details` **override** the same properties in `book`
- `authorAge` becomes `55` (from `details`)
- ✅ Used for shallow merging (top-level only)

---

## 🔁 **6. Default Values in Destructuring**

```js
const [x = "Default"] = [];
console.log(x); // ➡️ "Default"
```

> ✅ Default values only apply when the original value is `undefined`.
> ❌ They won’t override `null`, `0`, or `""` (these are valid values).

---

### ✅ Summary Table

| Feature                  | Description                             | Syntax Example          |
| ------------------------ | --------------------------------------- | ----------------------- |
| **Nested Destructuring** | Extract deep values from objects/arrays | `{ address: { city } }` |
| **Array Rest Operator**  | Collect remaining values into an array  | `[a, b, ...rest]`       |
| **Spread for Objects**   | Copy/merge object properties            | `{ ...obj1, ...obj2 }`  |
| **Default Values**       | Fallback when value is `undefined`      | `[a = 100] = []`        |

---
