/*
============================================
; Title: shopping-cart.js
; Author: Professor Krasso
; Date: 12 September 2021
; Modified By: Oksana Kustova
; Description: js file for Repair Shop App.
;===========================================
*/

export class ShoppingCart {
  constructor() {
      this.products = [];
  }
  count() {
      return this.products.length;
  }
  add(obj) {
    this.products.push(obj);
  }
   *iterateArray() {
    for (let product of this.products) {
        yield product;
    }
  }
}
