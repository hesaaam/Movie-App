import './apiGenresList.js';
import './apiPopularList.js';
import './apiHomePage.js';
import './apiDetailPage.js';
import './apiMovieListPage.js';
// ************************************************************************//
// api_key and base_url and imagebase_url
export const api_key = 'fa2b076043395727551ac88a6d8a8da4';
export const baseURL = 'https://api.themoviedb.org/3/';
export const imageBaseURL = 'https://image.tmdb.org/t/p/'

// ******************************************************//



export const fetchDataFromTmdb = function (url, callback, options) {
  fetch(url)
  .then(res => res.json())
  .then(data => callback(data, options));
}
