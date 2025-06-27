function print() {
  console.log(this.name);
}

const obj = {
  name: "muthu",
  print: print
};
obj.print();
