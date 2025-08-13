
---

## 🧙‍♀️ Typography Class with Professor McGonagall 📖✨

Welcome, text-wizards! Innaikku *text stylings* pathi ellam oru deep dive pannaporom. Spells mathiri, text styles-um proper-a blend pannina dhaan magic! 🔮

---

### 📏 **Font Size – Valiya oru secret**

Like wand length, font size-um right-a irukkanum.

```css
:root {
  --text-sm: 0.875rem;  /* 14px */
  --text-base: 1rem;    /* 16px */
  --text-lg: 1.125rem;  /* 18px */
}
```

❌ **Wrong Example**:

```css
font-size: 13.5px; /* Odd sizing */
```

✅ **Right Example**:

```css
font-size: var(--text-lg); /* Consistent scale */
```

🎯 **Task**:
Create font sizes for:

* 🔠 Main Headline
* 📰 Subheading
* 📖 Article text
* 🖼 Image caption

---

### 💪 **Font Weight – Emphasis spell**

```css
.spell-card {
  font-weight: 400; /* Normal */
}

.spell-title {
  font-weight: 700; /* Bold */
}

.spell-note {
  font-weight: 300; /* Light */
}
```

📌 Use max 2-3 weights. Illa na, too much power = chaos! 😅

🎯 **Task**:
Design a spell card with:

* Heavy title
* Normal text
* Light footnote

---

### ✒️ **Font Style – Ancient Scrolls Style**

```css
.incantation {
  font-style: italic;
  color: #540099;
}

.historical-note {
  font-style: italic;
  letter-spacing: 0.02em;
}
```

❌ **Overdo panna hard to read**:

```css
font-style: italic;
font-weight: bold;
text-transform: uppercase;
```

🎯 **Task**:
Style a potion recipe with:

* 🧪 Title (normal)
* 🌿 Ingredients (italic?)
* 📜 Instructions
* 🔔 Notes (maybe different color)

---

### ⚡ **Text Transform – Text Shape-shifting**

```css
.button {
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.title {
  text-transform: capitalize;
}

.spell-code {
  text-transform: none;
}
```

🎯 **Task**:
For a Magical Menu:

* 🍽 Restaurant name (ALL CAPS)
* 🍲 Section headers (Capitalize)
* 🧁 Dish names (capitalize)
* 📋 Descriptions (normal)
* 💰 Prices (aligned right?)

---

### 📐 **Text Align – Flow of Content**

```css
.headline {
  text-align: center;
}

.ingredients td:last-child {
  text-align: right;
}

.article-column {
  text-align: justify;
  hyphens: auto;
}
```

🎯 **Task**:
Design a newspaper with:

* 📰 Headline (center)
* ✍️ Subhead (left)
* 🧾 Article text (justify + hyphens)
* 🗣 Pull quote (maybe center)
* 📷 Caption (smaller, italic?)

---

### ✨ **Text Decoration – Underlines & Magic Marks**

```css
.spell-link {
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s;
}

.spell-link:hover {
  border-color: currentColor;
}

.outdated-spell {
  text-decoration: line-through;
}
```

🎯 **Task**:
Create textbook styles for:

* 📚 Chapter links (underline on hover)
* ⚠ Deprecated spells (strikethrough)
* ✨ Magical notes (wavy underline)

---

### ✉️ **Letter Spacing – Nadakkira distance**

```css
.title {
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.hero-text {
  font-size: 4rem;
  letter-spacing: -0.02em;
}
```

🎯 **Task**:
Magical poster with:

* 🎆 Title (big + spaced)
* 🌟 Subtitle (normal)
* 🔮 CTA button (clear spacing)
* 📅 Event details (compact, readable)

---

### ↕️ **Line Height – Vertical Rhythm**

```css
.content {
  line-height: 1.6;
  max-width: 65ch;
}

h1, h2 {
  line-height: 1.2;
}

.button {
  line-height: 1;
}
```

🎯 **Task**:
Write a magical article with:

* 🧙 Main title (tight spacing)
* 🧵 Paragraphs (loose, readable)
* 📜 Blockquotes (extra spacing maybe)
* 🧾 List items (clean)

---

## 🎭 Final Spell: Combine It All

🎯 **Final Task**:
Create a complete **Magical Style Guide** using:

* Font sizes
* Font weights
* Decorations
* Alignments
* Letter & line spacing
* Transforms & styles

🧪 Use all spells wisely!

---

## 🎉 **Lesson Wrap-up**

💡 Typography = Magical system
🪄 Use:

* Clear hierarchy
* Consistent values
* Readability focus
* Responsive test
* Magical balance

---

### ✨ Dumbledore’s Final Words:

> "Typography-la oru alchemy irukku… not in the spells alone, but in the harmony they create."

---

