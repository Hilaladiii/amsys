import Navbar, { NavbarLeft } from "../Components/Fragments/Navbar"
import TabelNilai from "../Components/Fragments/TabelNilai"
import Carrousels from "../Components/Layouts/Carrousels"

const KhsEvaluasiPage = () => {
  return (
    <div className="flex flex-col">
      <Navbar types={'akademik-navbar'}/>        
      <div className="mt-[29%] md:mt-[14%] lg:mt-[7%] 2xl:mt-[7%] flex flex-col lg:flex-row py-5">
        <NavbarLeft/>        
        <div className="w-full lg:ml-[24%] flex flex-col justify-center gap-2 px-4 lg:px-0">
          <select name="semester" id="" className="max-w-[150px] bg-tBlue text-white rounded-md px-3 2xl:text-[20px]">
            <option value="semester 1">Semester 1</option>
            <option value="semester 2">Semester 2</option>
            <option value="semester 3">Semester 3</option>
          </select>          
          <Carrousels/>          
          <TabelNilai/>    
        </div>                              
      </div>      
      
    </div>
  )
}

export default KhsEvaluasiPage