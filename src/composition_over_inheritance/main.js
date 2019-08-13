const Item = require("./Item");
const ShoppingCart = require("./ShoppingCart");
const CheckoutService = require("./CheckoutService");

const main = () => {
  const items = [
    new Item("eggs", 2),
    new Item("milk", 1),
    new Item("something expensive", 3)
  ];
  const shoppingCart = new ShoppingCart(items);
  const checkoutService = new CheckoutService(shoppingCart);

  checkoutService.checkout();
};

main();
