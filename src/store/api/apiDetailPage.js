import $ from 'jquery'
import { imageBaseURL, api_key, baseURL, fetchDataFromTmdb } from './api'
import { wordToPersian } from '../../utils/translate.js'



$(document).on('alpine:init', function () {
  Alpine.data('detail', () => ({

    getGenres(genreList) {
      const newGenreList = [];

      for (const { name } of genreList) newGenreList.push(wordToPersian(name));

      return newGenreList.join('، ');
    },

    getCasts(castList) {
      const newCastsList = [];

      for (let i = 0, len = castList.length; i < len && i < 10; i++) {
        const { name } = castList[i];
        newCastsList.push(name);
      }

      return newCastsList.join(', ');
    },

    getDirectors(crewList) {
      const directors = crewList.filter(({ job }) => job === "Director");

      const directorsList = [];
      for (const { name } of directors) directorsList.push(name);

      return directorsList.join(', ');
    },

    /**
     * 
     * returns only trailers and teasers as array
     */
    filterVideos(videoList) {
      return videoList.filter(({ type, site }) => (type === "Trailer" || type === "Teaser")
        && site === "YouTube")
    },

    getAgeCategory (certification) {
      const AgeCategory = certification.find(obj => obj.iso_3166_1 === 'US');
      return AgeCategory ? AgeCategory.certification : null;
    },

    init() {
      const movieId = window.localStorage.getItem('movieId')
      const pageDetail = document.querySelector('[page_detail]');
      fetchDataFromTmdb(`${baseURL}movie/${movieId}?api_key=${api_key}&append_to_response=casts%2Cvideos%2Cimages%2Creleases`,
         (movie) =>{
          const {
            backdrop_path,
            poster_path,
            title,
            release_date,
            runtime,
            vote_average,
            releases:  {countries},
            genres,
            overview,
            casts: { cast, crew },
            videos: { results: videos }
          } = movie;
         
   
          document.title = `${title} - Hmovie`;

          const movieDetail = document.createElement('div');
          movieDetail.classList.add('movie_detail');

          movieDetail.innerHTML = `
              <div class="backdrop_image"
               style="background-image: url('${imageBaseURL}${"w1280" || "original"}
               ${backdrop_path || poster_path}')">
              </div>
              
      
              <figure class="poster_box movie_poster">
                <img src="${imageBaseURL}w342${poster_path}" alt="${title} poster" class="img_cover"/>
              </figure>
      
      
              <div class="detail_box">
                <div class="detail_content">
                  <h1 class="heading">${title}</h1>
      
                 <div class="meta_list">
                    <div class="meta_item">
                      <img  src="/dist/img/star.png" width="20" height="20" alt="rating" />
      
                      <span class="span">${vote_average.toFixed(1)}</span>
                    </div>
      
                    <div class="separator"></div>
      
                    <div class="meta_item">${runtime}m</div>
      
                    <div class="separator"></div>
      
                    <div class="meta_item">${release_date.split("-")[0]}</div>
      
                    <div class="meta_item card_badge">${this.getAgeCategory(countries)}</div>
                 </div> 
      
      
                 <p class="genre">${this.getGenres(genres)}</p>
      
                 <p class="overview">${overview}</p>
                 
                 <ul class="detail_list">
                    <div class="list_item">
                      <P class="list_name">ستارگان</P>
      
                      <p>${this.getCasts(cast)}</p>
      
                      
                    </div>
                    <div class="list_item">
                      <P class="list_name">کارگردان</P>
      
                      <p>${this.getDirectors(crew)}</p>
      
      
                    </div>
                 </ul>
      
      
      
                </div>
      
                <div class="title_wrapper">
                  <h3 class="title_large">تریلر و کلیپ ها</h3>
                
                </div>
      
                <div class="slider_list">
                  <div class="slider_inner"></div>
                </div>
              </div>
              
              `;
          for (const { key, name } of this.filterVideos(videos)) {
            const videoCard = document.createElement("div");
            videoCard.classList.add("video_card");

            videoCard.innerHTML = `
                
                  <iframe width="500" height="249"
                   src="https://www.youtube.com/embed/${key}?&theme=dark&color=white&rel=0" frameborder="0" allowfullscreen="1" title="${name}" class="img_cover" loading="lazy">
                  </iframe>
            
      
        
                `;


            movieDetail.querySelector('.slider_inner').appendChild(videoCard);
          }

          pageDetail.appendChild(movieDetail)
        }
      )
    }

  }))
})
