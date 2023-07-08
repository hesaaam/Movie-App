import $ from 'jquery';
import { wordToPersian } from '../../utils/translate';
import { addHeroSlideTo , fetchData } from '../../utils/usefulFunctions';
import { api_key, imageBaseURL, baseURL } from './api';


$(document).on('alpine:init', function () {

  // Popular movie list //

  Alpine.data('Popular', function()  {
    return {
      PopularMovieList: [],
      imageBaseURL,
      slider_item: '',
      poster_box: '',
  
  
  
      // fetch all popular movies and genres list
      fetchPopularMovieList() {
        // get genre list from genre_ids in popular movie list
        /**
         * fetch all genres eg : [{"id": "45" , "name": "Action"}]
         * then change genre format eg: {123: "Action"}
         * 
         */
        const genreList = {
          asString(genreIdList) {
  
            var newGenreList = [];
  
            for (const genreID of genreIdList) {
  
              this[genreID] && newGenreList.push(wordToPersian(this[genreID]));
            }
  
            return newGenreList.join('، ');
          }
  
  
        }
        console.log(genreList);
        // ================================================================================//
  
        fetchData(`${baseURL}genre/movie/list?api_key=${api_key}`)
  
          .then((res) => {
            /**
              * fetch all genres eg : [{"id": "45" , "name": "Action"}]
              * then change genre format eg: {123: "Action"} 
              * 
             */
            for (const { id, name } of res.genres) {
              genreList[id] = name;
  
  
            }
  
            fetchData(`${baseURL}movie/popular?api_key=${api_key}&language=en-US&page=1`)
      
              .then((res) => {
                
                  
                this.PopularMovieList = res.results
      
      
                
               
      
                if (this.PopularMovieList.length) {
                  this.PopularMovieList.forEach((item, index) => {
      
                    const {
                      backdrop_path,
                      title,
                      release_date,
                      genre_ids,
                      overview,
                      poster_path,
                      vote_average,
                      id,
                      language
      
                    } = item;
                    this.slider_item += `
                          <div  class="slider_item ">
                            <img src="${this.imageBaseURL}original${backdrop_path}"
                              alt="${title}" class="img_cover" loading=${index === 0 ? "eager" : "lazy"}
                            />
          
                            <div class="banner_content">
                              <h2 class="heading">
                                ${title}
                              </h2>
          
                              <div class="meta_list">
                                <div class="meta_item">${release_date.split("-")[0]}</div>
          
                                <div class="meta_item card_badge">${vote_average.toFixed(1)}</div>
                              </div>
          
                              <p class="genre">${genreList.asString(genre_ids)}</p>
                              <P class="banner_text" data-lang="${language}" >${overview}</P>
                              
                              <a href="/detail" @click.prevent="changeRoute('/detail');
                               getMovieDetails(${id})" 
                               class="btn">
                                <span>حالا تماشا کن</span>
                                <img src="/dist/img/play_circle.png" width="24" height="24" aria-hidden="true" alt="play circle" />
          
                              </a>
                            </div>
                          </div>
                        
                        `
                      // line 110 getMovieDetails() called from store/store.js
                    this.poster_box += `
                          <button class="poster_box slider_item " slider-control="${index}">
                            <img src="${this.imageBaseURL}w154${poster_path}"
                            alt="Slide to ${title} "
                              loading="lazy"
                              draggable="false"
                              class="img_cover"
                            />
                          </button>
        
                        `
      
                  })
      
                }
      

              })
          })
          
          this.$watch('PopularMovieList', value => value && addHeroSlideTo())
      },
  
  
      // ---------> init method(default method in alpine.js)==> look like useEffect in react
  
      async init() {
         this.fetchPopularMovieList()
      
    
      }

    }
  });




})
