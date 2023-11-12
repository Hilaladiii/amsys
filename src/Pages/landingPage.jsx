
import { Link } from "react-router-dom"
import Button from "../Components/Elements/Button/Button"
import CardLogin from "../Components/Fragments/CardLogin"
import CardRegister from "../Components/Fragments/CardRegister"
import Navbar from "../Components/Fragments/Navbar"
import { useState } from "react"

const LandingPage = () => {
  const [isCardLogin, setIsCardLogin] = useState(true)
  const handleLoginClick = () => {
    setIsCardLogin(true);
  }
  const handleRegisterClick = () => {
    setIsCardLogin(false);
  }
  return (
    <div className="w-full h-screen bg-[url('./assets/images/BackgroundLanding.svg')] bg-no-repeat bg-cover flex flex-col justify-center">
      <Navbar onLoginClick={handleLoginClick} onRegisterClick={handleRegisterClick} />
      <div className="flex flex-col items-center md:flex-row md:justify-between mx-[6%] ">
        <div className="flex flex-col gap-3 mt-[90%] md:mt-[10%] justify-center">
          <h1 className="md:w-[75%] text-tBlue font-bold text-[15px] md:text-[28px] 2xl:text-[32px] text-left animate-fade animate-delay-200">Academic Monotoring System memantau perkembangan akademik anak </h1>
          <p className="md:w-[70%] text-[12px] md:text-[15px] 2xl:text-[18px] font-medium animate-fade animate-delay-300">Dapatkan akses real-time untuk memantau nilai, kehadiran dan tugas anak Anda secara terperinci.</p>
          <Button classname="w-[150px] lg:w-[210px] text-white bg-tBlue text-[12px] md:text-[15px] 2xl:text-[18px] mx-auto mt-4 animate-fade-up">Panduan</Button>
        </div>
        { 
          isCardLogin ? <CardLogin/> : <CardRegister/>
        }        
        <div className="mb-[50px]"></div>        
      </div>
      

    </div>
  )
}

export default LandingPage