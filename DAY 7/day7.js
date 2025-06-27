// <!-- truthy falsy -->
const x = "cool";
if (x) {
  console.log("Awesome");
} else {
  console.log("Super");
}
// if a value converts into true it called true

// ========================================================================================

// if (x) {
//   console.log("Awesome");
// } else {
//   console.log("Super");
// }

const csk1 = {
  captain: "MSD",
  color: "yellow",
  stats: {
    win: 5,
    loss: 11,
  },
};

const csk2 = {
  captain: "MSD",
  color: "yellow",
  stats: {
    loss: 11,
  },
};

console.log(csk2.stats.win);

const csk3 = {
  captain: "MSD",
  color: "yellow",
};

const ipl = null;

function getWinStat(team) {
  //code
  if (!team || !team.stats || !team.stats.win) {
    return "Data Not found";
  }
  return team.stats.win;
}

console.log(getWinStat(csk1));
console.log(getWinStat(csk2));
console.log(getWinStat(csk3));
// console.log(getWinStat(csk));

function getWinStat(team) {
  //code
  if (team?.stats?.win) {
    return team.stats.win;
  }
  return "Data not found ";
}
console.log(getWinStat(csk1));
console.log(getWinStat(csk2));
console.log(getWinStat(csk3));
