const search = () => {
  return(
  /* html */`
      <div :class="{'active' : toggleAciveClass}" class="search-box" search-box>
       <div class="search-wrapper" search-wrapper>
         <input dir="auto" type="text"  name="search" placeholder="جستجو" 
         aria-label="search movie"
          autocomplete="off"
         />
         <img class="search_icon" style="
           width: 24px;
           height: 24px;"
           src="/dist/img/search.png" alt="search"
          />
       </div>   
       <button @click="toggleAciveClass = false" class="search_btn">
         <img src="/dist/img/close.png"  alt="close search box"
         width="24" height="24"

         />
       </button>
      </div>`
  )
}

export default search
