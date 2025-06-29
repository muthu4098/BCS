//Repat ->loop using

for (i = 0; i < 10; i++) {
  console.log("hi");
}

const codes = ["alpha", "beta", "gamma", "delta"];
for (let i = 0; i < 4; i++) {
  console.log(codes[i]);
}

//for===============================================================

// task1.1======================================================================

const avengers = [
  "Hulk",
  "Iron man",
  "Black widow",
  "Captain america",
  "Spider man",
  "Thor",
];
for (var index in avengers) {
  console.log(`${avengers[index]} contain`, avengers[index].length);
}

//Hulk contains 4 letters
// Iron man contains 8 letters
// ...
// Thor contains 4 letters
//===========================================================

const avengers1 = [
  "Hulk",
  "Iron man",
  "Black widow",
  "Captain america",
  "Spider man",
  "Thor",
];
function movie() {
  for (var index in avengers1) {
    console.log(`${avengers1} contain, ${avengers1.length}`);
  }
}
movie(avengers);

//==========================================================
// task-1.3
function printPattern(emoji = "❤️", rows = "5") {
  for (let i = 1; i <= 6; i++) {
    console.log(emoji.repeat(i));
  }
}
printPattern();
//====================================================================
//task-1.4

const nums = [80, 43, 72, 47, 20, 21];

function getEvenNumbers(nums) {
  for (let num of nums) {
    console.log(nums.push);
  }
}
getEvenNumbers(nums);

// Output
// [80, 72, 20];

//==========================================================================

const books = [
  { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
  { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
  { title: "Sapiens", rating: 4.9, genre: "History" },
  { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
  { title: "Clean Code", rating: 4.7, genre: "Technology" },
];

function Heading(books) {
  const titles = [];
  for (var book of books) {
    title.push(book.title);
  }
  console.log(title);
}

Heading(books);
//["Infinite Jest",  "The Catcher in the Rye", "Sapiens",  "A Brief History of Time",  "Clean Code"]
