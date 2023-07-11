import { api_key, fetchDataFromTmdb, baseURL } from './api';
import {movieList} from '../../components/movieList';

/**
 * Home page section `Top rated, Upcoming, Trending movies`
 */




document.addEventListener('alpine:init', function () {

  Alpine.data('homePage', function () {
    return {
      homePageSections: [
        {
          title: "بزودی",
          path: "movie/upcoming"
        },
        {
          title: "فیلم های پرطرفدار هفته",
          path: "trending/movie/week"
        },
        {
          title: "فیلم های دارای رتبه برتر",
          path: "movie/top_rated"
        },
        {
          title: "در حال پخش",
          path: "movie/now_playing"
        }
      ],

      

      async init() {
        /**
         * fetch data for home page sections `*top rated, Upcoming, Trending*`
        */
        for (const { title, path } of this.homePageSections) {
          fetchDataFromTmdb(`${baseURL}${path}?api_key=${api_key}&page=1` , movieList, title)
          

        }
      }
    }
  })
})


