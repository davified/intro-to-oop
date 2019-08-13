class ShoppingCart {
  constructor(items) {
    this.items = items;
  }

  getTotalPrice() {
    return this.items.reduce((acc, item) => (acc += item.price), 0);
  }

  addItem(item) {
    this.items = [...this.items, item];
  }

  removeItem(item) {
    // TODO: implement
  }
}

module.exports = ShoppingCart;
