/*
============================================
; Title: appetizer.js
; Author: Professor Krasso
; Date: 27 August 2021
; Modified By: Oksana Kustova
; Description: js file for Restaurant App
;===========================================
*/
import { Product } from "./product.js";

export class Appetizer extends Product {
  constructor(name, price) {
    super(name, price);
  }
}
