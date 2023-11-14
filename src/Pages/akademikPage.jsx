import Navbar, { NavbarLeft } from "../Components/Fragments/Navbar"

const AkademikPage = () => {
  return (
    <div className="w-full flex flex-col justify-between">
      <Navbar types={'akademik-navbar'}/>  
      <div className="mt-[8%]"></div>
      <div className="w-full h-[80vh] ">
        <NavbarLeft/>  
      </div>    
      
    </div>
  )
}

export default AkademikPage