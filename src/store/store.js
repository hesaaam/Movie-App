import $ from 'jquery'



$(document).on('alpine:init', function () {


  Alpine.data('layout', function () {
    return {
      toggleAciveClassSidebar: false,
      toggleAciveClass: false, // use in header.js

      /**
       * store movieId in `localStorage`,
       * when you click any movie card or click on watch btn in banner_content
       */
      getMovieDetails(movieId) {
        window.localStorage.setItem('movieId', String(movieId));
        // location.reload();

      },

      getMovieList (urlparam, genreName) {
        window.localStorage.setItem('urlParam', urlparam);
        window.localStorage.setItem('genreName', genreName);
      },

    }

  })
})









