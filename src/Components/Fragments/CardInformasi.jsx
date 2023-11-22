


const CardInformasi = ({type,status,date,title,detail,detail1, detail2, category, images,views, information}) => {
  return (
    <>
    {
      type === "mini-card" ? <CardMiniInformasi status={status} date={date} title={title} detail={detail}/> : 
      type === "detail-card" ? <CardDetailInformasi category={category} title={title} date={date} detail1={detail1} detail2={detail2} images={images} views={views} information={information}/> : 
      type === "biaya-card" ? <CardInformasiBiaya/> : 
      type === "kalender-card" ? <CardInformasiKalender/> : null
    }
    </>    
  )
}

const CardDetailInformasi=({information,category, title, date, detail1,detail2,images,views})=>{
  return(
    <div className="w-full lg:max-w-lg lg:h-[80vh] flex flex-col p-5 shadown-md lg:overflow-y-scroll">
      <h1 className="text-3xl font-semibold text-tBlue">{information}</h1>
      <div>
        <span className="text-[#D5D5D5] text-[12px]">{category}</span>
        <h1 className="text-[24px] font-semibold">{title}</h1>
        <div className="flex flex-col items-end gap-1 mb-2 ">
          <div className="flex flex-row gap-1">
              <div className="w-[20px] h-[20px] bg-[url('/public/icons/icon-schedule-abu.svg')] bg-center bg-contain"/>
              <span className="text-[14px] text-[#D5D5D5] ">{date}</span>
          </div>
          <div className="w-[33%] h-[1px] bg-[#D5D5D5] "/>
          <div className="flex flex-row gap-1">
              <div className="w-[20px] h-[20px] bg-[url('/public/icons/icon-view.svg')] bg-center bg-contain"/>
              <span className="text-[14px] text-[#D5D5D5] ">{views} orang melihat</span>
          </div>
        </div>
        <p className="text-justify text-[14px]">{detail1}</p>
        <div className="flex flex-row gap-2 my-3 justify-center">
          <img src={images} alt="gambar"  />          
        </div>
        <p className="text-justify text-[14px]">{detail2}</p>
      </div>
    </div>
  )
}

const CardMiniInformasi = ({status, date,title,detail}) =>{
  return(
    <div className="w-full lg:max-w-xl flex flex-col px-5 py-4 gap-2 rounded-md shadow-md">
      <div className="flex flex-row justify-between">
        <span className={`${status ==='terbaru' ? 'bg-tBlue text-white' : 'bg-[#EBEBEB] text-[#B6B6B6]'} px-3 rounded-xl text-[12px] italic font-normal`}>{status}</span>
        <span className="text-[12px] text-tBlue italic">{date}</span>
      </div>
      <h1 className="font-semibold text-[15px]">{title}</h1>
      <p className="text-[12px] text-[#AAA8A8]">{detail}</p>
      <div className="flex flex-row justify-end">
        <button className="bg-tBlue text-[12px] text-white font-normal px-3 py-1 rounded-md">Baca Selengkapnya{"  >>"}</button>
      </div>
    </div>
  )
}

const CardInformasiBiaya = () =>{
  return(
    <div className="w-full lg:max-w-2xl flex flex-col px-5 py-4 gap-2 rounded-md shadow-md">
      <div className="flex flex-row justify-between items-center">
        <span className={`${status ==='terbaru' ? 'bg-tBlue text-white' : 'bg-[#EBEBEB] text-[#B6B6B6]'} px-3 rounded-xl text-[14px] italic font-normal`}>terbaru</span>
        <div className="flex flex-col justify-center items-center">
          <span className="text-[14px] text-[#B6B6B6] italic">Terakhir pembayaran</span>
          <span className="text-[14px] text-[#FF0000] italic rounded-2xl border-[1px] px-3 border-[#FF0000]">10 desember 2022</span>
        </div>
      </div>
      <h1 className="font-semibold text-[16px]">UKT Semester Ganjil 2023</h1>
        <div className="flex flex-col">
          <span className="text-[14px] text-[#AAA8A8]">Rp. 8.500.000</span>
          <p className="text-[14px] text-[#AAA8A8]"> Mohon segera melakukan pembayaran!</p>
        </div>
      <span className="text-[14px] text-tBlue">20 Juli 2023</span>
    </div>
  )
}

const CardInformasiKalender = () =>{
  return(
    <div className="w-full lg:max-w-2xl flex flex-col px-5 py-4 gap-2 rounded-md shadow-md">
      <div className="flex flex-row gap-3">
        <div className="w-full max-w-[120px] flex flex-col justify-center items-center bg-tBlue px-4 rounded-xl text-white text-[12px] ">
          <span>Ganjil</span>
          <span>2023/2024</span>
        </div>
        <h1 className="font-semibold text-[15px]">Registrasi Administrasi bagi mahasiswa lama (pembayaran UKT/SPP)</h1>
      </div>

      <div className="flex flex-row gap-3">
        <div className="w-full max-w-[120px] flex flex-col justify-center items-center bg-[#2984E42E] rounded-xl text-tBlue text-[12px] ">
          <span>31 Juli 2023</span>
          <span>11 Agustus 2023</span>
        </div>
        <p className="text-[12px]">Bagi mahasiswa lama dapat registrasi administrasi (pembayaran) UKT/SPP menggunakan no virtual account masing-masing.</p>
      </div>
    </div>
  )
}

export default CardInformasi