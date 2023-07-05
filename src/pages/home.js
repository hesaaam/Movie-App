



const Home = () => {
  return (

    /* html */`
        <article x-data="homePage"  class="art_container" x-ref="page_content">
          <!--
            - #BANNER
          -->

          <section x-data="Popular" class="banner" aria-label="popular movies">
            <div class="banner_slider" x-html="slider_item"></div>


            <div class="slider_control">
              <div class="control_inner" x-html="poster_box">
              </div>
            </div>
          </section>


          <!--
            -movie list
        
          -->
          
          
        </article>
    
    `
  )
}


export default Home


