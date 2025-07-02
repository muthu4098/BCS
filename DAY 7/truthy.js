// Here's your enhanced and clearly structured version of the notes, now optimized for clarity, correctness, and better understanding — with emojis for easy visualization and learning! 😎📘

// ---

// # 📚 **JavaScript Concepts: Truthy/Falsy, Objects & Optional Chaining**

// ---

// ## ✅ **Truthy vs Falsy Values in JavaScript**

// ```js
// const x = "cool";

// if (x) {
//   console.log("Awesome");
// } else {
//   console.log("Super");
// }
// ```

// ### 🔍 What’s Happening Here?

// * The string `"cool"` is a **truthy** value.
// * JavaScript treats **non-empty strings, numbers (except 0), objects, arrays** etc., as **truthy**.
// * So, `"Awesome"` will be printed ✅

// ### ⚖️ **Falsy Values in JavaScript**

// | Value       | Type         |
// | ----------- | ------------ |
// | `false`     | Boolean      |
// | `0`         | Number       |
// | `""`        | Empty String |
// | `null`      | Null         |
// | `undefined` | Undefined    |
// | `NaN`       | Not a Number |

// If a value evaluates to `false` in a boolean context, it’s considered **falsy**.

// ---

// ## 🧠 **Working with Nested Objects**

// ```js
// const csk1 = {
//   captain: "MSD",
//   color: "yellow",
//   stats: {
//     win: 5,
//     loss: 11,
//   },
// };

// const csk2 = {
//   captain: "MSD",
//   color: "yellow",
//   stats: {
//     loss: 11,
//   },
// };

// const csk3 = {
//   captain: "MSD",
//   color: "yellow",
// };

// const ipl = null;
// ```

// ---

// ## ❌ Problem: Accessing Nested Properties Safely

// ```js
// console.log(csk2.stats.win); // undefined
// console.log(csk3.stats.win); // ❌ TypeError: Cannot read property 'win' of undefined
// console.log(ipl.stats.win);  // ❌ Error
// ```

// Direct access to deep properties can break if intermediate objects are `undefined`.

// ---

// ## ✅ **Solution 1: Manual Checks (Verbose)**

// ```js
// function getWinStat(team) {
//   if (!team || !team.stats || !team.stats.win) {
//     return "Data Not found";
//   }
//   return team.stats.win;
// }
// ```

// ### Usage:

// ```js
// console.log(getWinStat(csk1)); // 5
// console.log(getWinStat(csk2)); // "Data Not found"
// console.log(getWinStat(csk3)); // "Data Not found"
// ```

// ---

// ## ✅ **Solution 2: Optional Chaining (ES2020+)**

// Cleaner and safer way using `?.`:

// ```js
// function getWinStat(team) {
//   return team?.stats?.win || "Data Not found";
// }
// ```

// ### Usage:

// ```js
// console.log(getWinStat(csk1)); // 5
// console.log(getWinStat(csk2)); // "Data Not found"
// console.log(getWinStat(csk3)); // "Data Not found"
// console.log(getWinStat(ipl));  // "Data Not found"
// ```

// ---

// ### 📌 Summary

// | Concept               | Purpose                                        |        |                                                   |
// | --------------------- | ---------------------------------------------- | ------ | ------------------------------------------------- |
// | **Truthy/Falsy**      | Determine conditional flow (`if`, loops, etc.) |        |                                                   |
// | **Optional Chaining** | Safe access to nested object properties (`?.`) |        |                                                   |
// | \*\*Logical OR \`     |                                                | \`\*\* | Fallback default values when value is `undefined` |

// ---

// Let me know if you’d like this exported to PDF or turned into a visual slide deck! 🎨📄
