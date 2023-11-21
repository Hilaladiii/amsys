import React from 'react'
import Navbar, { NavbarLeft } from '../Components/Fragments/Navbar'
import Button from '../Components/Elements/Button/Button'
import CardInformasi from '../Components/Fragments/CardInformasi'
import CardMahasiswa from '../Components/Fragments/CardMahasiswa'

const InformasiBiayaPage = () => {
  return (
    <div className="flex flex-col">
    <Navbar types={"akademik-navbar"}/>
    <div className="flex flex-row gap-4 mt-[7%]">
      <NavbarLeft/>
      <div className="w-[120vw] flex flex-col-reverse lg:flex-row justify-between gap-3 mt-20 lg:mt-3 ">
        <div className="w-full lg:h-[80vh] flex flex-col gap-2  p-2">
          <div className="w-full flex flex-row gap-2 px-4 md:px-0 "> 
              <input type="text" placeholder="ketikkan sesuatu" className="w-full text-[12px] shadow-md rounded-md p-2" />
              <button className="bg-tBlue text-[12px] text-white rounded-md px-3 py-2">Cari</button>
          </div>
          <div className='w-full flex justify-between gap-1'>
            <button className="w-full font-semibold text-[#9C9191] px-3 py-2 focus:bg-[#2984E414] focus:text-tBlue focus:border-tBlue border-b-[2px]">Tanggungan</button>
            <button  className="w-full font-semibold text-[#9C9191] px-3 py-2 focus:bg-[#2984E414] focus:text-tBlue focus:border-tBlue border-b-[2px]">Lunas</button>
          </div>
          <div className='w-full'>
            <CardInformasi type={"biaya-card"}/>
          </div>
        </div>
        
        <div className='w-[60%]'>
          <CardMahasiswa/>

          <div className="w-full flex flex-col justify-center items-center gap-5 rounded-lg shadow-md p-7">
            <h1 className="text-[20px] text-tBlue font-semibold">Panduan Cara Pembayaran</h1>
            <img src="/public/images/tutorial-pembayaran.png" alt="gambar tutorial pembayaran" />
            <p className='text-[12px] text-center'>Klik unduh untuk panduan dalam melakukan pembayaran!</p>
            <button className="w-full max-w-[15em] rounded-lg p-2 bg-tBlue text-white font-semibold text-[14px]">Unduh</button>
          </div>
        </div>  
        
      </div>
    </div>
  </div>
  )
}

export default InformasiBiayaPage