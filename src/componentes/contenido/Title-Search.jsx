import {RiSearchLine, RiMapPinRangeLine, RiFilter3Line} from "react-icons/ri";
{/*RiNotification3Line, RiArrowDownSLine,RiCheckboxBlankCircleFill  */}
function TitleSearch() {
  return(
    <>
      {/* Title */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold">Job Board</h1>
      </div>
      {/* Search */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center mb-6">
        <form className="col-span-1 md:col-span-2">
          <div className="relative">
            <RiSearchLine className="absolute left-1 lg:left-0 top-3 text-purple-600" />
            <input type="text" className="bg-white py-2 pl-8 lg:pl-6 pr-4 outline-none w-full" placeholder="Search by job title, company, keywords" />
          </div>
        </form>
        <form className="col-span-1">
          <div className="relative">
            <RiMapPinRangeLine className="absolute left-1 lg:left-0 top-3 text-purple-600" />
            <select type="text" className="text-gray-400 bg-white py-[8.2px] pl-8 lg:pl-6 pr-4 outline-none w-full">
              <option>Anywhere</option>
            </select>
          </div>
        </form>
        <form className="col-span-1">
          <div className="relative">
            <RiFilter3Line className="absolute left-1 lg:left-0 top-3 text-purple-600" />
            <input type="text" className="bg-white py-2 pl-8 lg:pl-6 pr-4 outline-none w-full" placeholder="Filters" />
            <span className="absolute text-xs right-2 top-[7px] bg-purple-600 text-white py-1 px-[9px] rounded-full">4</span>
          </div>
        </form>
      </div>
    </>
  );
}

export default TitleSearch;