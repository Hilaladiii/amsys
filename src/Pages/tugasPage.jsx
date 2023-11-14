import EventCalendar from "../Components/Fragments/Calendar"
import CardTugas from "../Components/Fragments/CardTugas"
import Navbar, { NavbarLeft } from "../Components/Fragments/Navbar"


const TugasPage = () => {
  return (
    <div>
      <Navbar types={'akademik-navbar'}/>
      <div className="mt-[18%] lg:mt-[6%] flex flex-col md:flex-row py-5 gap-4">
      <NavbarLeft/>
      <EventCalendar/>
        <div className="flex flex-col items-center p-5 shadow-lg gap-2 animate-fade-down">
          <CardTugas statusTugas={'Tugas Selesai'} totalTugas={'52'}/>
          <CardTugas statusTugas={'Belum Dikerjakan'} totalTugas={'4'}/>
          <CardTugas statusTugas={'Terlewat'} totalTugas={'2'}/>
        </div>
      </div>
    </div>
  )
}

export default TugasPage