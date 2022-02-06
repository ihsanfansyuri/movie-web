class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDom = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDom.querySelector("#searchElement").value;
  }

  render() {
    this.shadowDom.innerHTML = `
      <style>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">

      .search-container {
        padding-left: 18px;
        border-radius: 10px;
        z-index: 10;
      }
      
      .search-container > input {
        width: 60%;
        padding: 16px;
        border: 0;
        border-radius: 10px;
        z-index: 10;
      }
      
      .search-container > input:focus {
        outline: 0;
      }
      
      .search-container > button {
        width: 15%;
        cursor: pointer;
        margin-left: auto;
        padding: 16px;
        color: black;
        border: 0;
        border-radius: 10px;
        font-weight: bold;
      }
      
      .search-container > button:hover {
        background-color: #c2c2c2;
      }
      
      .search-container > button:focus {
        outline: 0;
      }
      
      @media screen and (max-width: 768px) {
        .search-container > input {
          width: 80%;
        }
    
        .search-container > button {
          width: 18%;
        }
      }
      
      @media screen and (max-width: 576px) {
        .search-container > input {
          width: 100%;
          margin-bottom: 5px;
        }
    
        .search-container > button {
          width: 100%;
        }
      }
      </style>

      <div id="search-container" class="container search-container">
          <input placeholder="Search Movie" id="searchElement" type="search">
          <button id="btnSearch" type="submit">Search</button>
      </div>
        `;

    this.shadowDom
      .querySelector("#btnSearch")
      .addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-bar", SearchBar);
