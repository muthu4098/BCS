## Exercise 15

## Basic Array Map

### Transform an array of numbers by doubling each value using the map method.

## Answer

```js
const numbers = [1, 2, 3, 4, 5];

// ===== YOUR CODE BELOW =====
// Use map to double each number
const doubleNumbers = (numbers) => {
  return numbers.map((number) => number * 2);
};

console.log(JSON.stringify(doubleNumbers(numbers)));
```

## Output

[2,4,6,8,10]

=======================================================================================

## Exercise 16

## Basic Array Filter

### Filter an array to keep only even numbers using the filter method.

## Answer

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ===== YOUR CODE BELOW =====
// Use filter to keep only even numbers
const getEvenNumbers = (numbers) => {
  // Your code here
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // ===== YOUR CODE BELOW =====
  // Use filter to keep only even numbers
  const getEvenNumbers = (numbers) => {
    // Your code here
    return numbers.filter((number) => number % 2 == 0);
  };

  console.log(JSON.stringify(getEvenNumbers(numbers)));
};
```

## Output

[2,4,6,8,10]

============================================================================

## Task 3.1

## Array Method

```js
const books = [
  { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
  { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
  { title: "Sapiens", rating: 4.9, genre: "History" },
  { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
  { title: "Clean Code", rating: 4.7, genre: "Technology" },
];

const getTitles = (books) => {

  return books.filter((book) => book.title);
  // Code
};

console.log(getTitles(books));
```

## output

==============================================================

## Task 3.2

## Array Method

```js
const books = [
  { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
  { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
  { title: "Sapiens", rating: 4.9, genre: "History" },
  { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
  { title: "Clean Code", rating: 4.7, genre: "Technology" },
];

const getFictionTitles2 = (books) => {

  const fictionMovies = books.filter((book) => book.genre == "Fiction");

  return fictionMovies.map((book) => book.title);
  // Code
};
```

## Output

['Infinite Jest', 'The Catcher in the Rye']

<!-- =========================================================================================================== -->

## Exercise 19

## Movie Details Finder

Write a function that finds a movie by ID and returns its title and genre in a formatted string using array methods and template literals.

## Answer

```js
const movies = [
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

  if (filterMovie.length == 0) {
    return "Movie not found";
  }
  return `${tittle} is an ${genre} movie`;
};

console.log(getMovieDetails(movies, 1));
console.log(getMovieDetails(movies, 5));
console.log(getMovieDetails(movies, 6));
```

## Output

Baahubali is an Action movie
Jersey is a Sports movie
Movie not found

=============================================================================================================
## Exercise 20

## Average Rating Calculator

### Write a function that filters movies released after a certain year and calculates their average rating.

## Answer
```js
const movies = [
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

// ===== YOUR CODE BELOW =====
// Write a function that calculates average rating after a specific year
const getAverageRatingAfterYear = (movies, rating,genre) => {

const movieRating = movies.filter((movie)=>movie == genre)



  // Your code here
  
};

console.log(getAverageRatingAfterYear(movies, 2016));
console.log(getAverageRatingAfterYear(movies, 2020));
```

## Output
No movies after the specified year
<!-- =========================================================================================================== -->
