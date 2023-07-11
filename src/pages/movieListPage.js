


const movieListPage = () => {
  return (
    /* html */`
   
        <article x-data="movieList" class="art_container" x-ref="movieList_page">
          


          <!--
            -movie list
          -->

          <section class="movie_list genre_list" :ariaLabel="genreName+' '+'movie'" >
            <div class="title_wrapper">
              <h1 class="heading" x-text="' فیلم های '+''+wordToPersian(genreName)"></h1>
            </div>
            <div class="grid_list" x-ref="gridList">
              <template x-if="movieList" >
                <template x-for="movie in movieList" :key="movie.id">
                  <div class="movie_card">
                    <div class="card_head">
                      <figure class="poster_box card_banner">
                        <img :src="imageBaseURL+'w342'+movie.poster_path" :alt="movie.title " class="img_cover" loading="lazy"/>
                      </figure>
                      
                      <a href="/detail" @click.prevent="changeRoute('/detail'); getMovieDetails(movie.id)" 
                      class="card_btn" :title="movie.title">
                        <div class="meta_list">
                          <div class="meta_item">
                            <img src="/dist/img/star.png" width="20" height="20" loading="lazy" alt="rating" />
                            <span class="span" x-text="movie.vote_average.toFixed(1)"></span>
                          </div>
                        
                          <div class="card_badge" x-text="movie.release_date.split('-')[0]"></div>
                        </div>
                        <p class="movie_text" x-text="movie.overview"></p>
                        <div class="play">
                          <img src="/dist/img/play.png" alt="ply"/>
                        </div>
                        <!-- getMovieDetails() called from store/store.js -->
                      </a>
                    </div>
                    <h4 class="title" x-text="movie.title"></h4>
                  </div>
                </template>
              
              </template>





              
            </div>

            <button x-bind="loadMore" class="btn load_more">بیشتر</button>
          </section>


          
          
          

          
        </article>
          
    
     
    `
  )
}


export default movieListPage
