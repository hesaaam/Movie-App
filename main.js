import Alpine from 'alpinejs'
import persist from '@alpinejs/persist'
import jsz from "alpinejs-jsz";
import './src/main.scss';
import $ from 'jquery'
import Layout from './src/layout/Layout';
import './src/router/router.js';
// import './src/store/api/apiDetailPage.js';

Alpine.plugin(jsz);
Alpine.plugin(persist)


window.Alpine = Alpine




$('#app').html( `
    ${Layout()}
`)




Alpine.start()
