const movieList = () => {
  return (
    /* html */`
    
          <section class="movie_list" aria-label="upcoming movie">
            <div class="title_wrapper">
              <h3 class="title_large" x-text="window.location === '/detail' ? 'بزودی' : 'ممکن است دوست داشته باشید'"></h3>
            </div>
            <div class="slider_list">

              <div class="slider_inner">

                <div class="movie_card">
                  <figure class="poster_box card_banner">
                    <img src="/dist/img/slider-control.jpg" alt="Puss in Boots: The Last Wish" class="img_cover"/>
                  </figure>
    
                  <h4 class="title">گربه چکمه پوش: آخرین آرزو</h4>
    
                  <div class="meta_list">
                    <div class="meta_item">
                      <img src="/dist/img/star.png" width="20" height="20" loading="lazy" alt="rating" />
                      <span class="span">8.4</span>
                    </div>
    
                    <div class="card_badge">2022</div>
                  </div>
    
                  <a href="/detail" x-on:click.prevent="changeRoute('/detail')"  class="card_btn" title="Puss in Boots: The Last Wish"></a>
                </div>
                <div class="movie_card">
                  <figure class="poster_box card_banner">
                    <img src="/dist/img/slider-control.jpg" alt="Puss in Boots: The Last Wish" class="img_cover"/>
                  </figure>
    
                  <h4 class="title">گربه چکمه پوش: آخرین آرزو</h4>
    
                  <div class="meta_list">
                    <div class="meta_item">
                      <img src="/dist/img/star.png" width="20" height="20" loading="lazy" alt="rating" />
                      <span class="span">8.4</span>
                    </div>
    
                    <div class="card_badge">2022</div>
                  </div>
    
                  <a href="/detail" x-on:click.prevent="changeRoute('/detail')"  class="card_btn" title="Puss in Boots: The Last Wish"></a>
                </div>
                <div class="movie_card">
                  <figure class="poster_box card_banner">
                    <img src="/dist/img/slider-control.jpg" alt="Puss in Boots: The Last Wish" class="img_cover"/>
                  </figure>
    
                  <h4 class="title">گربه چکمه پوش: آخرین آرزو</h4>
    
                  <div class="meta_list">
                    <div class="meta_item">
                      <img src="/dist/img/star.png" width="20" height="20" loading="lazy" alt="rating" />
                      <span class="span">8.4</span>
                    </div>
    
                    <div class="card_badge">2022</div>
                  </div>
    
                  <a href="/detail" x-on:click.prevent="changeRoute('/detail')"   class="card_btn" title="Puss in Boots: The Last Wish"></a>
                </div>
                <div class="movie_card">
                  <figure class="poster_box card_banner">
                    <img src="/dist/img/slider-control.jpg" alt="Puss in Boots: The Last Wish" class="img_cover"/>
                  </figure>
    
                  <h4 class="title">گربه چکمه پوش: آخرین آرزو</h4>
    
                  <div class="meta_list">
                    <div class="meta_item">
                      <img src="/dist/img/star.png" width="20" height="20" loading="lazy" alt="rating" />
                      <span class="span">8.4</span>
                    </div>
    
                    <div class="card_badge">2022</div>
                  </div>
    
                  <a href="/detail" x-on:click.prevent="changeRoute('/detail')"  class="card_btn" title="Puss in Boots: The Last Wish"></a>
                </div>
                <div class="movie_card">
                  <figure class="poster_box card_banner">
                    <img src="/dist/img/slider-control.jpg" alt="Puss in Boots: The Last Wish" class="img_cover"/>
                  </figure>
    
                  <h4 class="title">گربه چکمه پوش: آخرین آرزو</h4>
    
                  <div class="meta_list">
                    <div class="meta_item">
                      <img src="/dist/img/star.png" width="20" height="20" loading="lazy" alt="rating" />
                      <span class="span">8.4</span>
                    </div>
    
                    <div class="card_badge">2022</div>
                  </div>
    
                  <a href="/detail" x-on:click.prevent="changeRoute('/detail')"  class="card_btn" title="Puss in Boots: The Last Wish"></a>
                </div>

              </div>
            </div>
          </section>
    
    
    
    `
  )
}


export default movieList
