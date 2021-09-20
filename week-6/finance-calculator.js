/*
============================================
; Title: finance-calcilator.js
; Author: Professor Krasso
; Date: 18 September 2021
; Modified By: Oksana Kustova
; Description: js file for the Future Value App.
;===========================================
*/

export class FinanceCalculator {
  constructor() {}
  static MONTHS_IN_YEAR = 12;
  
  static calculateFutureValue(monthlyPayment, rate, years) {
    let months = years * this.MONTHS_IN_YEAR;
    let interestRate = 1 + rate / 100;
    let presentValue = monthlyPayment * months;
    let futureValue = presentValue * Math.pow(interestRate, months);
    return futureValue.toFixed(2);
  }
  static convertToCurrency(field) {
    let currencyFormatted = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    return currencyFormatted.format(field);
  }
}
