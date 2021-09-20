/*
============================================
; Title: validator.js
; Author: Professor Krasso
; Date: 18 September 2021
; Modified By: Oksana Kustova
; Description: js file for the Future Value App.
;===========================================
*/
import { RequiredField } from "./required-field.js";
import { FloatField } from "./float-field.js";
import { FloatMaxField } from "./float-max-field.js";
import { FloatMinField } from "./float-min-field.js";
export class Validator {
  constructor(name, field) {
    this.validators = [];
    this.messages = [];
    this.name = name;
    this.field = field;
  }
  addRequiredField() {
    this.validators.push(new RequiredField(this.name, this.field));
  }
  addRequiredFloatField() {
    this.validators.push(new FloatField(this.name, this.field));
  }
  addRequiredFloatMinField(min) {
    this.validators.push(new FloatMinField(this.name, this.field, min));
  }
  addRequiredFloatMaxField(max) {
    this.validators.push(new FloatMaxField(this.name, this.field, max));
  }
  validate() {
    for (let item of this.validators) {
      if (!item.validate()) {
        this.messages.push(item.getMessage());
        return false;
      }
    }
    return true;
  }
}
