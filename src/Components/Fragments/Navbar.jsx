import { Link } from "react-router-dom"
import Button from "../Elements/Button/Button"
import Hamburger from "../Elements/Button/Hamburger"
import { useState } from "react"


const Navbar = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = () =>{
    setOpen(!open)
  }
  console.log(open)
  return (
    <header className="top-0 left-0 w-full fixed">    
      <nav className="w-full flex flex-row justify-between p-5 lg:p-10 items-center ">      
          <Link to="/" className="w-[100px] h-[30px] lg:w-[150px] lg:h-[40px] bg-[url('/Images/logo.png')] bg-cover"/>
          <div className="hidden md:flex flex-row gap-5 text-[15px]">
            <Button classname="bg-none text-white ">Kontak</Button>
            <Button classname="text-tBlue bg-white">Masuk</Button>
            <Button classname="bg-none text-white">Daftar</Button>        
          </div>

          <button onClick={handleOpen} className="md:hidden">          
            <Hamburger />        
          </button>                

      </nav>
          {
            open &&
            <div className="w-full p-10 bg-tBlue md:hidden">
              <div className="w-50% flex flex-col gap-3">
                <Button>Kontak</Button>
                <Button>Masuk</Button>
                <Button>Daftar</Button>
              </div>
              
            </div>
          }
    </header>
  )
}

export default Navbar