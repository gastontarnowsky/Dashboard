import React, { useState } from "react";
import "./App.css";
import {  RiMenuFill, RiCloseLine} from "react-icons/ri";

import Logo from "./componentes/sidebar/Loguito";
import Menu from "./componentes/sidebar/Menu";
import ImageLogout from "./componentes/sidebar/Image-logout";

import Header from "./componentes/contenido/Header";
import TitleSearch from "./componentes/contenido/Title-Search";
import TComponentes from "./componentes/contenido/TComponentes";
import Results from "./componentes/contenido/Results";
import Cards from "./componentes/contenido/Cards";

function App() {

  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = ()=>{
    setSidebar(!sidebar);
  }

  return (
    <div className="min-h-screen grid grid-col-1 lg:grid-cols-6">
      
      {/* Sidebar */}
      <div className={`fixed lg:static w-[80%] md:w-[70%] lg:w-full top-0 z-50 bg-purple-100 lg:bg-white transition-all ${
        sidebar ? "-left-0" : "-left-full"
        } w-full h-full col-span-1 p-2 border-r`}>
        {/*logotipo*/}
        <Logo />
        <div className="flex flex-col justify-between h-[600px]">
          <div>
            {/* Menu */}
            <Menu />
            {/* image and logout */}
            <ImageLogout />
          </div>
        </div>
      </div>

      {/* Btn menu movil */}
      <button onClick={handleSidebar} className='block lg:hidden absolute bottom-4 right-4 bg-purple-600 p-2 text-white rounded-full text-2xl z-50'>
        {sidebar ? <RiCloseLine /> : <RiMenuFill />}
      </button>

      {/* Content */}
      <div className='col-span-5'>
        {/* Header */}
        <Header />
        {/* Content */}
        <div className="p-4 md:p-8 lg:p-8 lg:pl-12 lg:pr-12 bg-gray-100">
          <TitleSearch />
          {/* T */}
          <TComponentes />
          {/* Results */}
          <Results />
          {/* Cards */}
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default App;
