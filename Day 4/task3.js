var stock1 = "vanilla";
var stock2 = "chocolate";
var stock3 = "butterscotch";
var stock4 = "cotton candy";

var x = window.prompt(`Please enter your fav 🍧?:`);
y = x.toLowerCase();
y = x.trim();
if (y == stock1) {
  console.log("Yes, we have vanilla in stock");
} else if (y == stock2) {
  console.log("Yes, we have chocolate in stock");
} else if (y == stock3) {
  console.log("Yes, we have butterscotchin stock");
} else if (y == stock4) {
  console.log("Yes, we have cotton candy stock");
} else {
  console.log(`We ran out of ${y}`);
}

// Task 3.1 - TextCase - Dont consider
// Output
// Case 1
// Please enter your fav 🍧?: vanilla
// Yes, we have vanilla in stock

// Case 2
// Please enter your fav 🍧?: strawberry
// We ran out of strawberry

// Task 3.2 -  - TextCase -  Consider it
// Output
// Case 1
// Please enter your fav 🍧?:   VAnilla
// Yes, we have vanilla in stock

// Case 2
// Please enter your fav 🍧?:     stRawberry
// We ran out of strawberry
o