// //Reduce
// intial first letter

const marks = [90, 84, 82, 95, 30];

// find the output
//Task 1.1

const total = marks.reduce((accmulate, crr) => {
  return accmulate > crr ? accmulate : crr;
});
console.log(total);

//===============================================

const scores = [
  {
    marks: 32,
    name: "Yvette Merritt",
  },
  {
    marks: 57,
    name: "Lillian Ellis",
  },
  {
    marks: 22,
    name: "Mccall Carter",
  },
  {
    marks: 21,
    name: "Pate Collier",
  },
  {
    marks: 91,
    name: "Debra Beard",
  },
  {
    marks: 75,
    name: "Nettie Hancock",
  },
  {
    marks: 20,
    name: "Hatfield Hodge",
  },
];

// Task 1.2
// Use Reduce
const topScorer = scores.reduce((top, current) => {
  return current.marks > top.marks ? current : top;
});

console.log(topScorer.name); // Output: Debra Beard
