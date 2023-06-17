// import Alpine from 'alpinejs';
import $ from 'jquery'




 


$(document).on('alpine:init', function () {
  Alpine.data('header', () => ({
    toggleAciveClass: false,

  }))
})
$(document).on('alpine:init', function () {
  Alpine.data('layout', () => ({
    toggleAciveClassSidebar: false,

  }))
})









