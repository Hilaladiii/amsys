import { Link } from "react-router-dom"
import Button from "../Elements/Button/Button"
import Hamburger from "../Elements/Button/Hamburger"
import { useState } from "react"


const Navbar = ({ onLoginClick, onRegisterClick, types }) => {  
  const [open, setOpen] = useState(false)
  const handleOpen = () =>{
    setOpen(!open)
  }  
  return (
    <header className="top-0 left-0 w-full fixed bg-white z-50 md:bg-transparent">    
      {
        types === 'auth-navbar' 
          ? 
            <AuthNavbar onLoginClick={onLoginClick} onRegisterClick={onRegisterClick} handleOpen={handleOpen} isOpen={open}/> 
          : types ==='dashboard-navbar' ? <DashboardNavbar handleOpen={handleOpen} isOpen={open}/> 
          : types ==='akademik-navbar' ? <NavbarTop handleOpen={handleOpen} isOpen={open}/> : null
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
      <nav className="w-full flex flex-row justify-between p-5 lg:p-10 items-center bg-white z-50 ">      
          <Link to="/" className="w-[100px] h-[30px] lg:w-[150px] lg:h-[40px] bg-[url('./assets/images/logo.png')] bg-cover animate-fade delay-150"/>
          <div className="hidden md:flex flex-row items-center text-[15px] 2xl:text-[18px]">
            <Button classname="bg-none text-tBlue font-bold animate-fade-right animate-delay-100" >Hubungkan Akun Mahasiswa</Button> 
            <Link className="bg-tBlue w-[65px] h-[35px] flex flex-row justify-center items-center rounded-2xl p-1 animate-fade-right animate-delay-150"> <div className="w-[60%] h-[60%] bg-[url('./assets/icons/icon-arrow.svg')] bg-cover bg-no-repeat bg-center animate"></div></Link>
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

const NavbarTop = ({handleOpen, isOpen}) =>{
  return(
    <>
      <nav className="w-full flex flex-row justify-between px-5 md:px-16 lg:px-20 py-7 items-center shadow-md z-50 bg-white"> 
          <div className="flex flex-row justify-between items-center gap-3 lg:gap-32">
            <Link to="/" className="w-[100px] h-[30px] lg:w-[110px] lg:h-[38px] 2xl:w-[150px] 2xl:h-[50px] bg-[url('./assets/images/logo.png')] bg-cover bg-center animate-fade-right delay-150"/>
            <div className="flex flex-row justify-center items-center gap-2 animate-fade-right animate-delay-200">
              <div className="w-[40px] h-[40px] 2xl:w-[70px] 2xl:h-[70px] bg-[url('https://amsys.vercel.app/images/akademik.png')] bg-contain bg-no-repeat bg-center"/>
              <span className="text-[15px] 2xl:text-[24px] text-[#9C9191] font-semibold ">Akademik</span>            
            </div>
          </div>     
          <div className="hidden md:flex flex-row gap-3 items-center text-[15px] 2xl:text-[18px] animate-fade-right animate-delay-300">
            <span className="text-[12px] 2xl:text-[18px] text-white bg-tBlue px-4 py-2 rounded-3xl ">Federico Roberto Dos Santos</span>
            <span className="text-[#9C9191]">|</span>
            <div className="w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] bg-[url('./assets/icons/profile.png')] bg-contain bg-center"/>
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

const NavbarLeft = () =>{
  return(
    <nav className="hidden md:w-[20%] md:h-[84vh] lg:flex flex-col justify-center gap-3 2xl:gap-6 bg-white text-[15px] px-4 py-4 2xl:p-7 font-medium shadow-md">
      <div className="flex flex-row items-center gap-3 hover:bg-tBlue animate-fade-right animate-delay-150">
        <div className="w-[25px] h-[25px] 2xl:w-[40px] 2xl:h-[40px] bg-[url('./assets/icons/icon-beranda.svg')] bg-contain bg-center bg-no-repeat"/>
        <span className="2xl:text-[20px]">Beranda</span>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-row items-center gap-2 animate-fade-right animate-delay-150">
          <div className="w-[30px] h-[30px] 2xl:w-[40px] 2xl:h-[40px] bg-[url('./assets/icons/icon-academic.svg')] bg-contain bg-center bg-no-repeat"/>
          <Link to={'/akademik'} className="2xl:text-[20px]">Akademik</Link>
        </div>      
        <div className="flex flex-col justify-between gap-2 px-8 py-5 animate-fade-right animate-delay-300">
          <div className="flex flex-row items-center gap-2">
            <div className="w-[30px] h-[30px] 2xl:w-[40px] 2xl:h-[40px] bg-[url('./assets/icons/icon-schedule.svg')] bg-cover bg-center bg-no-repeat"/>
            <Link className="2xl:text-[20px]">Jadwal Kuliah</Link>
          </div>
          <div className="flex flex-row items-center gap-2">
            <div className="w-[30px] h-[30px] 2xl:w-[40px] 2xl:h-[40px] bg-[url('./assets/icons/icon-IP.svg')] bg-cover bg-center bg-no-repeat"/>            
            <Link className="2xl:text-[20px]">IP Semester</Link>
          </div>
          <div className="flex flex-row items-center gap-2">
            <div className="w-[30px] h-[30px] 2xl:w-[40px] 2xl:h-[40px] bg-[url('./assets/icons/icon-tugas.svg')] bg-cover bg-center bg-no-repeat"/>
            <Link className="2xl:text-[20px]">Tugas</Link>            
          </div>
          <div className="flex flex-row items-center gap-2 2xl:text-[20px]">
            <div className="w-[30px] h-[30px] 2xl:w-[40px] 2xl:h-[40px] bg-[url('./assets/icons/icon-KHS.svg')] bg-cover bg-center bg-no-repeat"/>
            <Link className="">KHS dan Evaluasi</Link>            
          </div>
          
         </div>      
      </div>

      <div className="flex flex-row items-center gap-2 2xl:text-[20px] animate-fade-right animate-delay-150">
        <div className="w-[30px] h-[30px] 2xl:w-[40px] 2xl:h-[40px] bg-[url('./assets/icons/icon-kemahasiswaan.svg')] bg-cover bg-center bg-no-repeat"/>
        <span>Kemahasiswaan</span>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-row items-center gap-2 2xl:text-[20px] animate-fade-right animate-delay-150">
          <div className="w-[30px] h-[30px] 2xl:w-[40px] 2xl:h-[40px] bg-[url('./assets/icons/icon-informasi.svg')] bg-cover bg-center bg-no-repeat"/>
          <span>Informasi</span>
        </div>
        <div className="flex flex-col justify-between gap-2 px-8 py-5 animate-fade-right animate-delay-300">
          <div className="flex flex-row items-center gap-2 2xl:text-[20px]">
            <div className="w-[30px] h-[30px] 2xl:w-[40px] 2xl:h-[40px] bg-[url('./assets/icons/icon-terkini.svg')] bg-cover bg-center bg-no-repeat"/>
            <Link>Tekini</Link>
          </div>
          <div className="flex flex-row items-center gap-2 2xl:text-[20px]">
            <div className="w-[30px] h-[30px] 2xl:w-[40px] 2xl:h-[40px] bg-[url('./assets/icons/icon-biaya.svg')] bg-cover bg-center bg-no-repeat"/>            
            <Link>Biaya Kuliah</Link>
          </div>
          <div className="flex flex-row items-center gap-2 2xl:text-[20px]">
            <div className="w-[30px] h-[30px] 2xl:w-[40px] 2xl:h-[40px] bg-[url('./assets/icons/icon-informasiAkademik.svg')] bg-cover bg-center bg-no-repeat"/>
            <Link>Akademik</Link>            
          </div>          
          
         </div>      
      </div>
    </nav>
  )
}  

export default Navbar
export {NavbarLeft}



