/*
============================================
; Title: main-course.js
; Author: Professor Krasso
; Date: 27 August 2021
; Modified By: Oksana Kustova
; Description: js file for Restaurant App
;===========================================
*/
import { Product } from "./product.js";

export class MainCourse extends Product {
  constructor(name, price) {
    super(name, price);
  }
}