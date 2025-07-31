
---

## 🟨 HTML Interview Questions & Answers

1. **What is the difference between HTML and XHTML?**

   * HTML is more lenient with syntax rules, whereas XHTML is stricter and based on XML rules, requiring well-formed code.

2. **What are semantic HTML elements?**

   * Elements that clearly describe their meaning to both the browser and developer, like `<header>`, `<footer>`, `<article>`, `<section>`.

3. **What is the purpose of the `<!DOCTYPE html>` declaration?**

   * It tells the browser to render the page in standards mode (HTML5), ensuring consistent rendering.

4. **What is the difference between block-level and inline elements?**

   * Block elements take full width and start on a new line (`<div>`, `<p>`), inline elements only take as much width as necessary and don't start on a new line (`<span>`, `<a>`).

5. **What are global attributes in HTML?**

   * Attributes that can be used on any HTML element, like `id`, `class`, `style`, `title`, `data-*`.

6. **What is the use of the `meta` tag in HTML?**

   * It provides metadata such as character encoding, viewport settings, author, description, keywords for SEO.

7. **How does the browser render HTML elements?**

   * Browser parses HTML to create the DOM tree, CSS to create the CSSOM tree, combines both into a render tree, then layouts and paints the page.

8. **What is the difference between `<section>` and `<div>`?**

   * `<section>` is semantic and indicates a standalone section, while `<div>` is a generic container with no semantic meaning.

9. **What are the differences between `<script>`, `<noscript>`, and `async`?**

   * `<script>` embeds or links JavaScript, `<noscript>` displays content if JS is disabled, `async` allows script to download asynchronously without blocking HTML parsing.

10. **What is the difference between `id` and `class` attributes?**

    * `id` is unique per element, used for single elements; `class` can be shared among multiple elements for styling or JS.

---

## 🟦 CSS Interview Questions & Answers

11. **What is the CSS box model?**

    * It consists of content, padding, border, and margin, determining the space an element occupies.

12. **What are the different types of position in CSS?**

    * `static` (default), `relative` (relative to itself), `absolute` (relative to nearest positioned ancestor), `fixed` (relative to viewport), `sticky` (switches between relative and fixed).

13. **What is the difference between `visibility: hidden` and `display: none`?**

    * `visibility: hidden` hides element but it still takes space; `display: none` removes element from layout flow.

14. **What are pseudo-classes and pseudo-elements in CSS?**

    * Pseudo-classes define a special state (`:hover`, `:focus`), pseudo-elements target parts of elements (`::before`, `::after`).

15. **How does specificity work in CSS?**

    * Specificity determines which CSS rule applies, calculated based on inline styles, IDs, classes, and element selectors.

16. **What is the difference between `em`, `rem`, `vh`, and `vw` units?**

    * `em`: relative to parent font-size
    * `rem`: relative to root font-size
    * `vh`: 1% of viewport height
    * `vw`: 1% of viewport width

17. **What are media queries and how are they used?**

    * CSS technique to apply styles conditionally based on device characteristics like screen width.

18. **How does Flexbox work?**

    * Layout model for distributing space along a single axis (row or column), allowing flexible alignment, spacing, and ordering.

19. **What is the difference between Flexbox and CSS Grid?**

    * Flexbox is one-dimensional (row OR column), Grid is two-dimensional (row AND column).

20. **What are the advantages of using preprocessors like SASS or LESS?**

    * Variables, nesting, mixins, functions, and better code organization.

---

## 🟩 JavaScript Interview Questions & Answers

21. **What is the difference between `var`, `let`, and `const`?**

    * `var` is function-scoped, `let` and `const` are block-scoped. `const` cannot be reassigned.

22. **What is hoisting in JavaScript?**

    * Variable and function declarations are moved to the top of their scope during compilation.

23. **What is the difference between `==` and `===`?**

    * `==` compares values with type coercion; `===` compares values and types (strict equality).

24. **What are arrow functions and how are they different from regular functions?**

    * Arrow functions have shorter syntax and do not have their own `this` or `arguments`.

25. **What is the event loop in JavaScript?**

    * Mechanism that handles asynchronous callbacks by executing code, collecting events, and processing them in order.

26. **What is a closure and why is it useful?**

    * A function with access to variables in its outer scope even after the outer function has returned.

27. **What is a promise and how do you use it?**

    * Object representing eventual completion or failure of an async operation; used with `.then()`, `.catch()`, or `async/await`.

28. **What are `call()`, `apply()`, and `bind()` used for?**

    * Methods to set the value of `this` in a function call.

29. **What is the difference between synchronous and asynchronous code?**

    * Synchronous blocks code execution until done; asynchronous allows non-blocking operations.

30. **How does the `this` keyword work in JavaScript?**

    * Refers to the context object in which a function is called; depends on invocation type.

---


