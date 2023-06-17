import $ from 'jquery';
import { wordToPersian } from '../../utils/translate';
import { addHeroSlideTo } from '../../utils/usefulFunctions';
// ************************************************************************//
// api_key and base_url and imagebase_url
const api_key = 'fa2b076043395727551ac88a6d8a8da4';
const baseURL = 'https://api.themoviedb.org/3/';
const imageBaseURL = 'https://image.tmdb.org/t/p/'

// ******************************************************//



// initializing alpine with jquery for alpine.store(*Usable throughout the project*)
$(document).on('alpine:init', function () {
  // genre-list //

  Alpine.store('genres', {
    genresList: null,
    wordToPersian,



    fetchGenreMovieList() {
      try {
        fetch(`${baseURL}genre/movie/list?api_key=${api_key}`)
          .then(res => res.json())
          .then(res => this.genresList = res.genres)




      } catch (error) {
        console.log(error);
      }


    },

    init() {
      this.fetchGenreMovieList()


      const settings = {
        async: true,
        crossDomain: true,
        url: 'https://ai-translation-apis.p.rapidapi.com/',
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': 'ae1f51e48dmsh48ee401f07a348fp175bccjsn83f580fc403d',
          'X-RapidAPI-Host': 'ai-translation-apis.p.rapidapi.com'
        },
        processData: false,
        data: JSON.stringify({
          "fromLan": "en",
          "toLan": "fa",
          "text": "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever."
        })
      };
      
      $.ajax(settings).done(function (response) {
        alert(response.data.translated);
      });
    }
  })
  // ---------------------------------------------------

  // Popular movie list //

  Alpine.store('Popular', {
    PopularMovieList: null,
    imageBaseURL,
    slider_item: '',
    poster_box: '',
    wordToPersian,
    addHeroSlideTo,

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
      // ================================================================================//
      try {
        fetch(`${baseURL}genre/movie/list?api_key=${api_key}`)
          .then(res => res.json())
          .then((res => {
               /**
                 * fetch all genres eg : [{"id": "45" , "name": "Action"}]
                 * then change genre format eg: {123: "Action"}
                 * 
                */
            for (const { id, name } of res.genres) {
              genreList[id] = name;
              
              
            }

          }))
          fetch(`${baseURL}movie/popular?api_key=${api_key}&language=en-US&page=1`)
            .then(res => res.json())
            .then((res) => {
              this.PopularMovieList = res.results
              console.log(this.PopularMovieList);
  
  
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
                    id
  
                  } = item;
                  this.slider_item += `
                    <div  class="slider_item ">
                      <img src="${this.imageBaseURL}w1280${backdrop_path}"
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
                        <P class="banner_text">${overview}</P>
    
                        <a href="/detail"  class="btn">
                          <span>حالا تماشا کن</span>
                          <img src="/dist/img/play_circle.png" width="24" height="24" aria-hidden="true" alt="play circle" />
    
                        </a>
                      </div>
                    </div>
                  
                  `
  
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
  
              setTimeout(() => {
  
                this.addHeroSlideTo()
              },);
  
            })

      } catch (error) {
        console.log(error);
      }


    },


    // ---------> init method(default method in alpine.js)==> look like useEffect in react

    init() {
      this.fetchPopularMovieList()

    }
  });




})





