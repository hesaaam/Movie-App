// import Alpine from 'alpinejs'
import $ from 'jquery'


$(document).on('alpine:init', function () {
  Alpine.data('route', function () {
    return {
      route: window.location.hash.substring(1) || '/',

      changeRoute(route) {
        this.route = route;
        window.location.hash = this.route;
      },

      init() {
        window.addEventListener('hashchange', () => {
          this.route = window.location.hash.substring(1) || '/';

        });

      }

    }


  })

})


