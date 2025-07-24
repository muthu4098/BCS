---
# 📅 **Day 1 - Introduction to Web Development**
---

## 🌐 **Introduction to the Browser**

A **browser** (like Chrome, Firefox, or Safari) is a software application that helps users **access, retrieve, and view websites** and web applications.

---

## 💬 **What Languages Does the Browser Understand?**

The browser understands **three core web technologies**:

1. 🧱 **HTML** – HyperText Markup Language (Structure)
2. 🎨 **CSS** – Cascading Style Sheets (Design & Layout)
3. ⚙️ **JavaScript** – For interactivity and logic

> These are the essential building blocks of web pages.

---

## 🧠 **Multiple Types of Engines Inside the Browser**

Browsers use **engines** to process and display web content. There are mainly two types:

### 🔧 **Rendering Engine**

Responsible for displaying the **visual content** of a webpage.

- Parses **HTML & CSS**
- Converts code into pixels on screen
- **Chrome's rendering engine**: `Blink`

### 💡 **JavaScript Engine**

Executes **JavaScript code** (logic, interactivity).

- Parses and runs JS
- **Chrome's JavaScript engine**: `V8`

---

## ⌨️ **Helpful Keyboard Shortcuts**

🖱️ Boost your coding efficiency with these shortcuts:

- ⬆️ `Alt + ↑ / ↓` – Move selected line(s) up or down
- 😀 `Windows + "."` – Open Emoji Picker

---

## 📚 **Reference Snippets**

### 🔤 **Markdown**

Write notes or documentation with readable formatting.

### 🐍 Python Example:

```py
print("Hello, world")
```

### 📜 JavaScript Example:

```js
console.log("Hello, world");
```

---

## 📊 **Sample Table: Monthly Savings**

| 🗓️ Month | 💰 Savings |
| -------- | ---------- |
| January  | \$250      |
| February | \$80       |
| March    | \$400      |

---

## 🧩 **Full Stack Overview**

| Layer           | Description                                |
| --------------- | ------------------------------------------ |
| 🎨 **Frontend** | What the user sees (HTML, CSS, JS)         |
| 🛠️ **Backend**  | Server logic, APIs (Node.js, Python, etc.) |
| 🗄️ **Database** | Data storage (MySQL, MongoDB, etc.)        |

---

## 🖥️ **Presentation Layer**

This is the **user interface** – everything the user interacts with visually. It lives in the **frontend** and is built using **HTML, CSS, and JavaScript**.

---
Sure! Here's a well-structured, factually accurate, and visually enhanced version of your notes with clear sections and added emojis to make the content more engaging and understandable:

---

# 📱 Mobile vs Web Applications

### 🧠 **Key Differences**

| Feature      | Mobile Application            | Web Application                          |
| ------------ | ----------------------------- | ---------------------------------------- |
| Platform     | Native (iOS/Android)          | Cross-platform (mobile, tablet, desktop) |
| Installation | Requires download & updates   | Access via browser, no installation      |
| Types        | iOS (Swift), Android (Kotlin) | Static (HTML), Dynamic (interactive)     |
| Data Update  | Individual to device          | Shared — affects all users               |

---

## 📲 Mobile Development

* **iOS**: Developed using **Swift** (Apple’s native language) 🍏
* **Android**: Developed using **Kotlin** 🤖

---

## 🌐 Web Application

* **Static Website**: Only HTML/CSS; doesn’t change per user
* **Dynamic Website**: User interaction affects data and other users
* **Cross-Platform Compatibility**: Works across mobile, tablet, desktop 💻📱📲

---

# 🧱 Web Architecture

### 🧩 Three-Tier Architecture

1. **Front-End**: UI/UX (HTML, CSS, JavaScript)
2. **Back-End**: Business logic (Node.js, Python, Java, etc.)
3. **Database**: Stores data (MySQL, MongoDB)

📌 *Why separate?*
For **modularity**, **security**, and **scalability**.

---

# 🌐 Website Structure & Technologies

* **Rendering Engine**: Converts HTML + CSSOM to visual page
* **Render Tree** = DOM + CSSOM
* **Browser**: Hosts the rendering engine
* **Chrome, Edge, Brave** → Chromium-based 🧩
* **Internet Explorer**: Declined due to poor UX 😞
* **Google**: Primarily an **advertising** company 📈

---

## ⚙️ Webpack & Babel

* **Webpack**: Bundles JS files into a single file for browsers
* **Babel**: JavaScript compiler

  * Transpiles modern ES6+ code to older JS
  * Uses plugins to transform syntax
  * Supports features like **uglification** (minification)

👉 *Used in React projects to convert code for browser compatibility*

---

# 🌍 Internet Infrastructure

