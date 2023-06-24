// import Alpine from 'alpinejs';
import $ from 'jquery'




 


$(document).on('alpine:init', function () {
  Alpine.data('header', () => ({
    toggleAciveClass: false,

  }))
})


$(document).on('alpine:init', function () {
  Alpine.data('layout', function() {
    return {
      toggleAciveClassSidebar: false,
      movieId: this.$persist('').as('movieId'),
      
      /**
       * store movieId in `localStorage`,
       * when you click any movie card or click on watch btn in banner_content
       */
      getMovieDetails: function(movieId)  {
        this.movieId = movieId
        console.log(this.movieId);
      }

    }

  })
})









