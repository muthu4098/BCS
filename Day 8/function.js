// function print() {
//   console.log(this.name);
// }

// const obj = {
//   name: "muthu",
//   print: print
// };
// obj.print();
// const altprint=()=>{
//     console.log(this.name)
// }

//const getWinStart=(team)=>team?.stats?.win ?? "data Not found"

// function sayHello() {
//   return function () {
//     console.log("Hello!😍");
//   };
// }
// var x = sayHello();
// x()();

// const sayHello = () => () => console.log("Hello!!");

const add = (x) => (y) => x + y;
var total = add(5)(9);
console.log(total);

//first  function
//if function ->value
// 1.value can passed as arg
// 2.Value can be returned
// 3. Value can be assigned


//Function programming style (Paradigm)
// 1.Currying
// 2.Partial Application
// 3.Point -free style



//f#shark
//Haskell
//scala
//lisp