// Here's your enhanced, well-structured, and easy-to-read version of the notes. I’ve added emojis to make the concepts more memorable and explanations more clear and factually accurate. 🚀💡

// ---

// # 📘 **JavaScript Strings – Properties & Methods**

// ---

// ## 🔤 **Declaring a String Variable**

// ```js
// var name = "Gopi";
// ```

// ---

// ## 🔁 **String Methods – Changing Case**

// ```js
// console.log(name.toUpperCase()); // Output: "GOPI"
// console.log(name.toLowerCase()); // Output: "gopi"
// ```

// * ✅ These methods return **new strings**.
// * ❗ Strings in JavaScript are **immutable**, meaning original strings **cannot be changed**, only **new strings are returned**.

// ---

// ## 📏 **String Length (Property)**

// ```js
// console.log(name.length); // Output: 4
// ```

// * `.length` is a **property**, not a method — so no parentheses `()` needed.

// ---

// ## ✂️ **Trimming Whitespace**

// ```js
// var quote = "                               Do Good, Be Good  ";
// console.log(quote.length); // Original length with spaces
// ```

// Use `.trim()`, `.trimStart()`, and `.trimEnd()` to remove spaces:

// ```js
// var trimmedQuote = quote.trim();
// var trimAndLowerQuote = quote.trim().toLowerCase();
// ```

// ### 🧼 Dot Chaining:

// ```js
// var result = quote.trim().toLowerCase(); 
// console.log(result); // Output: "do good, be good"
// ```

// > You can chain multiple string methods together for cleaner code. 🎯

// ---

// ## 🔁 **Repeat a String**

// ```js
// console.log(quote.repeat(5)); // Repeats the string 5 times
// ```

// * `.repeat(n)` repeats the string **`n` times**.
// * Useful for testing or creating patterns quickly.

// ---

// ## 💳 **Padding Strings (for formatting)**

// ```js
// var balance = "30000";
// console.log(balance.padStart(10)); // Output: "     30000"
// ```

// * `.padStart(totalLength)` pads the string from the **left** with spaces (or a custom character).
// * Useful for aligning numbers or text in tables.

// ---

// ### 📝 Summary of Key Concepts

// | Concept                   | Description                                              |
// | ------------------------- | -------------------------------------------------------- |
// | `.toUpperCase()`          | Converts string to all uppercase letters 🔠              |
// | `.toLowerCase()`          | Converts string to all lowercase letters 🔡              |
// | `.length`                 | Property that returns number of characters 🔢            |
// | `.trim()`                 | Removes whitespace from both ends ✂️                     |
// | `.repeat(n)`              | Repeats the string `n` times 🔁                          |
// | `.padStart(n)`            | Adds padding at the beginning to reach length `n` 📏     |
// | **Strings are immutable** | You can't change them; you get a new string each time 🔒 |

// ---

// Let me know if you'd like this turned into a printable cheat sheet or PDF! 📄✨
