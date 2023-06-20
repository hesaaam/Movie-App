import Header from "../components/Header";
import Sidebar from "../components/sidebar"; 
import Home from "../pages/home";
import Detail from "../pages/detail";
import movieListPage from "../pages/movieListPage";
import '../store/store'
import '../store/api/api.js'





const Layout = () => {
  return (
    /* html */`
    <div x-data="route">

      <div x-data="layout">
      
        ${Header()}
        ${Sidebar()}

        <template x-if="route === '/'" >
          ${Home()}
        
        </template>

        <template x-if="route === '/detail'" >
          ${Detail()}
        </template>
        <template x-if="route === '/movie-list'" >
          ${movieListPage()}
        </template>
      
      </div>
    
    
    
    </div>

 
    
   

    
    `
  )

}


export default Layout


