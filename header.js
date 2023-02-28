/*
=================================================================================================================
; Title: Personal Portfolio
; Author: Shane Hingtgen
; Bellevue University
; Date: 02/21/23
; Description: We create a personal portfolio, this is a partial
; Work Cited:
    Web 330 HTML, CSS, and JavaScript Requirements
    Web 330 Personal Portfolio
=================================================================================================================
*/

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
            <div id="banner">
            <div class="card">
                <h1>Shane Hingtgen's Personal Portfolio</h1></div></div>
                <nav class="navbar">
                <a href="index.html">Home</a>
                <a href="about.html">About</a>
                <a href="resume.html">Resume</a>
                <a href="projects.html">Projects</a>
                <a href="database.html">Database Diagrams</a>
                <a href="apitest.html">API Unit Tests</a>
              </nav>
        `;
  }
}

customElements.define("header-component", Header);
