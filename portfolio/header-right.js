export class HeaderRight extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      
             <div class="nav-list">
          
            <a href="/web-330/portfolio/about.html">About</a>
        
          <div class="dropdown">  
          <button class="dropbtn" onclick="myFunction()">Projects
          <i class="fa fa-caret-down"></i>
        </button>
          
          <div class="dropdown-content" id="myDropdown">
          <a href="/web-330/portfolio/projects.html">My Projects</a>
          <a href="/web-330/portfolio//web-335/kustova-diagrams.html">Diagrams</a>
          <a href="/web-330/portfolio/tests.html">API Unit Tests</a>
          <a href="/web-330/portfolio/web-430/devops-presentations.html">DevOps</a>
        </div></div>
            
            <a href="/web-330/portfolio/resume.html">Resume</a>
        
        </div>
    
          `;
  }
}
