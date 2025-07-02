
---

# 💳 JavaScript: Logical OR (`||`) vs Nullish Coalescing (`??`)

---

## 💰 Example Setup

```js
const balance = 1000;
```

---

## 🔁 Logical OR (`||`) — *Fallback when falsy*

```js
const bankName = "HDFC";
const result = bankName || "N/A";
console.log(result); // ➡️ "HDFC"
```

### ✅ How It Works:

* The `||` operator **returns the first truthy value**.
* If `bankName` is falsy (like `""`, `0`, `null`, `undefined`, or `false`), it returns `"N/A"`.

> ⚠️ Be careful: values like `0`, `""`, or `false` are **falsy**, and will trigger the fallback even though they’re valid!

---

## ❓ Nullish Coalescing (`??`) — *Handles only `null` or `undefined`*

```js
let name = null;
let displayName = name ?? "Guest";
console.log(displayName); // ➡️ "Guest"
```

### ✅ Use Case:

* Use `??` when you want to treat **only `null` or `undefined`** as “no value”.

```js
let age = 0;
let userAge = age ?? 18;
console.log(userAge); // ➡️ 0 ✅ (0 is a valid value and NOT null/undefined)
```

> ✅ Unlike `||`, the `??` operator does **not** treat `0`, `""`, or `false` as missing values.

---

### 🧠 Summary Table

\| Value      | `||` Result      | `??` Result     |
\|------------|------------------|------------------|
\| `null`     | fallback value ✅ | fallback value ✅ |
\| `undefined`| fallback value ✅ | fallback value ✅ |
\| `""`       | fallback value ✅ | original value ✅ |
\| `0`        | fallback value ✅ | original value ✅ |
\| `false`    | fallback value ✅ | original value ✅ |

---

### 🔗 Handy Reference

🔍 [Operator Lookup Tool by Josh Comeau](https://www.joshwcomeau.com/operator-lookup/)
📚 Great for quickly checking how different JS operators behave.

---

## 🧪 Bonus Example:

```js
const balance = 0;

const resultOr = balance || "Invalid Balance";     // ➡️ "Invalid Balance" ❌
const resultNullish = balance ?? "Invalid Balance"; // ➡️ 0 ✅

console.log(resultOr);        // "Invalid Balance"
console.log(resultNullish);   // 0
```

---

### ✅ Golden Tip:

> Use `||` when you want **any falsy value** to fall back.
> Use `??` when you want **only null or undefined** to fall back.

---

Let me know if you’d like a cheat sheet on **JavaScript operators** or visual diagrams for this concept! 🧾📊💡
