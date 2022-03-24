class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

<!-- NAVBAR/HEADER -->
    <div class="header">
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
          <li class="nav-item">
            <a href="mailto: info@sabaomidvar.com?subject=Website Inquiry" class="nav-link">Contact</a>
          </li>
        </ul>

        <div class="hamburger">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div><!--hamburger-->
      </nav>


      <div class="flex-column flex-around header-text-holder">

        <div class="front-basic poi">
          <h2>About</h2><h2>Saba Omidvar, LMFT</h2>
        </div><!--front-basic-->

        <div class="front-basic">
          <a class="header-btn-holder brawler" href="mailto:info@sabaomidvar.com?subject=Website Inquiry">Schedule a Consultation
          </a>
        </div><!--front-basic-->

      </div><!--header-text-holder-->
    </div><!--header-->
`;
  }
}

customElements.define('header-component', Header);
