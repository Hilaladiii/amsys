import CardAkademik from "../Components/Fragments/CardAkademik"
import Navbar, { NavbarLeft } from "../Components/Fragments/Navbar"

const AkademikPage = () => {
  return (
    <div className="w-full flex flex-col">
      <Navbar types={'akademik-navbar'}/>        
      <div className="w-[100vw] h-[50vh] mt-[6%] flex flex-row py-5 gap-4">
        <NavbarLeft/>
        <div className="flex flex-col gap-2">
          <CardAkademik/> 
          <CardAkademik/> 
          <CardAkademik/> 
          <CardAkademik/> 
        </div>

      </div>      
      
    </div>
  )
}

export default AkademikPage