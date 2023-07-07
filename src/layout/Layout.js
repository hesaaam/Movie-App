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

          <template x-if="path === '/home' || path === '/'" >
            ${Home()}
          
          </template>

          <template x-if="path === '/detail'" >
            ${Detail()}
          </template>
          <template x-if="path === '/movie-list'" >
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


