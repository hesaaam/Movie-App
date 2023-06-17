import search from "./searchBar";
import '../store/store'
import '../store/api/api.js'
const Header = () => {
  return (
    /* html */`
      <header x-data="header" class="header">
        <a href="/" x-on:click.prevent="changeRoute('/'); $store.Popular.fetchPopularMovieList()" class="logo">
          <div class="app_name">
            <span >H</span>
            <span>movie</span>
          </div>
          <img src="/favicon.svg" alt="Hmovie home" />
        </a>
        ${search()}
        <button @click="toggleAciveClass = true" class="search_btn">
          <img src="/dist/img/search.png" width="24" height="24" alt="open search box" />
        
        </button>

        <button @click="toggleAciveClassSidebar = !toggleAciveClassSidebar" class="menu_btn" :class="toggleAciveClassSidebar && 'active'">
          <img src="/dist/img/menu.png" width="24" height="24" alt="open menu" />
          <img  src="/dist/img/menu-close.png" width="24" height="24" alt="close menu" />
        </button>
      </header>
    
    `
  )
}

export default Header
