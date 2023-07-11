



const Sidebar = () => {
  return (
    /* html */`

        <nav x-data="genres" class="sidebar" :class="toggleAciveClassSidebar && 'active'">
          <div class="sideabr_inner">
            <div  class="sidebar_list" genreList>
              <p class="title">ژانر</p>
              <template x-if="genresList">
                <template x-for="genre in genresList" :key="genre.id">
                  <a  x-text="wordToPersian(genre.name)" href=""
                    @click.prevent="changeRoute('/movie-list');
                    getMovieList('with_genres='+genre.id, genre.name);
                    toggleAciveClassSidebar = false"
                    class="sidebar_link" >
                  </a>

                </template>
              
              </template>


            </div>
            <div class="sidebar_list">
              <p class="title">زبان</p>

              <a href="/movie-list" class="sidebar_link"
                @click.prevent="changeRoute('/movie-list');
                getMovieList('with_original_language=fa','Persian')">
                ایرانی
              </a>
              <a href="/movie-list" class="sidebar_link"
               @click.prevent="changeRoute('/movie-list');
               getMovieList('with_original_language=tr','Turkish')">
               ترکی
              </a>
              <a href="/movie-list" class="sidebar_link"
                @click.prevent="changeRoute('/movie-list');
                getMovieList('with_original_language=hi','Hindi')">
                هندی
              </a>

            </div>

            <div class="sidebar_footer">
              <p class="copyRight">
                copyright 2023 <a href="https://www.linkedin.com/in/hesam-jalili-83867325b/">hesam-jalili</a>
              </p>

              <img src="/dist/img/tmdb-logo.svg" width="130" height="17" alt="the movie database logo" />
            </div>
          </div>
        
        </nav>
        
        <!--
          overlay
        -->
        <div @click="toggleAciveClassSidebar = false"  :class="toggleAciveClassSidebar && 'active'" class="overlay"></div>



    
    
      `
  )
}


export default Sidebar
