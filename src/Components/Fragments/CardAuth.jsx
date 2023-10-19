import { Link } from "react-router-dom"
import Button from "../Elements/Button/Button"
import { InputForm } from "../Elements/Input"

const CardAuth = () => {
  return (
    <div className="w-[554px] h-[517px] bg-white rounded-3xl p-10 flex flex-col">
      <div className="flex flex-col mx-auto gap-2 justify-center items-center">
        <h1 className="font-bold text-3xl">Selamat Datang</h1>
        <p className="text-[#A0A0A0]">Silahkan masukkan data dengan benar</p>
      </div>
      <div className="flex flex-col mt-10">
        <InputForm
          name="username"
          label= "Nama Pengguna"
          type = "text"
          placeholder = "Masukkan nama pengguna"
        />
        <InputForm
          name="kata-sandi"
          label= "Kata Sandi"
          type = "password"
          placeholder = "Masukkan kata sandi"
        />
        <Button classname='font-normal bg-tBlue text-white text-[20px] mt-5'>Masuk</Button>
        <p className="mx-auto mt-5 text-[#A0A0A0]">Sudah memiliki akun? <Link className="text-tBlue">Masuk</Link></p>
      </div>
      

    </div>
  )
}

export default CardAuth