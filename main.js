import Alpine from 'alpinejs'
import persist from '@alpinejs/persist'
import './src/main.scss';
import $ from 'jquery'
import Layout from './src/layout/Layout';
import './src/router/router.js';
 
Alpine.plugin(persist)


window.Alpine = Alpine




$('#app').html( `
    ${Layout()}
`)




Alpine.start()
