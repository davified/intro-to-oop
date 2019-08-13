class Circus {
  constructor(animals) {
    this.animals = animals;
  }

  beginShow() {
    // TODO: make each animal make its sound
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
