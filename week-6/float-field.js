/*
============================================
; Title: float-field.js
; Author: Professor Krasso
; Date: 18 September 2021
; Modified By: Oksana Kustova
; Description: js file for the Future Value App.
;===========================================
*/

export class FloatField {
  constructor(name, field) {
    this.name = name;
    this.field = field;
  }
  validate() {
    if (isNaN(this.field)) {
      return false;
    } else {
      return true;
    }
  }
  getMessage() {
    return `${this.name} must be a float value. You entered ${this.field}`;
  }
}
