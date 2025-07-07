## Food Delivery Questions

### Setup Data

```js
const orders = [
  { id: 1, dishName: "Burger", category: "Fast Food", chef: "John Doe", ratings: [5, 4, 5] },
  { id: 2, dishName: "Pizza", category: "Italian", chef: "Jane Smith", ratings: [4, 3, 5] },
  { id: 3, dishName: "Sushi", category: "Japanese", chef: "Tom Brown", ratings: [5, 5, 4] },
  { id: 4, dishName: "Salad", category: "Healthy", chef: "Alice Green", ratings: [3, 4, 5] },
  { id: 5, dishName: "Pasta", category: "Italian", chef: "Gowtam Tinnanuri", ratings: [4, 4, 5] }
];

const moreOrders = [
  { id: 6, dishName: "Tacos", category: "Mexican", chef: "Carlos Ruiz", ratings: [4, 5, 4] },
  { id: 7, dishName: "Ramen", category: "Japanese", chef: "Yuki Tanaka", ratings: [5, 4, 5] }
];
```

### Questions


1. 🍽️ Filter and Join Dish Names


 Write a function that filters out dishes with ratings below 4, then returns a string of dish names separated by commas.
```js
const getHighRatedDishes = (orders) => {
const dishName = orders.filter(order => order.ratings.every( f => f >= 4))
const joinNames = dishName.map(name => name.dishName).join(", ")
    return joinNames
}


 console.log(getHighRatedDishes(orders));
 ```
 ## OUTPUT
 Should print: "Burger, Sushi, Pasta, Tacos, Ramen"

===============================================================================================

2. 🍔 Slice and Map Dish Names
   Write a function that slices the first N dishes from the orders array, maps their names, and joins them into a single string.
```js
const getFirstNDishNames =(order, num)=>{
    const dishName = order.slice(0,num).map(order => order.dishName).join(", ")
    return dishName
}



console.log(getFirstNDishNames(orders, 3));
```
## Expected Output

Should print: "Burger, Pizza, Sushi"
===============================================================================================

3. 🍲 Merge Orders with Default Values
   Write a function that merges two arrays of food orders
```js
const mergeOrders = (order, ...arr) =>{
    const merged = [...order, ...arr].flat(Infinity)
    return merged
}


console.log(mergeOrders(orders, moreOrders, [2, 3, [3,3,64, 456, 46], 4, 5], [12, 34, 545, 4554])); // Should print the merged array of orders
   console.log(mergeOrders(orders));
   ```
   ## OUTPUT

    Should print the original array of orders

===============================================================================================
6. 📊 Calculate Total Ratings for Chefs

   Write a function that calculates the total number of ratings for each chef.

```js
   const getTotalRatingsForChefs = (orders)=>{
    const obj = {}
    const chef = orders.map(order => {
      const chefsName = order.chef
      // console.log(chefsName);
      
      const ratingCount = order.ratings.length
      // console.log(ratingCount);
      obj[chefsName] = ratingCount
      
    })
    return obj
   }

   console.log(getTotalRatingsForChefs(orders));
  ```
  ## OUTPUT
   Should print: { "John Doe": 6, "Jane Smith": 3, "Tom Brown": 3, "Alice Green": 3 }
===============================================================================================


4. 🥗 Fetch Dish Names by IDs

   Write a function that accepts multiple order IDs, fetches the dish names, and returns a formatted string using the rest operator, nullish coalescing, and template literals.

```js
const getDishNamesByIds1 = (orders, ...ids) =>{
   const dishName = ids.map(id =>{
      const dish = orders.find(order => order.id === id)
       return dish?.dishName ?? "Unknown Dish"
   })
  //  console.log(dishName,"aaaaa");
   
  return `Selected Dish: ${dishName.join(", ")}`
}
const getDishNamesByIds = (orders , ...ids)=>{
  const dishNames = orders.filter(order => ids.includes(order.id) ?? "Unknown Dish")  // .map(order => order.dishName)
  console.log(dishNames);
  const singleName = dishNames.map(name => name.dishName)
  console.log(singleName);
  
  return singleName.join(", ") ?? "Unknown Dish"
}

console.log(getDishNamesByIds(orders, 1, 3, 5));
   
   console.log(getDishNamesByIds(orders, 1, 6));
   console.log(getDishNamesByIds(orders, 5, 1));
```
## OUTPUT

Should print: Selected Dishes: Burger, Pasta, Sushi
Should print: Selected Dishes: Burger, Unknown Dish
Should print: Selected Dishes: Sushi, Burger
=======================================================================

5. 🍜 List Dish Names and Categories

   Write a function that accepts any number of food orders and returns a formatted string listing their dish names and categories using the rest operator, nullish coalescing, and template literals.

```JS
const listOrders =(...orders) =>{
const dishNames = orders.map(order=>{
  const name = order?.dishName ?? "Unknown Dish"
  const category = order?.category ?? "Unknown Category"
return `${name} (${category})`
})
return dishNames.join(", ")
}

console.log(listOrders(...orders));
   Should print: Burger (Fast Food), Pizza (Italian), Sushi (Japanese), Salad (Healthy), Pasta (Italian)
console.log(listOrders(orders[0], orders[1], orders[11]));
   Should print: Burger (Fast Food), Pizza (Italian), Unknown Dish (Unknown Category)
 
```
====================================================================================
6. 📊 Calculate Total Ratings for Chefs

   Write a function that calculates the total number of ratings for each chef.

```js
   const getTotalRatingsForChefs = (orders)=>{
    const obj = {}
    const chef = orders.map(order => {
      const chefsName = order.chef
      // console.log(chefsName);
      
      const ratingCount = order.ratings.length
      // console.log(ratingCount);
      obj[chefsName] = ratingCount
      
    })
    return obj
   }

   console.log(getTotalRatingsForChefs(orders));
  ```
  ## OUTPUT
   Should print: { "John Doe": 6, "Jane Smith": 3, "Tom Brown": 3, "Alice Green": 3 }
========================================================

# 7. Refactoring `getOrderDetails`

Improve `getOrderDetails` through several refactoring steps.
```js
   const order1 = {
  dish: {
    name: "Burger",
    category: "Fast Food",
  },
  quantity: 2,
  price: 5.0,
};

function getOrderDetails(o) {
  const {dish:{name, category}, quantity, price} = o

  return `${name} (${category}) x${quantity} costs $${price}`;
}
// console.log(getOrderDetails(order));

function getOrderDetails1(o) {
  const dishName = o.dish.name;
  const dishCategory = o.dish.category;
  const orderQuantity = o.quantity;
  const orderPrice = o.price;

  return `${dishName} (${dishCategory}) x${orderQuantity} costs $${orderPrice}`;
}
// console.log(getOrderDetails1(order));
```
=======================================================================


# 8. Refactoring `displayOrderSummary` 🚚
Refactor `displayOrderSummary` to improve
```js
const order = { 
  id: 1,
  dish: {
    name: "Burger",
    category: "Fast Food",
  },
  quantity: 2,
  price: 5.0,
};


function displayOrderSummary1(orderId) {
  const order = orders.find((o) => o.id === orderId);
  if (
    order?.order?.name?.category?.quantity?.price) 
    {
    console.log( `${order.dish.name} (${order.dish.category}) x${order.quantity} costs $${order.price}`,);
  } else {
    console.log("Some order data is missing.");
  }
}

// displayOrderSummary(1);
// displayOrderSummary(2);
// displayOrderSummary(3);
```