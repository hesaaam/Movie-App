


document.addEventListener('alpine:init', function () {
  Alpine.data('route', function () {
    return {
      route: window.location.href,
      path: window.location.pathname,

      changeRoute(route) {
        this.route = route;
        window.location.href = this.route;
      },

      init() {
        window.addEventListener('hashchange', () => {
          this.route = window.location.href
          this.path = window.location.pathname
        });

      }

    }


  })

})


