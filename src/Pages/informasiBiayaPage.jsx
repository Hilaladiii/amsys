import React, { useState } from 'react'
import Navbar, { NavbarLeft } from '../Components/Fragments/Navbar'
import Button from '../Components/Elements/Button/Button'
import CardInformasi from '../Components/Fragments/CardInformasi'
import CardMahasiswa from '../Components/Fragments/CardMahasiswa'

const InformasiBiayaPage = () => {
  const [selectedStatus, setSelectedStatus] = useState("terbaru");

  return (
    <div className="flex flex-col">
    <Navbar types={"akademik-navbar"}/>
    <div className="w-full flex flex-row gap-4 mt-[7%]">
      <NavbarLeft/>
      <div className="w-full lg:ml-[22%] flex flex-col-reverse lg:flex-row justify-between gap-3 mt-20 lg:mt-3 p-3 ">
        <div className="w-full lg:max-w-xl 2xl:min-w-[700px] flex flex-col gap-4 p-2 animate-fade-down">
            <div className="w-full flex flex-row gap-2 px-4 md:px-0 "> 
              <input type="text" placeholder="ketikkan sesuatu" className="w-full text-[12px] lg:text-[15px] 2xl:text-[18px] shadow-md rounded-md p-3" />
              <button className="bg-tBlue text-[12px] lg:text-[15px] 2xl:text-[18px] text-white rounded-md px-3 py-2">Cari</button>
            </div>
          <div className='w-full lg:max-w-xl 2xl:min-w-[700px] flex justify-between gap-1 '>
            <button className="w-full font-semibold text-[#9C9191] px-3 py-2 focus:bg-[#2984E414] focus:text-tBlue focus:border-tBlue border-b-[2px]" onClick={() => setSelectedStatus("terbaru")}>Tanggungan</button>
            <button  className="w-full font-semibold text-[#9C9191] px-3 py-2 focus:bg-[#2984E414] focus:text-tBlue focus:border-tBlue border-b-[2px]" onClick={() => setSelectedStatus("lunas")}>Lunas</button>
          </div>
          {selectedStatus === "terbaru" && (
          <div className='w-full'>
            <CardInformasi type={"biaya-card"} status={"terbaru"} date={"20 November 2023"} biaya={"7.500.000"} semester={"Ganjil 2023"} />
          </div>
          )}
          {selectedStatus === "lunas" && (
            <div className='w-full'>
              <CardInformasi type={"biaya-card"} status={"lunas"} date={"20 November 2023"} biaya={"7.500.000"} semester={"Ganjil 2023"} />
              <CardInformasi type={"biaya-card"} status={"lunas"} date={"20 November 2023"} biaya={"7.500.000"} semester={"Ganjil 2023"} />
            </div>
          )}
        </div>
        
        <div className='flex flex-col justify-center items-center p-4 animate-fade-left'>
          <CardMahasiswa/>

          <div className="w-full max-w-lg flex flex-col justify-center items-center gap-5 rounded-lg shadow-md p-7">
            <h1 className="text-[20px] 2xl:text-[24px] text-tBlue font-semibold">Panduan Cara Pembayaran</h1>
            <img src="https://amsys.vercel.app/images/tutorial-pembayaran.png" alt="gambar tutorial pembayaran" />
            <p className='text-[12px] 2xl:text-[16px] text-center'>Klik unduh untuk panduan dalam melakukan pembayaran!</p>
            <button className="w-full max-w-[15em] rounded-lg p-2 bg-tBlue text-white font-semibold text-[14px] 2xl:text-[16px]">Unduh</button>
          </div>
        </div>  
        
      </div>
    </div>
  </div>
  )
}

export default InformasiBiayaPage