class NavBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <style>
        .navbar-brand {
            font-weight: 600;
        }
        </style>
        <nav class="navbar sticky-top navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" href="#">Filmarch</a>
            </div>
        </nav>
        `;
  }
}

customElements.define("nav-bar", NavBar);
