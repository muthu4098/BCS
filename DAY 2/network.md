---
# 📅 **Day 2 – Deeper Dive into the Web & JavaScript**
---

## 🔌 **Types of Network Connections**

There are two main ways devices communicate over the internet:

### 1. 📧 **TCP (Transmission Control Protocol)**

- Ensures **reliable** data delivery (no data loss)
- Used in applications like **email, file transfer, web pages**
- ❗ Can have **lag/slowness** due to error checking

### 2. 📺 **UDP (User Datagram Protocol)**

- **Faster**, but doesn't guarantee all data arrives
- Used in **live streams, gaming, video calls**
- ⚠️ Data loss is acceptable for speed

---

## 🧱 **IP Packets & Server Communication**

- A server **sends data in small units** called **IP packets**
- These packets are reassembled by the client
- 🔁 This is part of how the internet achieves **"connectionless communication"**

---

## 🌐 **HTTP Protocol Basics**

### What is HTTP?

HTTP (**HyperText Transfer Protocol**) is the foundation of **data communication** on the web.

### ✅ HTTP Versions:

- **HTTP/1.1** – Traditional version
- **HTTP/2** – Multiplexing: sends multiple requests over one connection
- **HTTP/3** – Uses **UDP** with better speed and security via QUIC protocol

---

### 🚨 HTTP Status Codes:

| Code | Category         | Description                         |
| ---- | ---------------- | ----------------------------------- |
| 1xx  | ℹ️ Informational | Request received, continue          |
| 2xx  | ✅ Success       | Request succeeded                   |
| 3xx  | 🔁 Redirection   | Resource moved or cached            |
| 4xx  | ❌ Client Error  | Request error (e.g., 404 Not Found) |
| 5xx  | ⚠️ Server Error  | Server failed to process request    |

---

## 🔁 **CRUD Operations (HTTP Methods)**

- **POST** – Create ➕ (e.g., liking a photo on Instagram)
- **GET** – Read 👀 (fetch data)
- **PUT** – Update ✏️ (edit data)
- **DELETE** – Remove ❌ (delete data)

---

## 🧠 **Browser Engines**

Different browsers use different engines to **render content** and **execute JavaScript**:

| Engine Type          | Chrome | Firefox      |
| -------------------- | ------ | ------------ |
| 🖼️ Render Engine     | Blink  | Gecko        |
| ⚙️ JavaScript Engine | V8     | SpiderMonkey |

- **HTML Parser** builds the **DOM Tree** (Document Object Model)
- **CSS Parser** builds the **CSSOM Tree** (CSS Object Model)

📚 Together, they form the **Render Tree**.

---

## ⌨️ **Helpful Coding Shortcuts**

- `! + Tab` → Generates basic HTML boilerplate
- `Ctrl + /` → Comment or uncomment selected code lines

---

## 💡 **HTML: A Forgiving Language**

HTML is **lenient** with syntax errors (e.g., missing closing tags).
Browsers try to **auto-correct** mistakes to ensure content still displays.

---

## 🔢 **JavaScript Data Types**

### ✅ **Primitive Data Types** (Immutable)

1. `Number`
2. `String`
3. `Boolean`
4. `null`
5. `undefined`
6. `Symbol`
7. `BigInt`

### 📦 **Non-Primitive Data Types** (Mutable)

- `Object`
- `Array`
- `Function`

---

## ➕ **Operator Overloading in JavaScript**

The `+` operator can be used in **two different ways**:

### 1. **String Concatenation**:

```js
console.log("cool" + "awesome"); // Output: "coolawesome"
```

### 2. **Implicit Type Coercion**:

JavaScript tries to **convert types automatically**:

```js
console.log(5 + "9"); // "59" (Number + String → String)
console.log(5 - "9"); // -4   (String converted to Number)
```

### 3. **Explicit Type Conversion**:

Use functions like `parseInt()` or `parseFloat()`:

```js
console.log(5 + parseInt("9")); // 14
console.log(5 + parseInt("9.7")); // 14 (parses only integer part)
console.log(5 + parseFloat("9.7")); // 14.7
```

---

## 🤯 **Fun Fact: NaN is Not Equal to NaN**

```js
console.log(NaN === NaN); // false
```

- `NaN` means "Not a Number"
- It's the **only JavaScript value not equal to itself** 😲

---
