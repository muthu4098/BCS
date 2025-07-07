## 🔍 What is Optional Chaining (?.) in JavaScript?

-- The optional chaining operator ?. lets you safely access deeply nested properties or methods without causing a runtime error if something in the chain is null or undefined.
## use
object?.property
object?.[expression]
object?.method?.()

## Example
```js
const user = {
  name: "Alice",
  address: {
    city: "New York",
  },
};

console.log(user.address?.city);     // ✅ "New York"
console.log(user.profile?.city);     // ✅ undefined (no error!)
```



---
##  Nullish Coalescing

### 🔹 What it does:

Returns the **right-hand value only if the left-hand value is `null` or `undefined`**.

---

### ✅ Syntax:

```js
let result = value ?? defaultValue;
```

---

### 📘 Example:

```js
let name = null;
let displayName = name ?? "Guest";
console.log(displayName); // "Guest"
```

---

### ❗ Difference from `||`:

* `||` treats **falsy values** like `""`, `0`, `false` as "missing".
* `??` only treats **`null` and `undefined`** as missing.

```js
let count = 0;
console.log(count || 10); // 10 ❌
console.log(count ?? 10); // 0 ✅
```

---

### 🔁 Great with Optional Chaining:

```js
let theme = user?.settings?.theme ?? "light";
```

---

Let me know if you want a quick practice quiz or visual chart!
