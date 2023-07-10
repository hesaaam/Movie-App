import $ from 'jquery'
import { fetchData } from '../utils/usefulFunctions';
import { api_key, baseURL,imageBaseURL, fetchDataFromTmdb } from './api/api';
import { createMovieCard } from '../components/movieCard';



$(document).on('alpine:init', function () {


  Alpine.data('layout', function () {
    return {
      toggleAciveClassSidebar: false,
      toggleAciveClass: false, // use in header.js
      searchField: '', // x-model to input on searchBar.js
      imageBaseURL,

      /**
       * store movieId in `localStorage`,
       * when you click any movie card or click on watch btn in banner_content
       */
      getMovieDetails(movieId) {
        window.localStorage.setItem('movieId', String(movieId));
        // location.reload();

      },

      /**
       * store ulparam and genreName in `localStorage` for use in apimovieListPage.js
       * 
       */
      getMovieList (urlparam, genreName) {
        window.localStorage.setItem('urlParam', urlparam);
        window.localStorage.setItem('genreName', genreName);
      },


      init() {
        /**
         * watch searchField and Any time change, run callback
         */
        this.$watch('searchField', query => {
          if (!query.trim()) {
            this.$refs.searchResult.classList.remove('active'); // element in searchModal.js
            this.$refs.search_wrapper.classList.remove('searching'); //  element in searchBar.js
            return;
          }
  
          this.$refs.search_wrapper.classList.add('searching');
  
          fetchDataFromTmdb(`${baseURL}search/movie?api_key=${api_key}&query=${query}&include_adult=false&page=1`,
            ({results: movieList}) => {
            
            this.$refs.search_wrapper.classList.remove('searching');
            this.$refs.searchResult.classList.add('active');
            this.$refs.searchResult.innerHTML = ''; // remove old results
            

            this.$refs.searchResult.innerHTML = `
                <p class="label">نتیحه برای</p>

                <h1 class="heading" x-text="searchField.toLowerCase()"></h1>

                <div class="movie_list">

                  <div class="grid_list"></div>
                </div>

            `;

            for (const movie of movieList) {
              const movieCrad = createMovieCard(movie)

              this.$refs.searchResult.querySelector('.grid_list').appendChild(movieCrad);
            }

          })
        })
      }

    }

  })
})









