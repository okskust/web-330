export class HeaderLeft extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <div>
  
        <ul class="nav-list">
          <li>
            <a href="index.html">Oksana Kustova</a>
          </li>
        </ul>
  
    </div>
          `;
    }
  }
  
