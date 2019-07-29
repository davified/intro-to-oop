class Circus {
  constructor(animals) {
    this.animals = animals;
  }

  beginShow() {
    // TODO: make each animal make its sound
    this.animals.forEach(animal => {
      if (animal instanceof Lion) {
        animal.roar();
      } else if (animal instanceof Dog) {
        animal.woof();
      } else if (animal instanceof Elephant) {
        animal.pawoo();
      }
    });
  }
}

class Lion {
  roar() {
    console.log("ROARR!!!");
  }
}

class Dog {
  woof() {
    console.log("wooof!");
  }
}

class Elephant {
  pawoo() {
    console.log("pawoo!");
  }
}

const lion = new Lion();
const dog = new Dog();
const elephant = new Elephant();
const circus = new Circus([lion, dog, elephant]);
circus.beginShow();
