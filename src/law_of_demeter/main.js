const Cat = require("./Cat");
const Owner = require("./Owner");

const brownie = new Cat("brownie", "brown", 9);
const bob = new Owner("bob", brownie);

const changeMoodOfCat = (owner, newMood) => {
  owner.cat.setHappiness(newMood);
};

console.log(brownie);
changeMoodOfCat(bob, 42);
console.log(brownie);

// TODO:
// 1. implement changeMoodOfCat
// 2. change Cat.mood to Cat.happiness
// 3. ask participants to guess what will happen when I run this file
