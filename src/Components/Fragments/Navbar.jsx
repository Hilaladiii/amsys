import { Link } from "react-router-dom"
import Button from "../Elements/Button/Button"

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between p-10 items-center">
      <Link to="/" className="w-[200px] h-[71px] bg-[url('/Images/logo.png')] bg-cover" />
      <div className="flex flex-row gap-5 text-[20px]">
        <Button classname="bg-none text-white">Kontak</Button>
        <Button classname="text-tBlue bg-white">Masuk</Button>
        <Button classname="bg-none text-white">Daftar</Button>
      </div>

    </nav>
  )
}

export default Navbar