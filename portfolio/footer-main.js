export class FooterMain extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
            <div id="footer">
            <div class = "footer-left">
           
            CONTACTS
            <ul>
            <li>Email: okustova@my365.bellevue.edu</li>
            <li>Phone: 111-222-3333</li>          
            </ul>
            </div>


            <div class = "footer-right">
            LINKS
            <ul>
            <li><a href="https://www.bellevue.edu/degrees/bachelor/web-development-bs/">Bellevue University Web Development Degree</a></li>
            <li><a href="https://www.youtube.com/c/bellevueuniversity">Bellevue University YouTube channel</a></li>
            <li><a href="https://github.com/buwebdev">Bellevue University GitHub repositories</a></li>
            </ul>
            </div>
          <div>

                <p>
                    Copyright &copy; 2021 Oksana Kustova

                </p>
                </div>
            </div>
        `;
  }
}
