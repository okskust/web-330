export class HeaderLeft extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <div class = "nav-list-left">
  
     
        
            <a href="/web-330/portfolio/index.html"><img
            src="/web-330/portfolio/images/myLogo.png"
            class="logo"
            alt="logo Oksana Kustova"
        /></a>
        
     
  
    </div>
          `;
    }
  }
  
