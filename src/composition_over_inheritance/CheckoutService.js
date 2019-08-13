const FunkyPrinter = require("./printers/FunkyPrinter");
const BasicPrinter = require("./printers/BasicPrinter");

class CheckoutService {
  constructor(shoppingCart) {
    this.shoppingCart = shoppingCart;
    this.printer = new BasicPrinter();
  }

  checkout() {
    const totalPrice = this.shoppingCart.getTotalPrice();
    const HIGH_SPENDERS_THRESHOLD = 4;
    if (totalPrice > HIGH_SPENDERS_THRESHOLD) {
      this.printer = new FunkyPrinter();
    }
    this.printer.print(`Total price is: ${totalPrice}`);
  }
}

module.exports = CheckoutService;
