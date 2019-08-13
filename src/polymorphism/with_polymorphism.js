// TODO: demonstrate polymorphism by make animals conform to the same "AnimalSound" interface (explain interfaces using TV + HDMI example)

class Circus {
  constructor(animals) {
    this.animals = animals;
  }

  beginShow() {
    
  }
}

class Animal {
  makeSound() {
    // do nothing
  }
}

class Lion extends Animal {
  makeSound() {
    console.log("ROARR!!!");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("wooof!");
  }
}

class Elephant extends Animal {
  makeSound() {
    console.log("pawoo!");
  }
}

const lion = new Lion();
const dog = new Dog();
const elephant = new Elephant();
const circus = new Circus([lion, dog, elephant]);
circus.beginShow();
