
import { imageBaseURL } from '../store/api/api.js';
/**
 * movie card
 */

export const createMovieCard = (movie) => {
  const {
    poster_path,
    title,
    vote_average,
    release_date,
    id,
    overview
  } = movie;

  const card = document.createElement('div');
  card.classList.add('movie_card');

    card.innerHTML = `

      
     <div class="card_head">
       <figure class="poster_box card_banner">
       <img src="${imageBaseURL}w342${poster_path}" alt="${title} " class="img_cover" loading="lazy"/>
       </figure>
       <a href="/detail" @click.prevent="changeRoute('/detail'); getMovieDetails(${id})" 
        class="card_btn" title="${title}">
          <div class="meta_list">
            <div class="meta_item">
              <img src="/dist/img/star.png" width="20" height="20" loading="lazy" alt="rating" />
              <span class="span">${vote_average.toFixed(1)}</span>
            </div>

            <div class="card_badge">${release_date.split('-')[0]}</div>

          </div>
          <p class="movie_text">${overview}</p>
          <div class="play">
          <img src="/dist/img/play.png" alt="ply"/>
          </div>

          <!-- getMovieDetails() called from store/store.js -->
        </a>


      </div>
      <h4 class="title">${title}</h4>
    `

  return card;
}

