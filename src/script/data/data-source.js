// class DataSource {
//   static searchFilm(keyword) {
//     const baseUrl = `https://api.themoviedb.org/3`;
//     const api_key = `be42a911c47a690bd54e2e9f1e0a831d`;

//     return fetch(
//       `${baseUrl}/search/movie?api_key=${api_key}&language=en-US&query=${keyword}&page=1&include_adult=false`
//     )
//       .then((response) => response.json())
//       .then((responseJson) => {
//         if (responseJson.results.length > 0) {
//           return Promise.resolve(responseJson.results);
//         } else {
//           return Promise.reject(`${keyword} is not found`);
//         }
//       });
//   }
// }

class DataSource {
  static async searchFilm(keyword) {
    const baseUrl = `https://api.themoviedb.org/3`;
    const api_key = `be42a911c47a690bd54e2e9f1e0a831d`;

    const response = await fetch(
      `${baseUrl}/search/movie?api_key=${api_key}&language=en-US&query=${keyword}&page=1&include_adult=false`
    );
    const responseJson = await response.json();
    if (responseJson.results.length > 0) {
      return Promise.resolve(responseJson.results);
    } else {
      return Promise.reject(`${keyword} is not found`);
    }
  }
}

export default DataSource;
