## Exercises 40
 ### Reverse a String
  Reverse any given string using spread, array reverse, and join.

  ## Answer
  ```js
  const sample = 'Hello World';

// ===== YOUR CODE BELOW =====
// Write a function to reverse a string using spread, reverse & join
const reverseString = (str) => {
  // Your code here
 
  
  return [...str].reverse().join("")
};

console.log(reverseString(sample));
```
## Output
```js
dlroW olleH
```
===================================
## Exercises 41
### Title Case Converter
Convert a sentence into title case using string and array methods.
## Answer
```js
const sentence = 'mastering javascript is fun';

// ===== YOUR CODE BELOW =====
// Write a function to convert sentence to title case
const toTitleCase = (str) => {
  // Your code here
 return str
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
};

console.log(toTitleCase(sentence));
```
## Output
```js
Mastering Javascript Is Fun
```
=================================================
## Exercise 42
 Determine if a string is a palindrome ignoring case and non-alphanumerics.
 ## Answer
 ```js
 const inputs = ['Madam', 'RaceCar!', 'Hello'];

// ===== YOUR CODE BELOW =====
// Write a function that checks for palindrome
const isPalindrome = (s) => {
  // Your code here
  let palindrome=s.toLowerCase().replace(/[^a-z0-9]/g, "")
  const revere=palindrome.split("").reverse().join("")
 return palindrome===revere;
};
console.log(inputs.map(isPalindrome))

 ```
 ## Output
 ```js
 [true,true,false]
 ```
============================================================
## Exercise 43
Mask username part of an email, leaving only first & last char.
 ## Answer
 ```js
 const email1 = 'ragavkumarv@example.com'; const email2 = 'john.doe@gmail.com';

// ===== YOUR CODE BELOW =====
// Write a function to mask email username
const maskEmail = (email) => {
  const [username, domain] = email.split('@');
  if (username.length <= 2) return email;
  const masked = username[0] + '*'.repeat(username.length - 2) + username.slice(-1);
  return `${masked}@${domain}`;
};
console.log(maskEmail('ragavkumarv@example.com')); 
console.log(maskEmail('john.doe@gmail.com'));      
```
 ## Output
 ```js
 r**********v@example.com
j*****e@gmail.com
```
=====================================================================================

