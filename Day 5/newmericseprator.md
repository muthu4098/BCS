---

## 🚀 **ES6 (ECMAScript 6) Features in JavaScript**

---

## 🔢 1. **Numeric Separators (for Readability)**

```js
const population = 1_00_00_000; // 10 million
```

✅ Just for **readability** – no impact on value
📌 Useful for large numbers like financial data, population, etc.

---

## 🟡 2. **Variable Declarations: `var`, `let`, `const`**

| Keyword | Scope          | Re-declaration | Re-assignment | Use Case                     |
| ------- | -------------- | -------------- | ------------- | ---------------------------- |
| `var`   | Function Scope | ✅ Yes          | ✅ Yes         | Legacy (avoid if possible)   |
| `let`   | Block Scope    | ❌ No           | ✅ Yes         | Use for re-assignable values |
| `const` | Block Scope    | ❌ No           | ❌ No          | Use for constants & safety   |

> ⚠️ `const` only prevents **address changes**, not internal mutations for objects/arrays.

---

## 🔄 3. **Array Destructuring**

```js
const arr = [10, 20, 30];
const [a, b, c] = arr;
```

* Based on **index/positioning**
* Supports **default values**:

```js
const [x, y, z = 100] = [10, 20];
console.log(z); // 100 (default used only if `undefined`)
```

* Supports **holes** (skipping):

```js
const [first, , third] = [1, 2, 3];
console.log(third); // 3
```

### 📦 Spread Operator in Arrays

```js
const [head, ...rest] = [1, 2, 3, 4];
console.log(rest); // [2, 3, 4]
```

✅ Spread gets **values**, not keys
✅ Helps in cloning, merging, and extracting

---

## 🧱 4. **Object Destructuring**

```js
const student = {
  name: "Arjuna",
  age: 20,
  college: "SAC"
};

const { name, age } = student;
```

* Based on **key name**, not position
* Great for **DRY principle** (Don't Repeat Yourself)
* You can also **rename**:

```js
const { college: uni } = student;
console.log(uni); // SAC
```

---

## ❗ 5. **Equality: `==` vs `===`**

| Operator | Name            | Type Coercion | Checks       |
| -------- | --------------- | ------------- | ------------ |
| `==`     | Loose Equality  | ✅ Yes         | Value only   |
| `===`    | Strict Equality | ❌ No          | Value + Type |

### 🧪 Examples:

```js
console.log(5 == "5");   // true (coerced)
console.log(5 === "5");  // false (type mismatch)
```

> ✅ Use `===` by default for **safer** and more predictable comparisons.

---

## 🧠 6. **Copy by Value vs Copy by Reference**

### 🔹 **Primitive Data Types** (number, string, boolean, null, undefined, symbol, bigint)

* **Copied by value**
* Stored directly in memory

### 🔸 **Non-Primitive Data Types** (objects, arrays, functions)

* **Copied by reference**
* Stored as **memory addresses**

```js
const arr1 = [1, 2];
const arr2 = arr1; // reference copy
console.log(arr1 === arr2); // true
```

✅ To create a **true copy**, use spread:

```js
const arr2 = [...arr1]; // value copy
```

---

## 📌 Bonus: Arrays Are Special Objects

```js
typeof [] // "object"
```

* Arrays are a **special type of object** with **indexed keys** and **built-in methods** like `.push()`, `.pop()`, `.map()`, etc.

---

### ✅ Summary Table

| Feature                    | Purpose/Usage                                    |
| -------------------------- | ------------------------------------------------ |
| `1_00_000`                 | Readable numbers 📊                              |
| `let`, `const`             | Modern variable declarations 🧠                  |
| Destructuring              | Unpack values from arrays/objects efficiently 🎁 |
| `==` vs `===`              | Loose vs Strict equality 🔍                      |
| Spread Operator `...`      | Copy, merge, or destructure arrays/objects ⚡     |
| Primitive vs Non-Primitive | Copy by value vs reference 💾                    |
| Arrays as Objects          | Arrays are object-type with extra power 🧰       |

---

