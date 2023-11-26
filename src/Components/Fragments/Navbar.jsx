import { Link, useHref, useNavigate } from "react-router-dom"
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
          : types ==='akademik-navbar'||'kemahasiswaan-navbar'||'informasi-navbar' ? <NavbarTop handleOpen={handleOpen} isOpen={open}/> : null
      }
    </header>
  )
}

const AuthNavbar = ({onLoginClick, onRegisterClick, handleOpen, isOpen}) =>{
  
  return(
    <>
      <nav className="w-full flex flex-row justify-between p-5 lg:p-10 items-center ">      
          <Link to="/" className="w-[100px] h-[30px] lg:w-[150px] lg:h-[40px] bg-[url('./assets/images/logo.png')] bg-cover animate-fade delay-150"/>
          <div className="hidden md:flex flex-row gap-5 text-[15px] 2xl:text-[18px] ">
            <Button classname="bg-none text-white focus:text-tBlue focus:bg-white md:text-tBlue animate-fade-right animate-delay-100" >Kontak</Button>
            <Button classname="bg-none text-white focus:text-tBlue focus:bg-white md:text-tBlue animate-fade-right animate-delay-200"  onClick={onLoginClick}>Masuk</Button>
            <Button classname="bg-none text-white focus:text-tBlue focus:bg-white md:text-tBlue animate-fade-right animate-delay-300" onClick={onRegisterClick}>Daftar</Button>        
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
  const nav = useNavigate()
  const pathName = useHref(); 
  const title = pathName.includes("/akademik") ? "Akademik" : 
                pathName.includes("/informasi") ? "Informasi" :
                pathName.includes("/kemahasiswaan") ? "Kemahasiswaan" : null
  const icons = pathName.includes("/akademik") ? "https://amsys.vercel.app/images/akademik.png" : 
                pathName.includes("/informasi") ? "https://amsys.vercel.app/images/informasi.png" :
                pathName.includes("/kemahasiswaan") ? "https://amsys.vercel.app/images/kemahasiswaan.png" : null
  return(
    <>
      <nav className="w-full flex flex-row justify-between px-5 md:px-16 lg:px-20 py-7 items-center shadow-md z-50 bg-white"> 
          <div className="flex flex-row justify-between items-center gap-3 lg:gap-32">
            <Link to="/dashboard" className="w-[80px] h-[20px] lg:w-[110px] lg:h-[38px] 2xl:w-[150px] 2xl:h-[50px] bg-[url('./assets/images/logo.png')] bg-cover bg-center animate-fade-right delay-150"/>
            <div className="flex flex-row justify-center items-center gap-2 animate-fade-right animate-delay-200">
              <div className={`w-[30px] h-[30px] md:w-[50px] md:h-[50px] 2xl:w-[70px] 2xl:h-[70px]`} style={{ backgroundImage: `url(${icons})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}/>
              <span className="text-[12px] md:text-[15px] lg:text-[18px] 2xl:text-[24px] text-[#9C9191] font-semibold ">{title}</span>            
            </div>
          </div>     
          <div className="hidden md:flex flex-row gap-3 items-center text-[15px] 2xl:text-[18px] animate-fade-right animate-delay-300">
            <span className="text-[12px] lg:text-[15px] 2xl:text-[18px] text-white bg-tBlue px-4 py-2 rounded-3xl ">Federico Roberto Dos Santos</span>
            <span className="text-[#9C9191]">|</span>
            <div className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] 2xl:w-[60px] 2xl:h-[60px] bg-[url('./assets/icons/profile.png')] bg-contain bg-center"/>
          </div>

          <button onClick={handleOpen} className="md:hidden">          
            <Hamburger />        
          </button>                

      </nav>
          {
            isOpen && pathName.includes("/dashboard") ?(
              <div className="w-full p-10 bg-tBlue md:hidden">
                <div className="w-50% flex flex-col gap-3">
                  <Button>Hubungkan Akun Mahasiswa</Button>               
                </div>              
              </div>
            ) :  isOpen && (pathName.includes("/akademik") || pathName.includes("/informasi") || pathName.includes("kemahasiswaan")) ?(
              <div className="w-full p-10 bg-tBlue md:hidden">
                <div className="w-50% flex flex-col gap-3">
                  <Button onClick={() => nav("/akademik")}>Akademik</Button>               
                  <Button onClick={() => nav("/kemahasiswaan")}>Kemahasiswaan</Button>               
                  <Button onClick={() => nav("/informasi")}>Informasi</Button>               
                </div>              
              </div>
            ) : null
          }
    </>
  )
}

const NavbarLeft = () =>{
  return(
    <nav className="hidden fixed z-30 top-0 left-0 md:w-[22%] h-screen lg:flex flex-col justify-end gap-5 2xl:gap-8 bg-white shadow-lg text-[15px] px-4 py-4 2xl:p-7 font-medium">
      
      <Link to={"/dashboard"} className="group flex flex-row justify-between items-center hover:bg-[#9F9F9F17] animate-fade-right animate-delay-150">
        <div className="flex flex-row gap-3 p-1 items-center">
          <div className="w-[25px] h-[25px] 2xl:w-[35px] 2xl:h-[35px] bg-[url('./assets/icons/icon-beranda.svg')] bg-contain bg-center bg-no-repeat"/>
          <span className=" text-[14px] 2xl:text-[18px]">Beranda</span>
        </div>
        <div className="w-1 h-8 bg-white group-hover:bg-tBlue"/>
      </Link>

      <div className="flex flex-col">
        
        <Link to={"/akademik"} className="group flex flex-row justify-between items-center hover:bg-[#9F9F9F17] animate-fade-right animate-delay-150">
          <div className="flex flex-row gap-3 p-1 items-center">
            <div className="w-[25px] h-[25px] 2xl:w-[35px] 2xl:h-[35px] bg-[url('./assets/icons/icon-academic.svg')] bg-contain bg-center bg-no-repeat"/>
            <span className="text-[14px] 2xl:text-[18px]">Akademik</span>
          </div>
          <div className="w-1 h-8 bg-white group-hover:bg-tBlue"/>
        </Link>  

        <div className="mt-2 mx-auto flex flex-col justify-between gap-2 animate-fade-right animate-delay-300">
          
          <Link to={"/akademik-jadwal"} className="group w-full flex flex-row justify-between items-center gap-2 hover:bg-[#9F9F9F17]">
            <div className="flex flex-row gap-2 items-center">
              <div className="w-[25px] h-[25px] 2xl:w-[35px] 2xl:h-[35px] bg-[url('./assets/icons/icon-schedule.svg')] bg-cover bg-center bg-no-repeat"/>
              <span className=" text-[14px] 2xl:text-[18px]">Jadwal Kuliah</span>
            </div>
            <div className="w-1 h-8 bg-white group-hover:bg-tBlue"/>
          </Link>          
          <Link to={"/akademik-tugas"} className="group w-full flex flex-row justify-between items-center gap-2 hover:bg-[#9F9F9F17]">
            <div className="flex flex-row gap-2 items-center">
              <div className="w-[30px] h-[30px] 2xl:w-[35px] 2xl:h-[35px] bg-[url('./assets/icons/icon-tugas.svg')] bg-cover bg-center bg-no-repeat"/>
              <span className="text-[14px] 2xl:text-[18px]">Tugas</span>                        
            </div>
            <div className="w-1 h-8 bg-white group-hover:bg-tBlue"/>
          </Link>

          <Link to={"/akademik-khs"} className="group w-full flex flex-row justify-between items-center gap-2 hover:bg-[#9F9F9F17]">
            <div className="flex flex-row gap-2 items-center">
              <div className="w-[30px] h-[30px] 2xl:w-[35px] 2xl:h-[35px] bg-[url('./assets/icons/icon-KHS.svg')] bg-cover bg-center bg-no-repeat"/>
              <span className="text-[14px] 2xl:text-[18px]">KHS dan Evaluasi</span>            
            </div>
            <div className="w-1 h-8 bg-white group-hover:bg-tBlue"/>
          </Link>
          
         </div>      
      </div>

      <Link to={"/kemahasiswaan"} className="group flex flex-row justify-between items-center hover:bg-[#9F9F9F17] animate-fade-right animate-delay-150">
        <div className="flex flex-row gap-2 items-center">
          <div className="w-[30px] h-[30px] 2xl:w-[35px] 2xl:h-[35px] bg-[url('./assets/icons/icon-kemahasiswaan.svg')] bg-cover bg-center bg-no-repeat"/>
          <span className="text-[14px] 2xl:text-[18px]">Kemahasiswaan</span>        
        </div>
        <div className="w-1 h-8 bg-white group-hover:bg-tBlue"/>
      </Link>

      <div className="flex flex-col">
        <Link to={"/informasi"} className="group flex flex-row justify-between items-center hover:bg-[#9F9F9F17] animate-fade-right animate-delay-150">
          <div className="flex flex-row gap-2 items-center">
            <div className="w-[30px] h-[30px] 2xl:w-[35px] 2xl:h-[35px] bg-[url('./assets/icons/icon-informasi.svg')] bg-cover bg-center bg-no-repeat"/>
            <span className="text-[14px] 2xl:text-[18px]">Informasi</span>          
          </div>
          <div className="w-1 h-8 bg-white group-hover:bg-tBlue"/>
        </Link>

        <div className="flex flex-col justify-between gap-2 px-8 py-5 animate-fade-right animate-delay-300">
          <Link to={'/informasi-terkini'} className="group flex flex-row justify-between items-center hover:bg-[#9F9F9F17] animate-fade-right animate-delay-150">
            <div className="flex flex-row gap-2 items-center">
              <div className="w-[30px] h-[30px] 2xl:w-[35px] 2xl:h-[35px] bg-[url('./assets/icons/icon-terkini.svg')] bg-cover bg-center bg-no-repeat"/>
              <span className="text-[14px] 2xl:text-[18px]">Tekini</span>            
            </div>
            <div className="w-1 h-8 bg-white group-hover:bg-tBlue"/>
          </Link>

          <Link to={"/informasi-biaya"} className="group flex flex-row justify-between items-center hover:bg-[#9F9F9F17] animate-fade-right animate-delay-150">
            <div className="flex flex-row gap-2 items-center">
              <div className="w-[30px] h-[30px] 2xl:w-[40px] text-[15px] 2xl:h-[40px] bg-[url('./assets/icons/icon-biaya.svg')] bg-cover bg-center bg-no-repeat"/>            
              <span className="text-[14px] 2xl:text-[18px]">Biaya Kuliah</span>
            </div>
            <div className="w-1 h-8 bg-white group-hover:bg-tBlue"/>
          </Link>

          <Link to={"/informasi-akademik"} className="group flex flex-row justify-between items-center hover:bg-[#9F9F9F17] animate-fade-right animate-delay-150">
            <div className="flex flex-row gap-2 items-center">
              <div className="w-[30px] h-[30px] 2xl:w-[40px] text-[15px] 2xl:h-[40px] bg-[url('./assets/icons/icon-informasiAkademik.svg')] bg-cover bg-center bg-no-repeat"/>
              <span className="text-[14px] 2xl:text-[18px]">Akademik</span>                
            </div>
            <div className="w-1 h-8 bg-white group-hover:bg-tBlue"/>
          </Link> 

          <Link to={"/informasi-kalender"} className="group flex flex-row justify-between items-center hover:bg-[#9F9F9F17] animate-fade-right animate-delay-150">
            <div className="flex flex-row gap-2 items-center">
              <div className="w-[30px] h-[30px] 2xl:w-[40px] text-[15px] 2xl:h-[40px] bg-[url('./assets/icons/icon-kalenderAkademik.svg')] bg-cover bg-center bg-no-repeat"/>
              <span className="text-[14px] 2xl:text-[18px]">Kalender Akademik</span>                
            </div>
            <div className="w-1 h-8 bg-white group-hover:bg-tBlue"/>
          </Link>          
          
         </div>      
      </div>
    </nav>
  )
}  

export default Navbar
export {NavbarLeft}



