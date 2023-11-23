import EventCalendar from "../Components/Fragments/Calendar"
import CardTugas from "../Components/Fragments/CardTugas"
import Navbar, { NavbarLeft } from "../Components/Fragments/Navbar"


const TugasPage = () => {
  return (
    <div className="w-full h-screen">
      <Navbar types={'akademik-navbar'}/>
      <div className="w-full mt-[18%] lg:mt-[6%] flex flex-col md:flex-row py-5 gap-4">
      <NavbarLeft/>
      <div className="lg:fixed lg:ml-[22%] flex flex-col md:flex-row ">
        <EventCalendar/>
          <div className="flex flex-col justify-center items-center p-5 shadow-lg gap-2 2xl:gap-5 animate-fade-down">
            <CardTugas statusTugas={"Tugas Selesai"} totalTugas={'52'}/>
            <CardTugas statusTugas={"Belum Dikerjakan"} totalTugas={'4'}/>
            <CardTugas statusTugas={"Terlewat"} totalTugas={'2'}/>
          </div>
      </div>
      </div>
    </div>
  )
}

export default TugasPage