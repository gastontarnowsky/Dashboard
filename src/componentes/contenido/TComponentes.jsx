import {RiCloseLine} from "react-icons/ri";
function TComponentes(){
  return(
    <div className="flex items-center flex-wrap gap-4 mb-8">
      <span className="bg-white flex items-center gap-4  py-2 pl-4 pr-6 rounded-full">
        <button className="bg-purple-100 p-1 rounded-full text-purple-600 text-xs">
          <RiCloseLine />
        </button>
          <span className="text-gray-500">Design</span>
      </span>
      <span className="bg-white flex items-center gap-4  py-2 pl-4 pr-6 rounded-full">
        <button className="bg-purple-100 p-1 rounded-full text-purple-600 text-xs">
          <RiCloseLine />
        </button>
        <span className="text-gray-500">Regular</span>
      </span>
      <span className="bg-white flex items-center gap-4  py-2 pl-4 pr-6 rounded-full">
        <button className="bg-purple-100 p-1 rounded-full text-purple-600 text-xs">
          <RiCloseLine />
        </button>
        <span className="text-gray-500">Full Time</span>
      </span>
      <span className="bg-white flex items-center gap-4  py-2 pl-4 pr-6 rounded-full">
        <button className="bg-purple-100 p-1 rounded-full text-purple-600 text-xs">
          <RiCloseLine />
        </button>
        <span className="text-gray-500">B2B</span>
      </span>
      <button className="hover:bg-gray-300 rounded-full text-gray-500 flex items-center gap-4  py-2 pl-2 pr-6">
        <span className="text-center pl-4">Clear All</span>
      </button>
    </div>
  );
}

export default TComponentes;