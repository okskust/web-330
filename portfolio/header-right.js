export class HeaderRight extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      
             <div class="nav-list">
          
            <a href="about.html">About</a>
        
          <div class="dropdown">  
          <button class="dropbtn" onclick="myFunction()">Projects
          <i class="fa fa-caret-down"></i>
        </button>
          
          <div class="dropdown-content" id="myDropdown">
          <a href="projects.html">My Projects</a>
          <a href="diagrams.html">Database Diagrams</a>
          <a href="tests.html">API Unit Tests</a>
        </div></div>
            
            <a href="resume.html">Resume</a>
        
        </div>
    
          `;
  }
}
