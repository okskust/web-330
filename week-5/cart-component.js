/*
============================================
; Title: cart-component.js
; Author: Professor Krasso
; Date: 12 September 2021
; Modified By: Oksana Kustova
; Description: js file for Repair Shop App.
;===========================================
*/

export class CartComponent extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<i id="cartIcon" class="fa fa-shopping-cart"></i> (<span id="cart-count"></span>)`;
    }
}
