import Header from "../components/Header";
import Sidebar from "../components/sidebar"; 
import Home from "../pages/home";
import Detail from "../pages/detail";
import movieListPage from "../pages/movieListPage";
import '../store/store'
import '../store/api/api.js'
import searchModal from "../components/searchModal";





const Layout = () => {
  return (
    /* html */`
    <div x-data="route">

      <div x-data="layout" >
      
        ${Header()}

        <main x-ref="main">
        
          ${Sidebar()}

          <template x-if="route === '/home' || route === '/'" >
            ${Home()}
          
          </template>

          <template x-if="route === '/detail'" >
            ${Detail()}
          </template>
          <template x-if="route === '/movie-list'" >
            ${movieListPage()}
          </template>
          ${searchModal()}
        </main>
      
      </div>
    
    
    
    </div>

 
    
   

    
    `
  )

}


export default Layout


