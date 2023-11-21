


const CardInformasi = ({type,status,date,}) => {
  return (
    <>
    {
      type === "mini-card" ? <CardMiniInformasi/> : <CardDetailInformasi/>
    }
    </>    
  )
}

const CardDetailInformasi=()=>{
  return(
    <div className="w-full lg:max-w-lg lg:h-[80vh] flex flex-col p-5 shadown-md lg:overflow-y-scroll">
      <h1 className="text-3xl font-semibold text-tBlue">Informasi Terkini</h1>
      <div>
        <span className="text-[#D5D5D5] text-[12px]">Pelayanan Minat dan Bakat</span>
        <h1 className="text-[24px] font-semibold">Paduan Suara FLOICE UB, Raih Gold Medal di Busan</h1>
        <div className="flex flex-col items-end gap-1 mb-2 ">
          <div className="flex flex-row gap-1">
              <div className="w-[20px] h-[20px] bg-[url('/public/icons/icon-schedule-abu.svg')] bg-center bg-contain"/>
              <span className="text-[14px] text-[#D5D5D5] ">18 November 2023</span>
          </div>
          <div className="w-[33%] h-[1px] bg-[#D5D5D5] "/>
          <div className="flex flex-row gap-1">
              <div className="w-[20px] h-[20px] bg-[url('/public/icons/icon-view.svg')] bg-center bg-contain"/>
              <span className="text-[14px] text-[#D5D5D5] ">768 orang melihat</span>
          </div>
        </div>
        <p className="text-justify text-[14px]">Paduan Suara FLOICE, dari FTP Universitas Brawijaya menyabet tiga gelar juara di ajang “Busan Choral Festival & Competition 2023” yang diselenggarakan di Busan, Korea Selatan (17-21/10/2023). Dalam perlombaan BCFC, tim UB meraih juara 2nd prize Pop and Acapella Category; Gold diploma Pop and Acappella Category; dan Gold diploma Ethnic Category.</p>
        <div className="flex flex-row gap-2 my-3">
          <img src="https://amsys.vercel.app/images/gambar-informasi-terkini.png" alt="gambar" className="w-[200px] h-[200px]"  />
          <img src="https://amsys.vercel.app/images/informasi-terkini2.png" alt="gambar" className="w-[200px] h-[200px]" />
        </div>
        <p className="text-justify text-[14px]">Saat dikonfirmasi Humas UB, Dr. Setiawan Noerdajasakti, SH.,MH selaku Wakil Rektor bidang Kemahasiswaan, Kewirausahaan dan Alumni UB mengatakan bangga atas prestasi gemilang yang dicapai FLOICE di Busan. “Saya sangat mengapresiasi dan bangga atas prestasi yang telah diraih oleh tim FLOICE di Busan. Prestasi ini tentu mengharumkan nama UB di mata internasional. Terima kasih atas kerja keras tim yang tak kenal lelah,” katanya. Sementara itu ketua rombongan FLOICE, Floice Jiyan Nafis Dewantara menyampaikan rasa senang dan bangganya atas prestasi timnya. “Proses yang sangat panjang dan berbulan-bulan, akhirnya dapat membuahkan hasil sesuai harapan. Terima kasih banyak atas segala bantuannya sehingga kami dapat mencapai prestasi ini,” katanya Floice</p>
      </div>
    </div>
  )
}

const CardMiniInformasi = () =>{
  return(
    <div className="w-full lg:max-w-xl flex flex-col px-5 py-4 gap-2 rounded-md shadow-md">
      <div className="flex flex-row justify-between">
        <span className="bg-tBlue px-3 rounded-xl text-white text-[12px] italic font-normal">Terbaru</span>
        <span className="text-[12px] text-tBlue italic">20 November 2023</span>
      </div>
      <h1 className="font-semibold text-[15px]">Pelaksanaan Wisuda Periode V dan VI TA.2023/2024</h1>
      <p className="text-[12px] text-[#AAA8A8]">Sehubungan dengan pelaksanaan Wisuda Universitas Brawijaya, kami informasikan jadwal dan tata cara Wisuda Universitas Brawijaya Tahun Akademik . . .</p>
      <div className="flex flex-row justify-end">
        <button className="bg-tBlue text-[12px] text-white font-normal px-3 py-1 rounded-md">Baca Selengkapnya{">>"}</button>
      </div>
    </div>
  )
}

export default CardInformasi