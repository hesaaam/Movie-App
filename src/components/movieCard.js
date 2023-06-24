
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
    id
  } = movie;

  const card = document.createElement('div');
  card.classList.add('movie_card');

  card.innerHTML = `
      <figure class="poster_box card_banner">
        <img src="${imageBaseURL}w342${poster_path}" alt="${title} " class="img_cover" loading="lazy"/>
      </figure>
      <h4 class="title">${title}</h4>
      
      <div class="meta_list">
        <div class="meta_item">
          <img src="/dist/img/star.png" width="20" height="20" loading="lazy" alt="rating" />
          <span class="span">${vote_average.toFixed(1)}</span>
        </div>
      
        <div class="card_badge">${release_date.split('-')[0]}</div>
      </div>
      
      <a href="/detail" x-on:click.prevent="changeRoute('/detail'); $nextTick(() => {getMovieDetails(${id} )})" 
       class="card_btn" title="${title}"> <!-- getMovieDetails() called from store/store.js -->
      </a>
  
  `

  return card;
}

