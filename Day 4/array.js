
// //Here's your enhanced and clearly structured version of the notes, now organized for readability, understanding, and accuracy — with emojis for easier recall and learning 🎓📘.

// //---

// # 📚 **JavaScript Basics: Variables, Arrays & Objects**

// ---

// ## ✏️ **Storing Marks Using Variables**

// ```js
// var english = 70; 
// var maths = 90;
// var science = 97;
// var social = 80;
// ```

// While this works, it's **not efficient** for managing large data sets.

// ---

// ## 📦 **Group Similar Data Using Arrays**

// Instead of using multiple variables, use an **array**:

// ```js
// var marks = [70, 90, 97, 80];
// console.log(marks);          // [70, 90, 97, 80]
// console.log(marks.length);   // 4
// ```

// ---

// ## 🔢 **Accessing Array Elements by Index**

// ```js
// console.log(marks[0]); // 70
// console.log(marks[1]); // 90
// console.log(marks[2]); // 97
// console.log(marks[3]); // 80
// console.log(marks[4]); // undefined ✅
// ```

// > 📌 Arrays are **zero-indexed**, meaning indexing starts at `0`.

// ---

// ## ❓ **undefined vs not defined**

// | Concept       | Meaning                                                       |
// | ------------- | ------------------------------------------------------------- |
// | `undefined`   | Variable is declared but no value assigned                    |
// | `not defined` | Variable was **never declared** in the program (throws error) |

// Example:

// ```js
// var a;
// console.log(a); // undefined

// console.log(b); // ❌ ReferenceError: b is not defined
// ```

// ---

// ## 🧑‍🎓 **Creating Objects in JavaScript**

// Objects group related **key–value pairs**:

// ```js
// var student = {
//   name: "Arjuna",
//   age: 25,
//   college: "SAC",
//   isRich: true,
// };
// ```

// ---

// ## 🔑 **Accessing Object Properties**

// There are **two ways** to access values in an object:

// ### 1. **Dot Syntax**

// ```js
// console.log(student.college); // SAC
// ```

// ### 2. **Bracket (Box) Syntax**

// ```js
// console.log(student["college"]); // SAC
// ```

// ✅ Use **bracket syntax** when:

// * The key contains **spaces or special characters**
// * You're using **variables** to access keys

// ---

// ## ⚠️ **Avoid Common Mistake**

// ```js
// // Incorrect ❌ - will cause error
// console.log(student.personal hobbies); // ❌ Syntax Error
// ```

// ✅ Correct:

// ```js
// console.log(student["personal hobbies"]);
// ```

// ---

// ## 🎯 **Object with Array & Special Key**

// ```js
// var student = {
//   name: "Arjuna",
//   age: 20,
//   college: "SAC",
//   isRich: true,
//   "personal hobbies": ["Hockey", "Traveling", "Cricket"],
//   x: ["personal hobbies"], // key contains string, not a reference
// };
// ```

// ### 🔍 Accessing the Hobby:

// ```js
// console.log(student["personal hobbies"][2]); // Cricket
// ```

// > ❗ `x` is just a key that stores a string array with one item: `"personal hobbies"`

// ```js
// console.log(student.x[0]); // "personal hobbies"
// ```

// ---

// ### ✅ **Summary**

// | Concept        | Description                              |
// | -------------- | ---------------------------------------- |
// | `Array`        | Stores list of values, accessed by index |
// | `Object`       | Stores key–value pairs, accessed by key  |
// | `undefined`    | Declared but no value                    |
// | `not defined`  | Variable is not declared                 |
// | Dot Syntax     | Use when key is valid identifier         |
// | Bracket Syntax | Use when key has spaces or is dynamic    |

// ---

// Let me know if you'd like this saved as a PDF, turned into flashcards, or used in a lesson deck! 🎓📑
