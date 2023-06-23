import { createMovieCard } from "./movieCard" 

const movieList = function ({results : movieResults}, title) {
  const pageContent = document.querySelector('[page_content]')
  const movieListElem = document.createElement('section')
  movieListElem.classList.add('movie_list')
  movieListElem.ariaLabel = title

  movieListElem.innerHTML = `
        <div class="title_wrapper">
          <h3 class="title_large">${title} </h3>
        </div>
        <div class="slider_list">

          <div class="slider_inner">
           


          </div>
      </div>
  
  `

  for (const movie of movieResults) {
    const movieCrad = createMovieCard(movie) // called from movieCard.js

    movieListElem.querySelector('.slider_inner').appendChild(movieCrad);

  }
  pageContent.appendChild(movieListElem);
}


export default movieList
