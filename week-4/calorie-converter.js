/*
============================================
; Title: calorie-converter.js
; Author: Professor Krasso
; Date: 5 September 2021
; Modified By: Oksana Kustova
; Description: js file for Calorie App.
;===========================================
*/

import { FoodModel } from "./food-model.js";

export class CalorieConverter {
  static data = [
    new FoodModel("1007", "Egg", 78),
    new FoodModel("1008", "Apple", 95),
    new FoodModel("1009", "Hamburger", 354),
    new FoodModel("1010", "Fries", 400),
    new FoodModel("1011", "Banana", 105),
    new FoodModel("1012", "Soda", 150),
  ];

  //Search if input items are in a list.
  static findChosen(string) {
    let foodList = string.split(",");
    for (let i = 0; i < foodList.length; i++) {
      foodList[i] = foodList[i].replace(/\s/g, "");
    }
    let result = {};
    result.found = [];
    result.notFound = [];

    for (let food of foodList) {
      let foundItem = this.data.find(
        (item) => item.name.toLowerCase() === food.toLowerCase()
      );
      if (foundItem) {
        result.found.push(foundItem);
      } else {
        result.notFound.push(food);
      }
    }
    return result;
  }
}
