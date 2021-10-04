/*
============================================
; Title: http-client.js
; Author: Professor Krasso
; Date:  3 October 2021
; Modified By: Oksana Kustova
; Description: js file for Whatabook2.
;===========================================
*/

export class HttpClient {
  constructor() {}

  async get(url, params = "") {
    url = new URL(url);
    url.search = new URLSearchParams(params);
    let res = await fetch(url.toString(), { method: "GET" });
    return res.json();
  }
}
