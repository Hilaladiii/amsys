import EventCalendar from "../Components/Fragments/Calendar"
import Navbar, { NavbarLeft } from "../Components/Fragments/Navbar"


const TugasPage = () => {
  return (
    <div>
      <Navbar types={'akademik-navbar'}/>
      <div className="w-[100vw] h-[50vh] mt-[6%] flex flex-row py-5 gap-4">
      <NavbarLeft/>
      <EventCalendar/>
      </div>
    </div>
  )
}

export default TugasPage