// import Alpine from 'alpinejs'
import $ from 'jquery'


$(document).on('alpine:init', function () {
  Alpine.data('route', function () {
    return {
      route: window.location.href,

      changeRoute(route) {
        this.route = route;
        window.location.href = this.route;
      },

      init() {
        window.addEventListener('hashchange', () => {
          this.route = window.location.href
        });

      }

    }


  })

})


