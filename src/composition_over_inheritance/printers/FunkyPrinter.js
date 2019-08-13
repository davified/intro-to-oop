const cowsay = require("cowsay");

class FunkyPrinter {
  print(someString) {
    console.log("==== funky printer output: ====");

    console.log(
      cowsay.say({
        text: someString
      })
    );
  }
}

module.exports = FunkyPrinter;
