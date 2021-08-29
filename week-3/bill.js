/*
============================================
; Title: bill.js
; Author: Professor Krasso
; Date: 27 August 2021
; Modified By: Oksana Kustova
; Description: js file for Restaurant App
;===========================================
*/
export class Bill {
  constructor(arr) {
    this._bill = [];
    for (let i = 0; i < arr.length; i++) {
      this._bill[i] = {
        category: arr[i].id,
        chosenItems: [],
      };
    }
  }

  //Add chosen items into array
  addItem(item, id) {
    let index;
    for (let i = 0; i < this._bill.length; i++) {
      if (this._bill[i].category === id) {
        index = i;
        break;
      }
    }

    this._bill[index].chosenItems.push(item);
  }

  //Calculate order total
  getTotal() {
    let total = 0;
    for (let i = 0; i < this._bill.length; i++) {
      let sum = 0;
      this._bill[i].chosenItems.forEach(function (chosenItem) {
        sum += +chosenItem.price;
      });
      total = total + sum;
    }
    return total;
  }
}
