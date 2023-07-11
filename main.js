import Alpine from 'alpinejs'
import './src/main.scss';
import Layout from './src/layout/Layout';
import './src/router/router.js';



window.Alpine = Alpine


document.getElementById('app').innerHTML = `${Layout()}`



Alpine.start()
