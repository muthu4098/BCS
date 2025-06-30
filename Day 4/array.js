var english = 70;
var maths = 90;
var science = 97;
var social = 80;

// Group similer things together

var marks = [70, 90, 97, 80];
console.log(marks);
console.log(marks.length);

// index
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]); // undefined

// undefined vs not defined
//undefined-value
// not defined - error

var student = {
  name: "Arjuna",
  age: 25,
  college: "SAC",
  isRich: true,
};
// Acess the value
//1. Dot Syntax
//2.BoxSyntax'

// Key contains space

console.log(student);
console.log(student.college); //Dot syntax
console.log(student["personal hobbies"]); //box syntax

//console.log(student.personal hobbies)❌

var student = {
  name: "Arjuna",
  age: 20,
  college: "SAC",
  isRich: true,
  "personal hobbies": ["Hockey", "Traveling", "Cricket"],

  x: ["personal hobbies"],
};
console.log(x[2]);
