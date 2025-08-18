

---

### HTML Interview Questions & Answers

1. **What does `<!DOCTYPE html>` mean?**
   It tells the browser to render the page in standards mode as an HTML5 document.

2. **What are semantic HTML elements? Give examples.**
   Elements that clearly describe their meaning, e.g., `<header>`, `<footer>`, `<article>`, `<section>`.

3. **What is the difference between `<div>` and `<span>`?**
   `<div>` is a block-level element, while `<span>` is inline. `<div>` breaks the line, `<span>` doesn’t.

4. **What is the purpose of the `<head>` tag?**
   Contains meta-information about the document like title, styles, scripts, and meta tags.

5. **How do you make a website mobile-friendly using HTML?**
   Use the viewport meta tag: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`

---

### CSS Interview Questions & Answers

1. **What is the CSS Box Model?**
   The box model describes the rectangular boxes generated for elements, consisting of content, padding, border, and margin.

2. **Explain the difference between `class` and `id` selectors.**
   `id` is unique for a single element; `class` can be shared by multiple elements.

3. **What are pseudo-classes in CSS? Give examples.**
   They define a special state of an element, e.g., `:hover`, `:focus`, `:nth-child()`.

4. **How does `position: relative` differ from `position: absolute`?**
   `relative` positions an element relative to its normal position; `absolute` positions relative to the nearest positioned ancestor.

5. **What is the difference between `em` and `rem` units?**
   `em` is relative to the font size of the parent; `rem` is relative to the root (html) font size.

---

### JavaScript Interview Questions & Answers

1. **What is the difference between `var`, `let`, and `const`?**
   `var` is function-scoped and can be redeclared; `let` and `const` are block-scoped, `const` cannot be reassigned.

2. **Explain event delegation.**
   It’s a technique where a single event listener is added to a parent element to manage events on its children.

3. **What are closures in JavaScript?**
   A closure is a function that remembers the environment in which it was created, even after the outer function has finished.

4. **How does the `this` keyword work?**
   `this` refers to the object that is executing the current function, which varies depending on how the function is called.

5. **What is the difference between `==` and `===`?**
   `==` compares values with type coercion; `===` compares both value and type without coercion.

---


---

# HTML Interview Questions (Basic to Advanced)

**Basic**

1. What does `<!DOCTYPE html>` do?

   * Declares the document type and version of HTML (HTML5 here).

2. What is semantic HTML?

   * Tags that describe their meaning, e.g., `<article>`, `<nav>`, `<footer>`.

3. Difference between block and inline elements?

   * Block elements take full width and start on new line; inline elements take only needed width and flow inline.

4. What is the purpose of the `<meta charset="UTF-8">` tag?

   * Sets the character encoding to UTF-8.

**Intermediate**
5\. How to include CSS and JavaScript in HTML?

* CSS: `<link rel="stylesheet" href="style.css">` or `<style>`
* JS: `<script src="script.js"></script>` or inline `<script>`

6. What is the difference between `<section>`, `<div>`, and `<article>`?

   * `<section>` groups related content; `<article>` represents independent content; `<div>` is generic container without meaning.

7. Explain the role of the `<form>` element and its main attributes.

   * Defines a form for user input. Key attributes: `action` (submission URL), `method` (GET or POST).

**Advanced**
8. What is the difference between `<iframe>` and `<embed>`?

* `<iframe>` embeds another HTML document; `<embed>` embeds external content like PDF, videos.

9. How does accessibility impact HTML structure?

   * Using ARIA roles, semantic tags, alt attributes improve screen reader usability.

10. What is the purpose of the `defer` and `async` attributes in `<script>` tags?

* `defer`: script executes after HTML parsing;
* `async`: script executes as soon as it downloads, without blocking HTML parsing.

---

# CSS Interview Questions (Basic to Advanced)

**Basic**

1. What are selectors?

   * Patterns used to select elements, e.g., `.class`, `#id`, `element`.

2. Explain the box model.

   * Content + padding + border + margin.

3. What are pseudo-classes? Give examples.

   * Select elements in special states, e.g., `:hover`, `:focus`.

4. Difference between `padding` and `margin`?

   * Padding is inside the border; margin is outside.

**Intermediate**
5\. What is specificity in CSS?

* Rules to determine which styles override others based on selectors’ weight.

6. Explain Flexbox and its main properties.

   * Layout module for flexible boxes; properties include `display: flex`, `justify-content`, `align-items`.

