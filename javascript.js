//let, var, const

var x = 1;
let y = 1;

const hello = "w";

console.log(x + y);
console.log(hello);

function freezer() {
  let sandwich;
  sandwich = ["bread", "ham", "cheese", "bread"];
  //sandwich.push('ketchup');
  console.log(sandwich.indexOf("ham"));
  console.log(sandwich);
}

freezer();

let type_sandwich = {
  bread: "whole bread",
  ham: "turkey",
  cheese: "swiss",
};

console.log(type_sandwich.bread);
