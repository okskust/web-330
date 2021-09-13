/*
============================================
; Title: product.js
; Author: Professor Krasso
; Date: 12 September 2021
; Modified By: Oksana Kustova
; Description: js file for Repair Shop App.
;===========================================
*/

export class Product {
    constructor(name, price) {
      this.id = Math.random().toString(16).slice(2);
      this.name = name;
      this.price = price;
    }
  }
  