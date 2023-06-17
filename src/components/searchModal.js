const searchModal = () => {
  return (
    /* html */`
    
      <div class="search_modal active">
        <p class="label">نتیجه برای</p>

        <h1 class="heading">گربه چکمه پوش</h1>

        <div class="movie_list">
          <div class="grid_list">



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
      </div>
    
    `
  )
}


export default searchModal
