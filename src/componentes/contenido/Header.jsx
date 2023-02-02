import {RiNotification3Line, RiArrowDownSLine, RiSearchLine, RiCheckboxBlankCircleFill} from "react-icons/ri";


function Header(){
  return(
    <header className="flex flex-col md:flex-row items-center gap-4 justify-between p-4 md:px-8 lg:px-12 w-full">
      {/* Search */}
      <form className="w-full md:w-[50%] lg:w-[50%] order-1 md:-order-none">
        <div className="relative">
          <RiSearchLine className="absolute left-1 md:left-4 lg:left-8 top-3" />
          <input type="text" className="border-[1px] py-2 pl-8 md:pl-10 lg:pl-14 pr-4 outline-none rounded-lg w-full" placeholder="Quick Search (ctrl + D)" />
        </div>
      </form>
      {/* Notifications */}
      <nav className="w-full md:w-[50%] lg:w-[50%] justify-center flex md:justify-end">
        <ul className="flex items-center gap-4">
          <li>
            <a href="#" className="relative">
              <RiNotification3Line className="text.lg"/>
              <RiCheckboxBlankCircleFill className="absolute -right-1 -top-1 text-xs text-red-500"/>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-1">
              Gaston Tarnowsky <RiArrowDownSLine />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );  
} 

export default Header;