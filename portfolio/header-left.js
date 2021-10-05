export class HeaderLeft extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <div>
  
        <ul class="nav-list left">
          <li>
            <a href="index.html"><img
            src="images/myLogo.png"
            class="logo"
            alt="logo Oksana Kustova"
        /></a>
          </li>
        </ul>
  
    </div>
          `;
    }
  }
  
