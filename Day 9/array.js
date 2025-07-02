var y1 = "present";
var y2 = "absent";
var y3 = "present";

if ([y1, y2, y3].every((y) => y == "present")) {
  console.log("class started");
} else {
  console.log("no class ");
}
//====================================================
// task-1.2.1

const students = [
  { name: "Aarav", status: "present" },
  { name: "Divya", status: "absent" },
  { name: "Rohan", status: "present" },
];

if (
  students[0].status == "present" &&
  students[1].status == "present" &&
  students[2].status == "present"
) {
  console.log("All the Student present");
} else {
  console.log("Student absent");
}
//=====================================================

if ([y1, y2, y3].every((student) => student.status == "present")) {
  console.log("All the Student present");
} else {
  console.log("Student absent");
}

// ===============================================================

const books = [
  { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
  { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
  { title: "Sapiens", rating: 4.9, genre: "History" },
  { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
  { title: "Clean Code", rating: 4.7, genre: "Technology" },
];

const getFictionTitles2 = (books) => {
  // 1. Filter
  const fictionMovies = books.filter((book) => book.genre == "Fiction");
  //  2. Transform
  return fictionMovies.map((book) => book.title);
  // Code
};

const getFictionTitles = (books) => {
  // 1. Filter
  //  2. Transform
  return books
    .filter((book) => book.genre == "Fiction")
    .map((book) => book.title);
};

console.log(getFictionTitles(books));

// ==============================================================================================================

var movies = [
  {
    id: 1,
    title: "Baahubali",
    director: "S. S. Rajamouli",
    year: 2015,
    ratings: [8, 9, 10],
    genre: "Action",
  },
  {
    id: 2,
    title: "Arjun Reddy",
    director: "Sandeep Reddy Vanga",
    year: 2017,
    ratings: [9, 8, 9],
    genre: "Drama",
  },
  {
    id: 3,
    title: "Mahanati",
    director: "Nag Ashwin",
    year: 2018,
    ratings: [10, 9, 8],
    genre: "Biography",
  },
  {
    id: 4,
    title: "Eega",
    director: "S. S. Rajamouli",
    year: 2012,
    ratings: [7, 8, 9],
    genre: "Fantasy",
  },
  {
    id: 5,
    title: "Jersey",
    director: "Gowtam Tinnanuri",
    year: 2019,
    ratings: [9, 9, 8],
    genre: "Sports",
  },
];
const getMovieDetails = (movies, id) => {
  const filterMovie = movies.filter((movie) => movie.id == id);

  if (filterMovie.length == "0") {
    return "Movie not found";
  }
  return `${filterMovie[0].title} is an ${filterMovie[0].genre} movie`;
};

console.log(getMovieDetails(movies, 1));
console.log(getMovieDetails(movies, 5));
console.log(getMovieDetails(movies, 6));

//==========================================================================

var movies = [
  {
    id: 1,
    title: "Baahubali",
    director: "S. S. Rajamouli",
    year: 2015,
    ratings: [8, 9, 10],
    genre: "Action",
  },
  {
    id: 2,
    title: "Arjun Reddy",
    director: "Sandeep Reddy Vanga",
    year: 2017,
    ratings: [9, 8, 9],
    genre: "Drama",
  },
  {
    id: 3,
    title: "Mahanati",
    director: "Nag Ashwin",
    year: 2018,
    ratings: [10, 9, 8],
    genre: "Biography",
  },
  {
    id: 4,
    title: "Eega",
    director: "S. S. Rajamouli",
    year: 2012,
    ratings: [7, 8, 9],
    genre: "Fantasy",
  },
  {
    id: 5,
    title: "Jersey",
    director: "Gowtam Tinnanuri",
    year: 2019,
    ratings: [9, 9, 8],
    genre: "Sports",
  },
];


console.log(getAverageRatingAfterYear(movies, 2016));
console.log(getAverageRatingAfterYear(movies, 2020));