### 🌐 Domain Names

* Managed by **Domain Name Providers**
* Translated via **DNS (Domain Name Server)** 🧭

### 🛰️ CDN (Content Delivery Network)

* **Origin Server** ↔ **CDN Server** ↔ **User**
* Ensures faster, localized content delivery

---

# 🔐 Ports & Protocols

* **Port 80**: HTTP (Unsecure)

* **Port 443**: HTTPS (Secure) 🔒

* **TCP** (Transmission Control Protocol):

  * Ensures **reliable**, **ordered**, **error-checked** delivery
  * Uses **3-way handshake** (SYN → SYN-ACK → ACK)
  * Used for: Web browsing 🌐, File transfer 📁, Emails 📧

* **UDP** (User Datagram Protocol):

  * **Faster**, no reliability guarantee
  * Used for: Streaming 🎥, Gaming 🎮, Calls 📞
  * Types:

    * **Unicast**: One-to-one
    * **Multicast**: One-to-many
    * **Broadcast**: Everyone (e.g., livestream)

---

## 🌊 How is the World Connected?

* Through **Submarine Optical Fiber Cables (OFC)** 🐬
* Real-time global connectivity
* **Check out**: [Submarine Cable Map 🌐](https://www.submarinecablemap.com/)

---

# 📶 Networking Essentials

* **Ping**: Measures response time of data packet 🏓

* **IP Packets**: Carry data across internet

* **HTTP** (Hypertext Transfer Protocol):

  * Version History:

    * 📜 **HTTP 0.9** (1991) – One-line request/response
    * 🧱 **HTTP 1.0** (1996) – One request per connection
    * 🔁 **HTTP 1.1** – Persistent connections, pipelining, response queuing
    * 🚀 **HTTP 2** (2015) – Multiplexing (parallel requests over 1 connection)
    * 🌐 **HTTP 3** (2019) – Built on QUIC (UDP-based, faster)

* **HTTPS**: Secure version of HTTP

  * Often paired with **HTTP/2** for performance 🔐⚡

---

## 📊 HTTP Status Codes

| Code | Type          | Meaning                         |
| ---- | ------------- | ------------------------------- |
| 1xx  | Informational | Request received, processing    |
| 2xx  | Success       | Action completed successfully ✅ |
| 3xx  | Redirection   | Further action needed ↪️        |
| 4xx  | Client Error  | Problem with request ❌          |
| 5xx  | Server Error  | Server failed to fulfill 💥     |

---

# 🔁 HTTP Methods (CRUD)

* **POST** – Create
* **GET** – Read
* **PUT** – Update
* **DELETE** – Delete

---

# 🧠 JavaScript Overview

* **Dynamically Typed** – Types decided at runtime
* Variable **declaration** = variable creation
* Two “bottom” values: `undefined`, `null`
* `typeof()` always returns a **string**

### 📦 Data Types

#### 🔹 Primitive

* `string`
* `number`
* `boolean`
* `undefined`
* `null`

#### 🔸 Non-Primitive (Reference)

* `object`
* `function`

### ➕ Overloaded Operators

Examples:

* `undefined + null` → NaN
* `undefined + 3` → NaN
* `undefined + undefined` → NaN

---

# ⚡ Developer Shortcuts

* `! + <Tab>` – HTML boilerplate
* `Ctrl + /` – Toggle comment
* `Ctrl + Shift + D` – Duplicate current line

---

# 📚 Assignment Idea

### 🔍 Explore: **HTTP/2 vs HTTP/3**

* Compare:

  * Performance ⚡
  * Protocol base (TCP vs UDP)
  * Use cases (streaming, websites, etc.)

---
---

# 📱 Mobile vs Web Applications

### 🧠 **Key Differences**

| Feature      | Mobile Application            | Web Application                          |
| ------------ | ----------------------------- | ---------------------------------------- |
| Platform     | Native (iOS/Android)          | Cross-platform (mobile, tablet, desktop) |
| Installation | Requires download & updates   | Access via browser, no installation      |
| Types        | iOS (Swift), Android (Kotlin) | Static (HTML), Dynamic (interactive)     |
| Data Update  | Individual to device          | Shared — affects all users               |

---

## 📲 Mobile Development

* **iOS**: Developed using **Swift** (Apple’s native language) 🍏
* **Android**: Developed using **Kotlin** 🤖

---

## 🌐 Web Application

* **Static Website**: Only HTML/CSS; doesn’t change per user
* **Dynamic Website**: User interaction affects data and other users
* **Cross-Platform Compatibility**: Works across mobile, tablet, desktop 💻📱📲

---

# 🧱 Web Architecture

### 🧩 Three-Tier Architecture

1. **Front-End**: UI/UX (HTML, CSS, JavaScript)
2. **Back-End**: Business logic (Node.js, Python, Java, etc.)
3. **Database**: Stores data (MySQL, MongoDB)

📌 *Why separate?*
For **modularity**, **security**, and **scalability**.

---

# 🌐 Website Structure & Technologies

* **Rendering Engine**: Converts HTML + CSSOM to visual page
* **Render Tree** = DOM + CSSOM
* **Browser**: Hosts the rendering engine
* **Chrome, Edge, Brave** → Chromium-based 🧩
* **Internet Explorer**: Declined due to poor UX 😞
* **Google**: Primarily an **advertising** company 📈

---

## ⚙️ Webpack & Babel

* **Webpack**: Bundles JS files into a single file for browsers
* **Babel**: JavaScript compiler

  * Transpiles modern ES6+ code to older JS
  * Uses plugins to transform syntax
  * Supports features like **uglification** (minification)

👉 *Used in React projects to convert code for browser compatibility*

---

# 🌍 Internet Infrastructure

### 🌐 Domain Names

* Managed by **Domain Name Providers**
* Translated via **DNS (Domain Name Server)** 🧭

### 🛰️ CDN (Content Delivery Network)

* **Origin Server** ↔ **CDN Server** ↔ **User**
* Ensures faster, localized content delivery

---

# 🔐 Ports & Protocols

* **Port 80**: HTTP (Unsecure)

* **Port 443**: HTTPS (Secure) 🔒

* **TCP** (Transmission Control Protocol):

  * Ensures **reliable**, **ordered**, **error-checked** delivery
  * Uses **3-way handshake** (SYN → SYN-ACK → ACK)
  * Used for: Web browsing 🌐, File transfer 📁, Emails 📧

* **UDP** (User Datagram Protocol):

  * **Faster**, no reliability guarantee
  * Used for: Streaming 🎥, Gaming 🎮, Calls 📞
  * Types:

    * **Unicast**: One-to-one
    * **Multicast**: One-to-many
    * **Broadcast**: Everyone (e.g., livestream)

---

## 🌊 How is the World Connected?

* Through **Submarine Optical Fiber Cables (OFC)** 🐬
* Real-time global connectivity
* **Check out**: [Submarine Cable Map 🌐](https://www.submarinecablemap.com/)

---

# 📶 Networking Essentials

* **Ping**: Measures response time of data packet 🏓

* **IP Packets**: Carry data across internet

* **HTTP** (Hypertext Transfer Protocol):

  * Version History:

    * 📜 **HTTP 0.9** (1991) – One-line request/response
    * 🧱 **HTTP 1.0** (1996) – One request per connection
    * 🔁 **HTTP 1.1** – Persistent connections, pipelining, response queuing
    * 🚀 **HTTP 2** (2015) – Multiplexing (parallel requests over 1 connection)
    * 🌐 **HTTP 3** (2019) – Built on QUIC (UDP-based, faster)

* **HTTPS**: Secure version of HTTP

  * Often paired with **HTTP/2** for performance 🔐⚡

---

## 📊 HTTP Status Codes

| Code | Type          | Meaning                         |
| ---- | ------------- | ------------------------------- |
| 1xx  | Informational | Request received, processing    |
| 2xx  | Success       | Action completed successfully ✅ |
| 3xx  | Redirection   | Further action needed ↪️        |
| 4xx  | Client Error  | Problem with request ❌          |
| 5xx  | Server Error  | Server failed to fulfill 💥     |

---

# 🔁 HTTP Methods (CRUD)

* **POST** – Create
* **GET** – Read
* **PUT** – Update
* **DELETE** – Delete

---

# 🧠 JavaScript Overview

* **Dynamically Typed** – Types decided at runtime
* Variable **declaration** = variable creation
* Two “bottom” values: `undefined`, `null`
* `typeof()` always returns a **string**

### 📦 Data Types

#### 🔹 Primitive

* `string`
* `number`
* `boolean`
* `undefined`
* `null`

#### 🔸 Non-Primitive (Reference)

* `object`
* `function`

### ➕ Overloaded Operators

Examples:

* `undefined + null` → NaN
* `undefined + 3` → NaN
* `undefined + undefined` → NaN

---

# ⚡ Developer Shortcuts

* `! + <Tab>` – HTML boilerplate
* `Ctrl + /` – Toggle comment
* `Ctrl + Shift + D` – Duplicate current line

---

# 📚 Assignment Idea

### 🔍 Explore: **HTTP/2 vs HTTP/3**

* Compare:

  * Performance ⚡
  * Protocol base (TCP vs UDP)
  * Use cases (streaming, websites, etc.)

---

