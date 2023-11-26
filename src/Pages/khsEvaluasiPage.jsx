import CardKHS from "../Components/Fragments/CardKHS"
import Navbar, { NavbarLeft } from "../Components/Fragments/Navbar"
import Carrousels from "../Components/Layouts/Carrousels"

const KhsEvaluasiPage = () => {
  return (
    <div className="flex flex-col">
      <Navbar types={'akademik-navbar'}/>        
      <div className=" mt-[29%] md:mt-[14%] lg:mt-[7%] 2xl:mt-[7%] flex flex-col lg:flex-row py-5 gap-5">
        <NavbarLeft/>        
        <div className="w-full ml-[23%] flex flex-col">
          <select name="semester" id="" className="max-w-[150px] bg-tBlue text-white rounded-md px-3 2xl:text-[20px]">
            <option value="semester 1">Semester 1</option>
            <option value="semester 2">Semester 2</option>
            <option value="semester 3">Semester 3</option>
          </select>          
          <Carrousels/>
        
        </div>              
         
        
      </div>      
      
    </div>
  )
}

export default KhsEvaluasiPage