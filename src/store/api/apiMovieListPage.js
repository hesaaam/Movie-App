import $ from 'jquery';
import { imageBaseURL, api_key, baseURL } from './api'
import { fetchData } from '../../utils/usefulFunctions';
import { wordToPersian } from '../../utils/translate';
import { createMovieCard } from '../../components/movieCard';

$(document).on('alpine:init', function () {

  Alpine.data('movieList', function () {
    return {
      movieList: [],
      curentPage: 1,
      totalPage: 0,
      imageBaseURL,
      wordToPersian,
      // collect genre name & url parameter from local storage
      genreName: window.localStorage.getItem('genreName'),
      urlParam: window.localStorage.getItem('urlParam'),

      init() {




        fetchData(`${baseURL}discover/movie?api_key=${api_key}&include_adult=false&
        include_video=false&page=${this.curentPage}&sort_by=popularity.desc&${this.urlParam}`)
          .then(({ results: movieList, total_page }) => {

            this.movieList = movieList
            this.totalPage = total_page

            document.title = `${this.genreName} Movie - Hmovie`;
          })
          .catch((err) => {
            console.error('Error:', err);

          })


      },

      // loadMore object binding to load_more btn for get more movies
      loadMore: {

        ['@click']() {
          if (this.curentPage >= this.totalPage) {
            this.$el.style.display = 'none'; // this.$el == `class='load_more'` btn in movieListPage.js
            return;
          }
          this.curentPage++;
          this.$el.classList.add('loading'); //this.$el == `class='load_more'` btn

          fetchData(`${baseURL}discover/movie?api_key=${api_key}&include_adult=false&
          include_video=false&page=${this.curentPage}&sort_by=popularity.desc&${this.urlParam}`)
            .then(({ results: movieList }) => {
              this.$el.classList.remove('loading'); //this.$el == `class='load_more'` btn

              for (const movie of movieList) {
                const movieCard = createMovieCard(movie)

                this.$refs.gridList.appendChild(movieCard);
                // this.$refs.gridList == div => class="grid_list"
              }

            })

        },
      },

    }
  })
  // ---------------------------------------------------

})

