import Button from "../Elements/Button/Button"
import InputForm from "../Elements/Input"
const CardRegister = () => {
  return (
    <div className="w-[320px] md:w-[480px] md:h-[520px] 2xl:w-[570px] bg-white rounded-3xl p-10 flex flex-col shadow-2xl mx-auto md:mx-2 mt-5 md:mt-16">
      <div className="flex flex-col mx-auto gap-2 justify-center items-center">
        <h1 className="font-bold text-xl lg:text-2xl">Selamat Datang</h1>
        <p className="text-[#A0A0A0] text-[12px]">Silahkan masukkan data dengan benar</p>
      </div>
      <div className="flex flex-col mt-5">
        <InputForm
          name="fullname"
          label= "Nama lengkap"
          type = "text"
          placeholder = "Masukkan nama lengkap"
        />
         <InputForm
          name="username"
          label= "Nama pengguna"
          type = "text"
          placeholder = "Masukkan nama pengguna"
        />
         <InputForm
          name="number"
          label= "No Whatsapp"
          type = "number"
          placeholder = "Masukkan no whatsapp"
        />
        <InputForm
          name="kata-sandi"
          label= "Kata Sandi"
          type = "password"
          placeholder = "Masukkan kata sandi"
        />
        <Button classname='font-normal bg-tBlue text-white text-[12px] lg:text-[15px] mt-2'>Daftar</Button>        
      </div>
      

    </div>
  )
}

export default CardRegister