import searchModal from "../components/searchModal"


const movieListPage = () => {
  return (
    /* html */`
   
        <article x-data="movieList" class="art_container" x-ref="movieList_page">
          


          <!--
            -movie list
          -->

          <section class="movie_list genre_list" :ariaLabel="genreName+' '+'movie'" >
            <div class="title_wrapper">
              <h1 class="heading" x-text="'همه فیلم های '+''+wordToPersian(genreName)"></h1>
            </div>
            <div class="grid_list" x-ref="gridList">
              <template x-if="movieList" >
                <template x-for="movie in movieList" :key="movie.id">
                  <div class="movie_card">
                      <figure class="poster_box card_banner">
                        <img :src="imageBaseURL+'w342'+movie.poster_path" :alt="movie.title " class="img_cover" loading="lazy"/>
                      </figure>
                      <h4 class="title" x-jsz>{{movie.title}}</h4>
          
                      <div class="meta_list">
                        <div class="meta_item">
                          <img src="/dist/img/star.png" width="20" height="20" loading="lazy" alt="rating" />
                          <span class="span" x-jsz>{{movie.vote_average.toFixed(1)}}</span>
                        </div>
                      
                        <div class="card_badge" x-jsz>{{movie.release_date.split('-')[0]}}</div>
                      </div>
          
                      <a href="/detail" @click.prevent="changeRoute('/detail'); getMovieDetails(movie.id)" 
                      class="card_btn" :title="movie.title"> <!-- getMovieDetails() called from store/store.js -->
                      </a>
                  
                  </div>
                </template>
              
              </template>





              
            </div>

            <button x-bind="loadMore" class="btn load_more">بارگذاری بیشتر</button>
          </section>


          
          
          
          <!--${searchModal()}-->
          
        </article>
          
    
     
    `
  )
}


export default movieListPage
