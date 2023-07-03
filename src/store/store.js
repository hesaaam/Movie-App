import $ from 'jquery'








$(document).on('alpine:init', function () {
  Alpine.data('header', () => ({
    toggleAciveClass: false,

  }))
})


$(document).on('alpine:init', function () {


  Alpine.data('layout', function () {
    return {
      toggleAciveClassSidebar: false,

      /**
       * store movieId in `localStorage`,
       * when you click any movie card or click on watch btn in banner_content
       */
      getMovieDetails(movieId) {
        window.localStorage.setItem('movieId', String(movieId));
        // location.reload();

      },
    }

  })
})









