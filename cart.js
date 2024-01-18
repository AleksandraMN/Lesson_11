'use strict';

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,

  get priceT() {
    this.calculateItemPrice();
    return this.totalPrice;
  },

  set priceT(sum) {
    this.totalPrice = sum;
  },

  add(x, y, z) {
    const obj = {'nameProduct': x, 'price': y, 'count': z};
    const array = this.items.push(obj);
    this.calculateItemPrice();
    this.increaseCount(z);
    return array;
  },

  increaseCount(z) {
    return this.count += z;
  },

  calculateItemPrice() {
    const array = [];
    let sum = 0;
    this.items.map((item) => {
      const {price} = item;
      return array.push(price);
    });
    array.reduce((acc, item, array) => {
      sum = acc + item;
      return sum;
    }, 0);
    return this.priceT = sum;
  },

  clear() {
    return this.items.splice(0, this.items.length),
    this.totalPrice = 0, this.count = 0;
  },

  print() {
    const str = JSON.stringify(this.items);
    console.log('Корзина ', str);
    console.log('Общая стоимость товаров в корзине = ', this.priceT);
    console.log('Общее количество товаров в корзине = ', this.count);
  },
};


cart.add('яйца', 130, 1);
cart.add('молоко', 120, 1);
cart.add('рожки', 65, 1);
cart.add('сыр', 465, 1);
cart.add('масло', 420, 1);

cart.print();

cart.totalPrice = 10;
// cart.clear();
cart.print();

