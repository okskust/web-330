export class HeaderRight extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <div>
             <ul class="nav-list">
          <li>
            <a href="about.html">About</a>
          </li>
          <li>
            <a href="projects.html">Projects</a>
          </li>
          <li>
            <a href="diagrams.html">Database Diagrams</a>
          </li>
          <li>
            <a href="tests.html">API Unit Tests</a>
          </li>
          <li>
            <a href="resume.html">Resume</a>
          </li>
        </ul>
    </div>
          `;
    }
  }
  
