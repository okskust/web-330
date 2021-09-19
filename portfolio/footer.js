  
export class Footer extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div id="footer">
                <p>
                    Copyright &copy; 2021 <a href="#">Bellevue University</a>
                </p>
            </div>
        `;
    }
}

