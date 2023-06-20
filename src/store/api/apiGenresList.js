import $ from 'jquery';
import { wordToPersian } from '../../utils/translate';
import { api_key } from './api';
import { baseURL } from './api';



$(document).on('alpine:init', function () {
  // genre-list //

    Alpine.data('genres', function()  {
    return {
      genresList: null,
      wordToPersian,
  
  
  
      fetchGenreMovieList() {
        $.get(`${baseURL}genre/movie/list?api_key=${api_key}`, (data, status) => {
          if (status === 'success') {
            this.genresList = data.genres
  
          }
        });
  
      },
  
      init() {
        this.fetchGenreMovieList()
  
      }

    }
  })
  // ---------------------------------------------------

})
