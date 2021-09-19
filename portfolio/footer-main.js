  
export class FooterMain extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div id="footer">
                <p>
                    Copyright &copy; 2021 <a href="#">Bellevue University</a>
                    <a href="#">GitHub repositories</a>
                    <a href="#">Bellevue Universities Web Development Degree</a>
                    <a href="#">The course's YouTube channel</a>
                    <a href="#">The courses GitHub repositories</a>
                </p>
            </div>
        `;
    }
}

