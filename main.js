import Alpine from 'alpinejs'
import './src/main.scss';
import $ from 'jquery'
import Layout from './src/layout/Layout';
import './src/router/router.js';



window.Alpine = Alpine




$('#app').html( `
    ${Layout()}
`)




Alpine.start()
