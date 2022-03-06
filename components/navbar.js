class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <!-- NAVBAR -->
      <nav class="navbar rale">
        <a href="index.html" class="nav-logo"><strong>SABA OMIDVAR, LMFT</strong></a>
        <ul class="nav-menu">
          <li class="nav-item">
            <a href="about.html" class="nav-link">About</a>
          </li>
          <li class="nav-item">
            <a href="approach.html" class="nav-link">Approach</a>
          </li>
          <li class="nav-item">
            <a href="services.html" class="nav-link">Services</a>
          </li>
        </ul>
        <div class="hamburger">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div><!--hamburger-->
      </nav>
    `;
  }
}

customElements.define('navbar-component', Navbar);
