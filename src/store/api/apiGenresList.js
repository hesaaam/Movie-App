import { wordToPersian } from '../../utils/translate';
import { api_key, baseURL } from './api';
import { fetchDataFromTmdb } from './api';



document.addEventListener('alpine:init', function () {
  // genre-list //

  Alpine.data('genres', function () {
    return {
      genresList: null,
      wordToPersian,



      fetchGenreMovieList() {
        fetchDataFromTmdb(`${baseURL}genre/movie/list?api_key=${api_key}`, ({genres}) => {

          this.genresList = genres


        });

      },

      init() {
        this.fetchGenreMovieList()

      }

    }
  })
  // ---------------------------------------------------

})
