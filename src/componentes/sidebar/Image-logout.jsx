import {RiLogoutBoxRLine} from "react-icons/ri";

function ImageLogout(){
  return(
    <div className='flex flex-col '>
      <img src="laptop.svg" alt="Image" />
      {/* Update */}
      <div className='bg-purple-200 p-6 flex flex-col gap-2 rounded-b-3xl'>
        <h3 className='text-xl text-center'>Get upgrade</h3>
        <p className='text-gray-500 text-center'>
          Consectetur adipiscing elit. Phasellus eget nisl
        </p>
        <button className='bg-purple-600 text-white p-2 rounded-lg'>
          Learn more
        </button>
      </div>
      <a href="#" className='flex items-center gap-4 hover:bg-purple-600 p-4 text-gray-400 hover:text-white rounded-lg transition-colors font-semibold'>
        <RiLogoutBoxRLine />
        Logout
      </a>
    </div>
  );
}

export default ImageLogout;