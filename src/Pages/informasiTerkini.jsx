import CardInformasi from "../Components/Fragments/CardInformasi"
import Navbar, { NavbarLeft } from "../Components/Fragments/Navbar"


const InformasiTerkini = () => {
  return (
    <div className="flex flex-col">
      <Navbar types={"akademik-navbar"}/>
      <div className="flex flex-row gap-4 mt-[7%]">
        <NavbarLeft/>
        <div className="w-full flex flex-row gap-3 mt-3 ">
          
          <div className="h-[80vh] flex flex-col gap-2 overflow-y-scroll">
            <div className="w-full flex flex-row gap-2 "> 
              <input type="text" placeholder="ketikkan sesuatu" className="w-full text-[12px] shadow-md rounded-md p-2" />
              <button className="bg-tBlue text-[12px] text-white rounded-md px-3 py-2">Cari</button>
            </div>
            <CardInformasi type={"mini-card"}/>            
            <CardInformasi type={"mini-card"}/>            
            <CardInformasi type={"mini-card"}/>
            <CardInformasi type={"mini-card"}/>
          </div>

          <CardInformasi/>

          
        </div>
      </div>
    </div>
  )
}

export default InformasiTerkini