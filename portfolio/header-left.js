export class HeaderLeft extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <div class = "nav-list-left">
  
     
        
            <a href="index.html"><img
            src="images/myLogo.png"
            class="logo"
            alt="logo Oksana Kustova"
        /></a>
        
     
  
    </div>
          `;
    }
  }
  
