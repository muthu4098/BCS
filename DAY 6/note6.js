// const student = {
//   name: "Muthu",
//   address: {
//     city: "Trichy",
//     state: "Tamil Nadu",
//   },
//   hobbies: ["cricket", "football", "carrom"],
// };
// // console.log(student.address.city); //Trichy
// // console.log(typeof student.address); // object
// // // console.log(student.address.state);
// // console.log(city);

// const {
//   address: { city },
//   hobbies: [, hobby],
// } = student;

// console.log(city);

// console.log(hobby);

// const book = {
//   name: "Harry Potter II: Chamber of Secrets",
//   author: "J.K Rowling",
//   authorAge: 45,
// };

// const details = {
//   year: 2002,
//   price: 1200,
//   authorAge: 55,
// };

// // console.log(book.author);

// const fullDetails = { ...details, ...book };
// console.log(fullDetails);

// function moodReport(emoji = "😎", time = "Morning🌅") {
//   return `Feeling ${emoji} this ${time} `;
// }
// console.log(moodReport());
// console.log(moodReport("😎", "afternoon ☀️"));

// // ===================================================

function checkAgeCategory(age = 18) {
  if (age < 18) {
    return "🧒 Minor";
  } else if (age < 65) {
    return "👨 Adult";
  } else {
    return "🧓 Senior";
  }
}
console.log(checkAgeCategory());
console.log(checkAgeCategory(12));
console.log(checkAgeCategory(65));
// ===================================================

// const wizard = {
//   name: "Merlin",
//   title: "Archmage",
//   wand: { core: "Phoenix Feather" },
// };
// function introduceWizard(wizardObj) {
//   let {
//     name,
//     title,
//     wand: { core },
//   } = wizardObj;

//   return `🪄 ${title} ${name} wields a wand with ${core} core.`;
// }

// console.log(introduceWizard(wizard));

// =============================================================================]


// 🪄 Archmage Merlin wields a wand with Phoenix Feather core.

//  Task 04      Combine & Add

// const shelf = ["🍎", "🥪"];
// const delivery = ["🍫", "🍇"];

// function mergeInventory(existing, incoming){
//   return [...existing, ...incoming]
// }

// console.log(mergeInventory(shelf, delivery));

//==================================================================

// Task 05      🎒 Bag Check

// function packBag(owner = "Anon", ...items) {
//   var res
//   if (items.length === 0) {
//     return `🎒 ${owner}'s bag is empty.`;
//   } else {
//     return `🎒 ${owner}'s bag contains: ${items} `;
//   }
// }

// console.log(packBag("Natasha", "💄", "🔫"));
// console.log(packBag());

// 🎒 Natasha's bag contains: 💄, 🔫
// 🎒 Anon's bag is empty.
//================================================================

// Task 06        📍Where Are You?

// function whereAreYou(personObj) {
//   const {
//     user = "Someone",
//     location = {}
//   } = personObj;
//   const {city = "Unknown", planet = "Earth"} = location

//   return `${user} is currently in ${city}, ${planet} 🌍`;
// }

// console.log(
//   whereAreYou({
//     user: "Thor",
//     location: { city: "Asgard", planet: "Yggdrasil" },
//   })

// console.log(whereAreYou({}));

// Thor is currently in Asgard, Yggdrasil 🌍
// Someone is currently in Unknown, Earth 🌍






// Task-6
function whereAreYou(personObj){
  const Unknown ={
    name:"SomeOne",
    city:"Unknown",
    planet:"Earth",

  }

  const {
    name:"Thor",
    location={
      city:"Asgard",
      planet:"Yggdrasil" ,
    }

  }

}

console.log(whereAreYou({ user: "Thor", location: { city: "Asgard", planet: "Yggdrasil" } }));
console.log(whereAreYou({}));


// Thor is currently in Asgard, Yggdrasil 🌍
// Someone is currently in Unknown, Earth 🌍