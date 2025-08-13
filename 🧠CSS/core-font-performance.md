
---

## ⚡ **Font Loading Strategies: Performance Magic for the Web**

*Fonts are powerful—but if summoned carelessly, they slow down your spell (page). Let’s optimize!*

---

### 1. 🏃‍♂️ **Preload Critical Fonts**

**Why?** Load important fonts *before* they’re needed = faster display!
**How?**

```html
<link rel="preload"
      href="/fonts/critical-font.woff2"
      as="font"
      type="font/woff2"
      crossorigin>
```

✅ Use for fonts in headers, hero text, or above-the-fold content.

---

### 2. 📦 **Use WOFF2 Format**

**Why?** It’s the smallest and fastest format supported by modern browsers.
**Tip:** Convert fonts to `.woff2` using tools like [Transfonter](https://transfonter.org/).

```css
@font-face {
    font-family: 'WizardFont';
    src: url('/fonts/wizard.woff2') format('woff2');
    font-display: swap;
}
```

---

### 3. 👁️ **Implement `font-display`**

**Best Spell: `font-display: swap;`**

✅ Shows fallback font immediately
✅ Swaps in custom font once loaded
🛡 Prevents invisible text (FOIT)

```css
@font-face {
    font-family: 'CustomFont';
    src: url('/fonts/custom.woff2');
    font-display: swap;
}
```

---

### 4. 🏋️‍♂️ **Limit Font Weights**

**Avoid:** loading 100, 300, 400, 500, 600, 700 unless you **actually use** all.
**Instead:**

* Use 1–2 weights max (like 400 and 700)
* Or use **variable fonts** (if supported)

```css
@font-face {
    font-family: 'CriticalFont';
    src: url('/fonts/critical-font.woff2') format('woff2');
    font-weight: 400 700;
    font-display: swap;
}
```

---

### 5. 💻 **Use System Fonts**

**Why?** They're already on the user's device—instant loading!

```css
body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}
```

✅ Great for fallback and UI-heavy apps

---

## 🔮 **Complete Font Loading Strategy**

```html
<!-- HTML Head -->
<head>
  <!-- Preconnect -->
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

  <!-- Preload -->
  <link rel="preload" 
        href="/fonts/critical-font.woff2" 
        as="font" 
        type="font/woff2" 
        crossorigin>

  <!-- Base styles -->
  <style>
    /* Step 1: Fallback first */
    body {
      font-family: system-ui, sans-serif;
    }

    /* Step 2: Load custom font */
    @font-face {
      font-family: 'CriticalFont';
      src: url('/fonts/critical-font.woff2') format('woff2');
      font-display: swap;
      font-weight: 400 700;
    }

    /* Step 3: Apply once ready */
    .fonts-loaded body {
      font-family: 'CriticalFont', system-ui, sans-serif;
    }
  </style>

  <!-- Step 4: Detect loading -->
  <script>
    if ("fonts" in document) {
      document.fonts.ready.then(() => {
        document.documentElement.classList.add('fonts-loaded');
      });
    }
  </script>
</head>
```

---

## 🧪 **Performance Monitoring – Know Your Spell Impact**

Keep an eye on:

* **🕐 Font load time**
* **⏱ First Contentful Paint (FCP)**
* **📏 Layout shifts (CLS)**
* **📡 Bandwidth usage**
* **🔍 Rendering delays**

✅ Use tools like:

* [Lighthouse](https://web.dev/measure/)
* [WebPageTest](https://webpagetest.org/)
* Chrome DevTools → Performance → Fonts

---

## 🧙‍♂️ Professor Flitwick’s Wisdom:

> “The fastest spell is the one you don’t have to cast.”
> 🪄 Use custom fonts only where needed. Don’t overload your spellbook (site) with too many incantations (font files)!

---

