/*
============================================
; Title: required-field.js
; Author: Professor Krasso
; Date: 18 September 2021
; Modified By: Oksana Kustova
; Description: js file for the Future Value App.
;===========================================
*/

export class RequiredField {
  constructor(name, field) {
    this.name = name;
    this.field = field;
  }
  validate() {
    return Boolean(this.field);
  }
  getMessage() {
    return `${this.name} is a required field`;
  }
}
