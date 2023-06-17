import movieList from "../components/movieList"
import '../store/api/api.js';


const Home = () => {
  return (

    /* html */`
        <article  class="art_container">
          <!--
            - #BANNER
          -->

          <section class="banner" aria-label="popular movies">
            <div class="banner_slider" x-html="$store.Popular.slider_item"></div>


            <div class="slider_control">
              <div class="control_inner" x-html="$store.Popular.poster_box">
              </div>
            </div>
          </section>


          <!--
            -movie list
          -->
          <!--
          ${movieList()}
          -->
        </article>
    
    `
  )
}


export default Home