7. Difference between `relative`, `absolute`, `fixed`, and `sticky` positioning?

   * `relative`: relative to itself,
   * `absolute`: relative to nearest positioned ancestor,
   * `fixed`: relative to viewport,
   * `sticky`: toggles between relative and fixed.

**Advanced**
8\. What are CSS variables and how do you use them?

* Custom properties declared with `--var-name`, accessed with `var(--var-name)`.

9. How does the cascade and inheritance work in CSS?

   * Cascade: conflicts resolved by specificity and order;
   * Inheritance: some properties pass from parent to child.

10. Explain critical rendering path and how CSS impacts performance.

    * Sequence browser uses to render page; blocking CSS delays render; minimize CSS to speed loading.

---

# JavaScript Interview Questions (Basic to Advanced)

**Basic**

1. Difference between `var`, `let`, and `const`?

   * `var`: function-scoped, can redeclare;
   * `let`/`const`: block-scoped; `const` cannot be reassigned.

2. What are data types in JS?

   * Primitive (string, number, boolean, null, undefined, symbol), objects.

3. How do you create a function?

   * Function declaration: `function fn() {}`;
   * Expression: `const fn = function() {}`;
   * Arrow: `const fn = () => {}`.

4. Explain event bubbling.

   * Events propagate from target element up to ancestors.

**Intermediate**
5\. What are closures?

* Functions that remember variables from their lexical scope even when executed outside.

6. Difference between `==` and `===`?

   * `==` compares with type coercion; `===` compares type and value strictly.

7. What is hoisting?

   * Variable and function declarations are moved to top of their scope during compilation.

8. How does `this` work in JavaScript?

   * Context depends on how function is called (object method, global, constructor, arrow function).

**Advanced**
9\. Explain promises and async/await.

* Promises handle async operations; async/await syntax makes promise handling easier.

10. What is the event loop?

    * Mechanism that handles async callbacks by moving tasks from the message queue to the call stack.

11. How does prototypal inheritance work?

    * Objects inherit properties/methods from prototype objects.

12. What are modules in JavaScript?

    * Code units imported/exported using `import` and `export` for better organization.

---


---

## 🔹 HTML & Accessibility

1. **What are `<ul>`, `<ol>`, and `<dl>`?**

   * `<ul>`: unordered list, `<ol>`: ordered list, `<dl>`: description list (terms and definitions).

2. **What is the `data-*` attribute in HTML?**

   * Stores custom data on elements; accessible via JavaScript using `element.dataset`.

3. **Difference between HTML elements and tags?**

   * Tag: `<p>` or `</p>`. Element: entire structure including tags and content.

4. **How to add special characters like `©` in HTML?**

   * Use character entities: `&copy;` for ©.

5. **What are `aria-*` attributes?**

   * Improve accessibility by providing additional semantic info (e.g. `aria-label`, `aria-hidden`).

---

## 🔹 CSS & Layout

6. **How to center a div vertically and horizontally?**

   ```css
   display: flex;
   justify-content: center;
   align-items: center;
   ```

7. **What is `float` in CSS and its limitations?**

   * Used to wrap text around elements. Limitations: breaks layout, difficult to manage without clear fixes.

8. **Difference between grouping and nesting in CSS?**

   * Grouping: applying styles to multiple selectors. Nesting: (in Sass) placing selectors inside each other for hierarchy.

9. **What is `box-sizing`?**

   * Controls whether padding/border are included in element's total size. Use `border-box` to include them.

10. **What is BEM naming convention?**

* Block\_\_Element--Modifier, e.g. `.card__title--large` (maintains CSS modularity and clarity).

11. **What is a media query?**

* Used for responsive design. Example:

```css
@media (max-width: 768px) {
  body { font-size: 14px; }
}
```

12. **What is `normalize.css`?**

* A CSS file to make browsers render elements consistently.

13. **What are CSS preprocessors?**

* Tools like Sass/Less that extend CSS with variables, nesting, mixins.

14. **Difference between pseudo-elements and pseudo-classes?**

* Pseudo-classes (`:hover`) target element states; pseudo-elements (`::before`) style parts of elements.

15. **When to use Flexbox vs Grid?**

* Flexbox: one-dimensional layout (row/column).
  Grid: two-dimensional (rows + columns).

---

## 🔹 JavaScript Core

16. **Attribute vs Property in DOM?**

