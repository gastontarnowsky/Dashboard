import { RiDropboxFill, RiTwitchLine, RiGoogleLine, RiAmazonLine } from "react-icons/ri";

function Cards(){
  return(
    <>
      {/* Card 1 */}
      
      <a href="/" className="bg-white flex flex-col md:flex-row rounded-2xl p-4 gap-8 w-full drop-shadow-lg border-2 border-transparent hover:border-purple-600 transition-all mb-4">
        {/* Icons */}
        <div className="w-full md:w-[10%] flex items-center justify-center">
          <RiDropboxFill className="text-7xl bg-purple-100 text-purple-600 p-4 rounded-md" />
        </div>
        {/* Title card */}
        <div className="w-full md:w-[70%]">
          <h1 className="font-semibold text-xl flex items-center gap-4 mb-2">
            UX Designer {" "}
            <span className="text-xs py-1 px-2 bg-purple-100 text-purple-600 font-bold">
              Remote
            </span>
            <span className="text-xs py-1 px-2 bg-green-100 text-green-600 font-bold">
              Sketch
            </span>
          </h1>
          <p className="text-gray-500">Dropbox ---- Warszawa</p>
        </div>
        {/* Time */}
        <div className="w-full md:w-[20%] flex flex-col items-end">
          <h3 className="text-xl text-gray-500">8.8 - 13.7k PLN</h3>
          <p className="text-gray-500">2 days ago</p>
        </div>
      </a>

      {/* Card 2 */}

      <a href="/" className="bg-white flex flex-col md:flex-row rounded-2xl p-4 gap-8 w-full drop-shadow-lg border-2 border-transparent hover:border-purple-600 transition-all mb-4">
        {/* Icons */}
        <div className="w-full md:w-[10%] flex items-center justify-center">
          <RiTwitchLine className="text-7xl bg-purple-100 text-purple-600 p-4 rounded-md" />
        </div>
        {/* Title card */}
        <div className="w-full md:w-[70%]">
          <h1 className="text-xl flex items-center gap-4 mb-2 font-semibold">
            Product Designer {" "}
            <span className="text-xs py-1 px-2 bg-purple-100 text-purple-600 font-bold">
              Remote
            </span>
          </h1>
          <p className="text-gray-500">Twitch ---- Wroclaw</p>
        </div>
        {/* Time */}
        <div className="w-full md:w-[20%] flex flex-col items-end">
          <h3 className="text-xl text-gray-500">8.2 - 13.5k PLN</h3>
          <p className="text-gray-500">2 days ago</p>
        </div>
      </a>

      {/* Card 3 */}

      <a href="/" className="bg-white flex flex-col md:flex-row rounded-2xl p-4 gap-8 w-full drop-shadow-lg border-2 border-transparent hover:border-purple-600 transition-all mb-4">
        {/* Icons */}
        <div className="w-full md:w-[10%] flex items-center justify-center">
          <RiGoogleLine className="text-7xl bg-purple-100 text-purple-600 p-4 rounded-md" />
        </div>
        {/* Title card */}
        <div className="w-full md:w-[70%]">
          <h1 className="text-xl flex items-center gap-4 mb-2 font-semibold">
            UX/UI Designer {" "}
            <span className="text-xs py-1 px-2 bg-purple-100 text-purple-600 font-bold">
              Remote
            </span>
            <span className="text-xs py-1 px-2 bg-yellow-100 text-yellow-600 font-bold">
              Javascript
            </span>
          </h1>
          <p className="text-gray-500">Google ---- Warszawa</p>
        </div>
        {/* Time */}
        <div className="w-full md:w-[20%] flex flex-col items-end">
          <h3 className="text-xl text-gray-500">7.5 - 12.5k PLN</h3>
          <p className="text-gray-500">2 days ago</p>
        </div>
      </a>

      {/* Card 4 */}

      <a href="/" className="bg-white flex flex-col md:flex-row rounded-2xl p-8 gap-8 w-full drop-shadow-lg border-2 border-transparent hover:border-purple-600 transition-all mb-4">
        {/* Icons */}
        <div className="w-full md:w-[10%] flex items-center justify-center">
          <RiAmazonLine className="text-7xl bg-purple-100 text-purple-600 p-4 rounded-md" />
        </div>
        {/* Title card */}
        <div className="w-full md:w-[70%]">
          <h1 className="text-xl flex items-center gap-4 mb-2 font-semibold">
            Motion Designer {" "}
            <span className="text-xs py-1 px-2 bg-purple-100 text-purple-600 font-bold">
              Remote
            </span>
            <span className="text-xs py-1 px-2 bg-red-100 text-red-600 font-bold">
              Adobe
            </span>
          </h1>
          <p className="text-gray-500">Amazon ---- Warszawa</p>
        </div>
        {/* Time */}
        <div className="w-full md:w-[20%] flex flex-col items-end">
          <h3 className="text-xl text-gray-500">7.2 - 12.5k PLN</h3>
          <p className="text-gray-500">2 days ago</p>
        </div>
      </a>
    </>
  );
}

export default Cards;