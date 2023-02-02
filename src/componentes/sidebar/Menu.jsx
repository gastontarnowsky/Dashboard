import React from "react";
import {RiDashboardLine, RiBriefcaseLine, RiCalendar2Line, RiMessage2Line} from "react-icons/ri";
function Menu(){
  return(
  <nav>
    <ul>
      <li>
        <a href='#' className='flex items-center gap-4 hover:bg-purple-600 p-4 text-gray-400 hover:text-white rounded-lg transition-colors font-semibold'>
          <RiDashboardLine />
          Dashboard
        </a>
      </li>
      <li>
        <a href='#' className='flex items-center gap-4 hover:bg-purple-600 p-4 text-gray-400 hover:text-white rounded-lg transition-colors font-semibold'>
          <RiBriefcaseLine />
          Job board
        </a>
      </li>
      <li>
        <a href='#' className='flex items-center gap-4 hover:bg-purple-600 p-4 text-gray-400 hover:text-white rounded-lg transition-colors font-semibold'>
          <RiCalendar2Line />
          Shedule
        </a>
      </li>
      <li>
        <a href='#' className='flex items-center gap-4 hover:bg-purple-600 p-4 text-gray-400 hover:text-white rounded-lg transition-colors font-semibold'>
          <RiMessage2Line />
          Messenger
        </a>
      </li>
    </ul>
  </nav>
  );
}

export default Menu;