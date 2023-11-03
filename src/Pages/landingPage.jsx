
import Button from "../Components/Elements/Button/Button"
import CardAuth from "../Components/Fragments/CardAuth"
import Navbar from "../Components/Fragments/Navbar"

const LandingPage = () => {
  return (
    <div className="w-full h-screen bg-[url('/Images/BackgroundLanding.svg')] bg-no-repeat bg-cover flex flex-col justify-center">
      <Navbar/>
      <div className="flex flex-col md:flex-row md:justify-between mx-[6%]">
        <div className="flex flex-col gap-3 mt-[40%] md:mt-[10%] justify-center">
          <h1 className="md:w-[75%] text-tBlue font-bold text-[15px] md:text-[28px] text-left">Academic Monotoring System memantau perkembangan akademik anak </h1>
          <p className="md:w-[70%] text-[12px] md:text-[15px] font-medium">Dapatkan akses real-time untuk memantau nilai, kehadiran dan tugas anak Anda secara terperinci.</p>
          <Button classname="w-[150px] lg:w-[210px] text-white bg-tBlue text-[12px] mx-auto mt-4">Panduan</Button>
        </div>
        <CardAuth/>        
      </div>

    </div>
  )
}

export default LandingPage