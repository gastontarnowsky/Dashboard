import logo from "../../imagenes/react.png"
function Loguito (){
  return(
    <div className="text-center p-2 w-full bg-transparent">
      <img 
        className="w-[80%]"
        src={logo}
        alt="logo react"
       />
       {/* <h1 className="uppercase w-[80%] font-bold tracking-[4px]">tu logo</h1> */}
    </div>
  );
}

export default Loguito;