class MovieItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <style>
        .list-movie {
          width: 100%;
          margin: 10px;
        }
        
        .card {
          margin-bottom: 10px;
          border: 0;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .2);
        }
        
        .card-body .poster-film {
          max-height: 280px;
        }
        
        .card-body {
          display: flex;
          padding: 10px;
        }
        
        .info {
          margin: 10px 20px;
        }
        
        .card-body .info h2 {
          font-size: 20px;
          font-weight: 500;
          margin-bottom: 10px;
        }
        
        .card-body .info h4 {
          font-size: 18px;
          font-weight: 400;
        }
        
        .card-body .info p {
          font-weight: 200;
          font-size: 16px;
          margin: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 6;
        }
        
        
        @media screen and (max-width: 992px) {
          .card-body {
            display: flex;
          }
      
          .info {
            margin: auto 20px;
          }
      
          .card-body .poster-film {
            max-height: 220px;
            margin-bottom: 0;
          }
      
          .card-body .info h2 {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          }
      
          .card-body .info p {
            font-weight: 200;
            font-size: 14px;
            margin: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 4;
          }     
        }
      </style>
      <div class="card">
          <div class="card-body">
              <img class="poster-film" src="https://image.tmdb.org/t/p/w500/${this._movie.poster_path}" alt"Poster">
                  <div class="info">
                      <h2> ${this._movie.title} </h2>
                      <h4> ${this._movie.release_date} </h4>
                      <h4> ${this._movie.vote_average} </h4>
                      <p> ${this._movie.overview} </p>
                  </div>
              </div>
          </div>
      </div>`;
  }
}

customElements.define("movie-item", MovieItem);
