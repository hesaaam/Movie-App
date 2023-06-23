

const Detail = () => {
  return (
    /* html */`
        <article class="art_container">
          
          <!--
            movie detail
          -->
          <div class="movie_detail">
            <div class="backdrop_image" style="background-image: url('/dist/img/slider-banner.jpg')"></div>
            

            <figure class="poster_box movie_poster">
              <img src="/dist/img/slider-control.jpg" alt="Puss in Boots: The Last Wish" class="img_cover"/>
            </figure>


            <div class="detail_box">
              <div class="detail_content">
                <h1 class="heading">puss in boots: the last wish</h1>

               <div class="meta_list">
                  <div class="meta_item">
                    <img  src="/dist/img/star.png" width="20" height="20" alt="rating" />

                    <span class="span">8.4</span>
                  </div>

                  <div class="separator"></div>

                  <div class="meta_item">162m</div>

                  <div class="separator"></div>

                  <div class="meta_item">2022</div>

                  <div class="meta_item card_badge">PG-13</div>
               </div> 


               <p class="genre">انیمیشن، اکشن، ماجراجویی</p>

               <p class="overview">گربه چکمه پوش متوجه می شود که اشتیاق او به ماجراجویی تاثیر خود را گذاشته است: او از نه زندگی خود هشت تا را سوزانده است و تنها یک زندگی برای او باقی مانده است. پوس سفری حماسی را آغاز می کند تا آخرین آرزوی افسانه ای را بیابد و زندگی نه گانه خود را بازسازی کند.</p>
               
               <ul class="detail_list">
                  <div class="list_item">
                    <P class="list_name">ستارگان</P>

                    <p>Letitia Wright, Lupita Nyong'o, Danai Gurira, Winston Duke, Dominique Thorne, Tenoch Huerta Mejía, Angela Bassett, Florence Kasumba, Michaela Coel, Mabel Cadena</p>

                    
                  </div>
                  <div class="list_item">
                    <P class="list_name">کارگردان</P>

                    <p>Ryan Coogler</p>


                  </div>
               </ul>



              </div>

              <div class="title_wrapper">
                <h3 class="title_large">تریلر و کلیپ ها</h3>
              
              </div>

              <div class="slider_list">
                <div class="slider_inner">
                  <div class="video_card"></div>
                  <div class="video_card"></div>
                  <div class="video_card"></div>
                  <div class="video_card"></div>
                </div>
              </div>
            </div>
          </div>



        </article>
    
    
    `
  )
}


export default Detail
