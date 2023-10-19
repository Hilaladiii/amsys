
import Button from "../Components/Elements/Button/Button"
import CardAuth from "../Components/Fragments/CardAuth"
import Navbar from "../Components/Fragments/Navbar"
import { motion,  } from "framer-motion"

const LandingPage = () => {
  

  return (
    <div className="w-full h-screen bg-[url('/Images/BackgroundLanding.svg')] bg-no-repeat bg-cover">
      <Navbar/>
      <div className="flex flex-row justify-between mx-[6%]">
        <div className="w-[880px] flex flex-col gap-3  mt-[10%] justify-center ">
          <motion.h1 className="w-[880px] text-tBlue font-bold text-[36px]">Academic Monotoring System memantau perkembangan akademik anak </motion.h1>
          <p className="w-[700px] text-[18px] font-medium">Dapatkan akses real-time untuk memantau nilai, kehadiran dan tugas anak Anda secara terperinci.</p>
          <Button classname="w-[210px] text-white bg-tBlue text-[18px] mx-auto mt-4">Panduan</Button>
        </div>
        <CardAuth/>
      </div>

    </div>
  )
}

export default LandingPage