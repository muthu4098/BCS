const books = [
  { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
  { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
  { title: "Sapiens", rating: 4.9, genre: "History" },
  { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
  { title: "Clean Code", rating: 4.7, genre: "Technology" },
];

// Array of objects -> Array of stings
// Case 1:
const getTile = (book) => book.title;
const titles = books.map(getTile);

// const titles = books.map(getTile());  // ❌

// Case 2:
const titles1 = books.map((book) => book.title); // HOF

// Case 3: `this`
function getTile(book) {
  return book.title;
}

const titles3 = books.map(getTile);

// Case 4: `this`
const getTile = (book) => {
  return book.title;
};

const titles4 = books.map(getTile);
// =====================================================================================================
var result = [5, 6, 8].some((n) => n > 7); // || (or)

console.log(result); // true

var result = [5, 6, 8].includes(6);

console.log(result); // true

var result = [5, 6, 8].every((n) => n > 7); // && (and)
console.log(result); // false

var x1 = 20;
var x2 = 10;
var x3 = 15;

if (x1 > 15 && x2 > 15 && x3 > 15) {
  console.log("Cool");
} else {
  console.log("Hot");
}

// Task 1.1
var y1 = "present";
var y2 = "absent";
var y3 = "present";

if (y1 == "present" && y2 == "present" && y3 == "present") {
  console.log("Class started");
} else {
  console.log("No Class");
}

if ([y1, y2, y3].every((stu) => stu == "present")) {
  console.log("Class started");
} else {
  console.log("No Class");
}
// Task 1.2
const students = [
  { name: "Aarav", status: "present" },
  { name: "Divya", status: "absent" },
  { name: "Rohan", status: "present" },
];

// Task 1.2.1 with &&

if (
  students[0].status == "present" &&
  students[1].status == "present" &&
  students[2].status == "present"
) {
  console.log("Class started");
} else {
  console.log("No Class");
}

// Task 1.2.2 with every()
if (students.every((student) => student.status == "present")) {
  console.log("Class started");
} else {
  console.log("No Class");
}

console.log(
  students.every((student) => student.status == "present")
    ? "Class started"
    : "No Class"
);

if ([x1, x2, x3].every((n) => n > 15)) {
  console.log("Cool");
} else {
  console.log("Hot");
}

if ([20, 10, 15].every((n) => n > 15)) {
  console.log("Cool");
} else {
  console.log("Hot");
}