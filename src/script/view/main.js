import "../component/list-movie.js";
import "../component/search-bar.js";
import DataSource from "../data/data-source.js";

const main = () => {
  const searchElement = document.querySelector("search-bar");
  const movieList = document.querySelector("list-movie");

  const btnSearchClicked = async () => {
    try {
      const result = await DataSource.searchFilm(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = (results) => {
    movieList.movies = results;
  };

  const fallbackResult = (message) => {
    movieList.renderError(message);
  };

  searchElement.clickEvent = btnSearchClicked;
};

export default main;
