const orders = [
  {
    id: 1,
    dishName: "Burger",
    category: "Fast Food",
    chef: "John Doe",
    ratings: [5, 4, 5],
  },
  {
    id: 2,
    dishName: "Pizza",
    category: "Italian",
    chef: "Jane Smith",
    ratings: [4, 3, 5],
  },
  {
    id: 3,
    dishName: "Sushi",
    category: "Japanese",
    chef: "Tom Brown",
    ratings: [5, 5, 4],
  },
  {
    id: 4,
    dishName: "Salad",
    category: "Healthy",
    chef: "Alice Green",
    ratings: [3, 4, 5],
  },
  {
    id: 5,
    dishName: "Pasta",
    category: "Italian",
    chef: "Gowtam Tinnanuri",
    ratings: [4, 4, 5],
  },
];

const moreOrders = [
  {
    id: 6,
    dishName: "Tacos",
    category: "Mexican",
    chef: "Carlos Ruiz",
    ratings: [4, 5, 4],
  },
  {
    id: 7,
    dishName: "Ramen",
    category: "Japanese",
    chef: "Yuki Tanaka",
    ratings: [5, 4, 5],
  },
];

// // // Shou
// // ld print: "Burger, Pizza, Sushi"

// const getFirstNDishNames = (orders, id) => {
//   const orderName = orders.slice(0, id).map((order) => order.dishName);
//   return orderName.join(", ");
// };

// // console.log(getFirstNDishNames(orders, 3));

// //===========================================================

// function mergeOrders(orders, ...moreOrders) {
//   const merged = [...orders, ...moreOrders];
//   return merged.flat(Infinity);
// }

// // console.log(mergeOrders(orders, [9, 0], [78, 9])); // Should print the merged array of orders
// // console.log(mergeOrders(orders)); // Should print the original array of orders

// // ============================================================

// function getHighRatedDishes(orders) {
//   const orderName = orders.filter((order) => order.ratings.every(rating => rating >= 4) );
//   const dishName = orderName.map(orders => orders.dishName).join(", ");
//   return dishName;
// }
// console.log(getHighRatedDishes(orders));
// // Should print:N "Burger, Sushi, Pasta, Tacos, Ramen"
// // ===============================================================================================

//  const order = {
//   dish: {
//     name: "Burger",
//     category: "Fast Food",
//   },
//   quantity: 2,
//   price: 5.0,
// };

// function getDishNamesByIds(orders, ...ids) {
//   const orderMap = new Map(orders.map(order => [order.id, order.dishName]));

//   const dishNames = ids.map(id => orderMap.get(id) ?? "Unknown Dish");

//   return `Selected Dishes: ${dishNames.join(", ")}`;
// }
function getDishNamesByIds(orders,...iteam){
  const orderMap = orders.map(order =>[order.id,order.dishName])
  console.log(orderMap);
  
}

//  console.log(getDishNamesByIds(orders, 1, 3, 5));
//    // Should print: Selected Dishes: Burger, Pasta, Sushi
//    console.log(getDishNamesByIds(orders, 1, 6));
//    // Should print: Selected Dishes: Burger, Unknown Dish
//    console.log(getDishNamesByIds(orders, 5, 1));
//    // Should print: Selected Dishes: Sushi, Burger

//    //=========================================================================================

function listOrders(...orders) {
  if (orders.length === 0) 
    return "No dishes provided.";

  const result = orders.map((order) => {
    const name = order?.dishName ?? "Unknown Dish";
    const category = order?.category ?? "Unknown Category";
    return `${name} (${category})`;
  });

  return `Dishes and Categories: ${result.join(", ")}`;
}

// console.log(listOrders(...orders));
// // Should print: Burger (Fast Food), Pizza (Italian), Sushi (Japanese), Salad (Healthy), Pasta (Italian)
// console.log(listOrders(orders[0], orders[1], orders[111]));
// // Should print: Burger (Fast Food), Pizza (Italian), Unknown Dish (Unknown Category)
// ============================================================================================
