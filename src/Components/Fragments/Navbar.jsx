import { Link, useHref } from "react-router-dom"
import Button from "../Elements/Button/Button"
import Hamburger from "../Elements/Button/Hamburger"
import { useState } from "react"


const Navbar = ({ onLoginClick, onRegisterClick }) => {
  const pathName = useHref() 
  const [open, setOpen] = useState(false)
  const handleOpen = () =>{
    setOpen(!open)
  }  
  return (
    <header className="top-0 left-0 w-full fixed bg-white z-50 md:bg-transparent">    
      {
        pathName === '/' 
          ? 
            <AuthNavbar onLoginClick={onLoginClick} onRegisterClick={onRegisterClick} handleOpen={handleOpen} isOpen={open}/> 
          : <DashboardNavbar handleOpen={handleOpen} isOpen={open}/>
      }
    </header>
  )
}

const AuthNavbar = ({onLoginClick, onRegisterClick, handleOpen, isOpen}) =>{
  
  return(
    <>
      <nav className="w-full flex flex-row justify-between p-5 lg:p-10 items-center ">      
          <Link to="/" className="w-[100px] h-[30px] lg:w-[150px] lg:h-[40px] bg-[url('./assets/images/logo.png')] bg-cover animate-fade delay-150"/>
          <div className="hidden md:flex flex-row gap-5 text-[15px] 2xl:text-[18px]">
            <Button classname="bg-none text-white focus:text-tBlue focus:bg-white animate-fade-right animate-delay-100" >Kontak</Button>
            <Button classname="bg-none text-white focus:text-tBlue focus:bg-white animate-fade-right animate-delay-200"  onClick={onLoginClick}>Masuk</Button>
            <Button classname="bg-none text-white focus:text-tBlue focus:bg-white animate-fade-right animate-delay-300" onClick={onRegisterClick}>Daftar</Button>        
          </div>

          <button onClick={handleOpen} className="md:hidden">          
            <Hamburger />        
          </button>                

      </nav>
          {
            isOpen &&
            <div className="w-full p-10 bg-tBlue md:hidden">
              <div className="w-50% flex flex-col gap-3">
                <Button>Kontak</Button>
                <Button onClick={onLoginClick}>Masuk</Button>
                <Button onClick={onRegisterClick}>Daftar</Button>
              </div>
              
            </div>
          }
    </>
  )
}

const DashboardNavbar = ({handleOpen, isOpen}) =>{
 
  return(
    <>
      <nav className="w-full flex flex-row justify-between p-5 lg:p-10 items-center ">      
          <Link to="/" className="w-[100px] h-[30px] lg:w-[150px] lg:h-[40px] bg-[url('./assets/images/logo.png')] bg-cover animate-fade delay-150"/>
          <div className="hidden md:flex flex-row items-center text-[15px] 2xl:text-[18px]">
            <Button classname="bg-none text-tBlue font-bold animate-fade-right animate-delay-100" >Hubungkan Akun Mahasiswa</Button> 
            <Link className="bg-tBlue w-[65px] h-[35px] flex flex-row justify-center items-center rounded-2xl p-1 animate-fade-right animate-delay-150"> <div className="w-[60%] h-[60%] bg-[url('./assets/icons/icon-arrow.svg')] bg-cover bg-no-repeat bg-center"></div></Link>
          </div>

          <button onClick={handleOpen} className="md:hidden">          
            <Hamburger />        
          </button>                

      </nav>
          {
            isOpen &&
            <div className="w-full p-10 bg-tBlue md:hidden">
              <div className="w-50% flex flex-col gap-3">
                <Button>Hubungkan Akun Mahasiswa</Button>               
              </div>
              
            </div>
          }
    </>
  )
}







export default Navbar