* Attributes are in HTML; properties are in DOM objects. They can differ.

17. **`preventDefault()` vs `stopPropagation()`?**

* `preventDefault()`: stops default behavior (e.g. link click).
* `stopPropagation()`: stops event bubbling up.

18. **What is CORS?**

* Cross-Origin Resource Sharing: browser security feature; blocks requests to different origins unless allowed.

19. **What are `apply()`, `call()`, and `bind()`?**

* All invoke functions with a custom `this`. `bind()` returns a new function.

20. **What is prototype-based inheritance?**

* Objects can inherit properties from other objects via prototypes.

21. **What is hoisting?**

* JS moves variable/function declarations to the top of their scope.

22. **What are ES6 features?**

* Includes arrow functions, `let/const`, template literals, destructuring, spread/rest, default parameters.

---

## 🔹 Async JavaScript

23. **What is the event loop in JS?**

* Handles async tasks by managing the call stack and task queue.

24. **What is callback hell?**

* Multiple nested callbacks that make code hard to read. Fixed using Promises or `async/await`.

25. **Difference: Promises vs Async/Await vs Callbacks?**

* Callbacks: pass function as param.
* Promises: cleaner async logic.
* `async/await`: syntactic sugar over Promises.

26. **What are memory leaks and how to avoid?**

* Unused memory stays allocated. Avoid by nullifying unused references, unbinding listeners.

27. **What is debouncing and throttling?**

* Debounce: delay a function call. Throttle: limit how often a function runs.

28. **How to implement infinite scroll?**

* Detect when near bottom of page, fetch more data, and append to DOM.

---

## 🔹 Build Tools & Performance

29. **What is Webpack?**

* A module bundler that compiles JS, CSS, assets into optimized output.

30. **What is tree-shaking?**

* Removes unused code from final bundle during build process.

31. **What are service workers?**

* JS files that run in the background to cache assets and enable offline support.

32. **What is server-side rendering (SSR)?**

* Rendering content on server before sending HTML to browser. Improves SEO and perceived speed.

33. **What are micro-frontends?**

* Architecture where front-end is split into smaller independent apps.

---

## 🔹 Images & Security

34. **What is `srcset` in `<img>`?**

* Provides different image versions for different screen sizes/resolutions.

35. **What is lazy loading in images?**

* Load images only when they enter the viewport using `loading="lazy"`.

36. **What is Cross-Site Scripting (XSS)?**

* Injecting malicious scripts into web pages. Prevent with input sanitization and escaping.

---

## 🔹 Testing & Debugging

37. **What are types of testing in front-end?**

* Unit testing, integration testing, end-to-end (e2e) testing.

38. **How to test accessibility?**

* Use tools like Lighthouse, axe, test keyboard nav and screen reader behavior.

39. **How to write a polyfill?**

* A JS fallback for unsupported features. Example:

```js
if (!Array.prototype.includes) {
  Array.prototype.includes = function(value) {
    return this.indexOf(value) > -1;
  };
}
```

---

## 🔹 Frontend Frameworks (React example)

40. **What is the Virtual DOM?**

* In-memory copy of the DOM used by libraries like React to efficiently update UI.

41. **What are React Hooks (e.g. useMemo/useCallback)?**

* Functions to use state and side-effects in functional components.

42. **Controlled vs Uncontrolled Components?**

* Controlled: state is managed via React.
* Uncontrolled: uses direct DOM access.

43. **What is React Fiber?**

* Rewrites React’s core to support async rendering, better scheduling.

44. **HOCs vs Composition?**

* HOC: function that returns a new component.
* Composition: nest components inside each other.

45. **When to use Context API vs Redux?**

* Context: small global state (theme).
* Redux: large, complex global state.

46. **What is lazy loading in frameworks?**

* Load components/routes on demand using `React.lazy` or `dynamic import()`.

47. **How to structure large front-end apps?**

* Use feature-based folders, separation of concerns, reusable components, services, and state modules.

---

## 🔹 General / Experience

48. **What is a performance audit?**

* Use Lighthouse to measure metrics (LCP, CLS, TTI). Optimize assets, reduce blocking scripts.

49. **What is hydration in SSR apps?**

* React takes over the server-rendered HTML and binds JS interactivity to it.

50. **Explain a UI/UX challenge you solved.**

* (Example) Redesigned mobile form by breaking it into steps, improving completion rate by 30%.

---




