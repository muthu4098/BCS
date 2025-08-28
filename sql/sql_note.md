## Exercise 1 — Tasks
- Find the title of each film ✓
    ```sql
        SELECT title FROM movies
    ```
- Find the director of each film
    ```sql
        SELECT director FROM movies;
    ```
- Find the title and director of each film
    ```sql
    SELECT title,director FROM movies;
    ```
- Find the title and year of each film
    ```sql
    SELECT title,year FROM movies;
    ```
- Find all the information about each film

   ```sql
   SELECT * FROM movies;
   ```
## Exercise 2 — Tasks
- Find the movie with a row id of 6
    ```sql
        SELECT * FROM movies
    WHERE id=6;
    ```
- Find the movies released in the years between 2000 and 2010
    ```sql
        SELECT title FROM movies
        WHERE year BETWEEN 2000 AND 2010;
    ```
- Find the movies not released in the years between 2000 and 2010
   ```sql
     SELECT title FROM movies
  WHERE not year BETWEEN 2000 AND 2010;
    ```
- Find the first 5 Pixar movies and their release year ✓
  ```sql
    SELECT * FROM movies
    WHERE id BETWEEN 1 AND 5;
    ```
## Exercise 3 — Tasks
- Find all the Toy Story movies
    ```sql
        SELECT * FROM movies
    where title like 'toy story%'
        ```
- Find all the movies directed by John Lasseter
    ```sql
       SELECT * FROM movies
        where director like 'John Lasseter'
        ```
- Find all the movies (and director) not directed by John Lasseter 
    ```sql
       SELECT * FROM movies
    where director not like 'John Lasseter'
        ```
- Find all the WALL-* movies
    ```sql 
    SELECT * FROM movies
    where title like 'WALL-%' 
   ```
## Exercise 4 — Tasks   
- List all directors of Pixar movies        (alphabetically), without duplicates

    ``` sql
    SELECT DISTINCT director FROM movies
   order by Director;
    ```
- List the last four Pixar movies released (ordered from most recent to least) 
    ```sql
    SELECT * FROM movies
    order by year desc
    limit 4;
    ```
- List the first five Pixar movies sorted alphabetically
    ```sql
    SELECT * FROM movies
     order by title
     limit 5;
    ```
- List the next five Pixar movies sorted alphabetically
    ```sql
    SELECT * FROM movies
     order by title
     limit 5 offset 5;
    ```
# Exercise - 5

- List all the Canadian cities and their populations
   ```sql
   SELECT * FROM north_american_cities
    where country ='Canada'
   ```

- Order all the cities in the United States by their latitude from north to south
    ```sql
        SELECT * FROM north_american_cities
    where country='United States'
    order by latitude desc

    ```
- List all the cities west of Chicago, ordered from west to east
    ```sql
        SELECT * FROM north_american_cities
    where Longitude < (Select longitude from north_american_cities
    where city='Chicago')
    order by Longitude
    ```

- List the two largest cities in Mexico (by population)
  ```sql
   SELECT * FROM north_american_cities
    where country ='Mexico'
    order by Population desc
    limit 2
  ```
- List the third and fourth largest cities (by population) in the United States and their population ✓
    ```sql
     SELECT city,population FROM north_american_cities
    where country ='United States'
    order by population desc
    limit 2 offset 2
    ```


# Exercise 6 — Tasks
- Find the domestic and international sales for each movie
    ```sql
    SELECT * FROM movies
inner join boxoffice
on id =  movie_id
    ```
- Show the sales numbers for each movie that did better internationally rather than domestically
    ```sql
        SELECT * FROM movies
        inner join boxoffice
        on id =  movie_id
        where international_sales >domestic_sales
    ```
- List all the movies by their ratings in descending order
  ```sql
        SELECT * FROM movies
        inner join boxoffice on id = movie_id
        order by rating desc
    ```
# Exercise 7 — Tasks
- Find the list of all buildings that have employees
    ```sql
    SELECT DISTINCT building FROM employees;

    ```
- Find the list of all buildings and their capacity
     ```sql
  

     ```
-List all buildings and the distinct employee roles in each building (including empty buildings) 

     ```sql
    SELECT DISTINCT building_name, role 
    FROM buildings 
    LEFT JOIN employees
        ON building_name = building;
```
# Exercise 8 — Tasks

- Find the name and role of all employees who have not been assigned to a building
    ```sql
    SELECT name, role FROM employees
    WHERE building IS NULL;
    ```
- Find the names of the buildings that hold no employees
    ```sql
        SELECT DISTINCT building_name
    FROM buildings 
    LEFT JOIN employees
        ON building_name = building
    WHERE role IS NULL;

    ```

# Exercise 9 — Tasks

- List all movies and their combined sales in millions of dollars

    ```sql
    SELECT title, (domestic_sales + international_sales) / 1000000 AS gross_sales_millions
    FROM movies
    JOIN boxoffice
    ON movies.id = boxoffice.movie_id;
    ```
- List all movies and their ratings in percent
    ```sql
    SELECT title, rating * 10 AS rating_percent
    FROM movies
    JOIN boxoffice
    ON movies.id = boxoffice.movie_id;

    ```
- List all movies that were released on even number years
    ```sql
   SELECT title, year
    FROM movies
    WHERE year % 2 = 0;
    ```
---
# Exercise 10 — Tasks

- Find the longest time that an employee has been at the studio
 ```sql
 SELECT MAX(years_employed) as Max_years_employed
FROM employees;
 ```
- For each role, find the average number of years employed by employees in that role

    ```sql
    SELECT role, AVG(years_employed) as Average_years_employed
    FROM employees
    GROUP BY role;
    ```
- Find the total number of employee years worked in each building
    ```sql
        SELECT building, SUM(years_employed) as Total_years_employed
        FROM employees
        GROUP BY building;
    ```
# Exercise 11 — Tasks

- Find the number of Artists in the studio (without a HAVING clause) 
    ```sql

    ```
- Find the number of Employees of each role in the studio 
    ```sql
    SELECT role, COUNT(*)
    FROM employees
    GROUP BY role;
    ```
- Find the total number of years employed by all Engineers 
    ```sql
    SELECT role, SUM(years_employed)
    FROM employees
    GROUP BY role
    HAVING role = "Engineer";
    ```
# Exercise 12 — Tasks
- Find the number of movies each director has directed

    ```sql
    SELECT director, COUNT(id) as Num_movies_directed
    FROM movies
    GROUP BY director;
    ```
- Find the total domestic and international sales that can be attributed to each director
    ```sql
        SELECT director, SUM(domestic_sales + international_sales) as Cumulative_sales_from_all_movies
    FROM movies
        INNER JOIN boxoffice
            ON movies.id = boxoffice.movie_id
    GROUP BY director;
    ```