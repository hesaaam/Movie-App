


document.addEventListener('alpine:init', function () {
  Alpine.data('route', function () {
    return {
      route: window.location.hash.replace('#', '') || '/home',
      changeRoute (path) {
        this.route = path;
        window.location.hash = path
        location.reload();
      },

      init() {
       this.route = window.location.hash ? window.location.hash.replace('#', '') : '/home'
      }

    }


  })

})


