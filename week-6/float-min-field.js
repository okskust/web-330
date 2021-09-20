/*
============================================
; Title: float-min-field.js
; Author: Professor Krasso
; Date: 18 September 2021
; Modified By: Oksana Kustova
; Description: js file for the Future Value App.
;===========================================
*/

export class FloatMinField {
    constructor(name, field, min) {
      this.name = name;
      this.field = field;
      this.min = min;
    }
    validate() {      
      if (parseFloat(this.field) > this.min) {
        return true;
      } else {
        return false;
      }
    }
    getMessage() {
      return `${this.name} must be more than ${this.min}. You entered ${this.field}`;
    }
  }
  