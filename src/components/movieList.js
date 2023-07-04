import { createMovieCard } from "./movieCard" 

export const movieList = function ({results : movieResults}, title) {
  
  const path = window.location.pathname 
  const pageContent = document.querySelector('[page_content]')
  const pageDetail = document.querySelector('[page_detail]');
  const movieListElem = document.createElement('section')

  movieListElem.classList.add('movie_list')
  movieListElem.ariaLabel =  path === '/detail'? 'ممکن است دوست داشته باشید' : title 

  movieListElem.innerHTML = `
        <div class="title_wrapper">
          <h3 class="title_large">${path === '/detail'? 'ممکن است دوست داشته باشید' : title} </h3>
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

  
  switch (path) {
    case '/home':
      return pageContent.appendChild(movieListElem)
    case '/':
      return pageContent.appendChild(movieListElem)
    case '/detail':
      return pageDetail.appendChild(movieListElem);
    default:
      break;
  }
  
}


 
