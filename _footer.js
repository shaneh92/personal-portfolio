class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="card">
    <div class="app-header">Important Links</div>
    <div class="grid-container-links">
      <div class="grid-item-links">
        <ul>
          <li>
            <a href="https://github.com/shaneh92" target="_blank"
              >Shane Hingtgen GitHub Repositories</a
            >
          </li>
          <li>
            <a
              href="https://www.bellevue.edu/degrees/bachelor/web-development-bs/"
              target="_blank"
              >Bellevue University Web Development Degree</a
            >
          </li>
        </ul>
      </div>
      <div class="grid-item-links">
        <ul>
          <li>
            <a
              href="https://www.youtube.com/user/bellevueuniversity"
              target="_blank"
              >Web 330 Youtube Channel</a
            >
          </li>
          <li>
            <a href="https://github.com/buwebdev/web-330" target="_blank"
              >Web 330’s GitHub Repository</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
            <div class="foot">
            
                <p>
                    Copyright &copy; 2021 <a href="https://www.bellevue.edu/">Bellevue University</a>
                </p>
            </div>`;
  }
}

customElements.define("footer-component", Footer);
