import search from "./searchBar";
const Header = () => {
  return (
    /* html */`
      <header  class="header">
        <a href="/home" @click.prevent="changeRoute('/home')" class="logo">
          <div class="app_name">
            <span >H</span>
            <span>film</span>
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
