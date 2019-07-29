class Waiter {
  constructor(name) {
    this.name = name;
  }

  greetCustomer() {
    console.log(`hello, i am ${this.name}. may I get your order?`);
  }
}

class ChiefWaiter extends Waiter {}

bob = new Waiter("bob");
bob.greetCustomer();

alfred = new ChiefWaiter("alfred");
alfred.greetCustomer();
