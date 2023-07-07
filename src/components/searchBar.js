const search = () => {
  return (
  /* html */`
      <div  x-show="toggleAciveClass" class="search-box" search-box  
        x-transition:enter="transition ease-out duration-300 "
        x-transition:enter-start="opacity-0 transform scale-90"
        x-transition:enter-end="opacity-100 transform scale-100"
        x-transition:leave="transition ease-in duration-300"
        x-transition:leave-start="opacity-100 transform scale-100"
        x-transition:leave-end="opacity-0 transform scale-90">

       <div class="search-wrapper" x-ref="search_wrapper">
         <input x-model.debounce.800ms="searchField" dir="auto" type="text"  name="search" placeholder="جستجو" 
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
