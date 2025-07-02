## 🌐 HTTP/3 vs HTTP/4: What Happened and What's Coming

| Feature/Aspect         | HTTP/3 (✅ Happened)                              | HTTP/4 (🔜 Coming / Planned)                                |
| ---------------------- | ------------------------------------------------- | ----------------------------------------------------------- |
| Release Status         | Released in 2022 (RFC 9114)                       | Not yet released (still in discussion/planning phase)       |
| Transport Protocol     | Uses **QUIC** (UDP-based)                         | Likely QUIC or future upgrade                               |
| Encryption             | Built-in TLS 1.3 (Always encrypted)               | Will remain encrypted by default                            |
| Multiplexing           | Yes, with no head-of-line blocking                | Will likely improve or simplify this further                |
| Performance Goals      | Faster connection setup, better for mobile        | Even more optimization, especially for modern web/apps      |
| TCP Dependency         | Removed (moved from TCP to QUIC/UDP)              | Still independent of TCP (QUIC continues or evolves)        |
| Backward Compatibility | New protocol but supports fallback to HTTP/2      | May remove legacy support for simplicity                    |
| Focus Areas            | Speed, mobile performance, connection reliability | Simplicity, modernization, clean break from legacy features |
| Adoption               | Supported by major browsers and CDNs              | Not adopted (doesn’t exist yet officially)                  |
| Official RFC?          | ✅ Yes (RFC 9114)                                 | ❌ Not yet (no RFC, under future consideration)             |

---

# 🛡️ DDoS Attack (Distributed Denial of Service)

- A **DDoS attack** floods a server or network with traffic to exhaust resources and **disrupt services**.
- Often uses **botnets** (networks of infected computers) to overload targets.
- Goal: Make the website or application **unavailable** to legitimate users 🌐❌

---

# 🌐 Structure of a Web Browser

### 🧩 Key Components

1. **User Interface (UI)**

   - What the user interacts with (address bar, back/forward button, bookmarks) 🧭

2. **Browser Engine**

   - Bridges the UI and rendering engine
   - Decides how to handle requests and updates UI 📦

3. **Rendering Engine**

   - Parses HTML & CSS, builds the visual layout 👓
   - Constructs the **Render Tree**:

     - **DOM** (HTML content)
     - **CSSOM** (CSS styles)

4. **JavaScript Engine**

   - Executes JavaScript code
   - Examples: **V8 (Chrome), SpiderMonkey (Firefox)** ⚙️

5. **Network Layer**

   - Handles communication with servers (HTTP, HTTPS, DNS) 🌍

6. **UI Backend**

   - Paints widgets like dropdowns, checkboxes, etc.
   - Uses system-level APIs to draw components 🎨

7. **Data Storage**

   - Stores website data locally:

     - **Cookies** 🍪
     - **LocalStorage / SessionStorage**
     - **IndexedDB**

---

# 🍪 Cookies

- Small text files stored in your browser to maintain **session state**, **authentication**, or **preferences**.

### 🔍 How to View Cookies:

1. Right-click → **Inspect**
2. Go to **Application** tab
3. Click on **Cookies** under the Storage section

---

# 🌍 DNS Propagation

- **DNS (Domain Name System)** translates domain names (like `google.com`) into IP addresses.
- **Propagation** = copying the new DNS records to DNS servers **around the world** 🌐
- Can take anywhere from **6 hours to 24 hours** for full update ⏱️

---

# 📜 JavaScript Overview

- Developed in **1995** by **Brendan Eich** at **Netscape** 🧠

- Initially named:

  - **Mocha** → **LiveScript** → **JavaScript**

- JavaScript is standardized by **ECMAScript** (official spec)

### 👥 TC39 Committee

- Short for **Technical Committee 39**
- Responsible for evolving JavaScript (new features, updates)

---

### 🧱 JavaScript Engine Roles

- Executes code from web pages
- Parses and interprets:

  - **HTML** using **HTML Parser**
  - **CSS** using **CSS Parser**

---

# 🧠 Helpful Developer Tips

- **Rename Symbol Shortcut**:

  - In most IDEs (like VS Code), press `F2` to rename all instances of a variable/symbol 🖋️

- **`alert()`**

  - Blocks JavaScript execution and pauses rendering until user responds
  - Used mainly for **debugging** or urgent **user messages** ⚠️

---
