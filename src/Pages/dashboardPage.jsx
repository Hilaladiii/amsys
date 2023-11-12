import Navbar from "../Components/Fragments/Navbar"
import CardMain from "../Components/Fragments/CardMain"


const DashboardPage = () => {  
  const pathName = window.location.pathname
  return (
    <div className={`w-full h-screen bg-[url('./assets/images/BackgroundDashboard.svg')] bg-no-repeat bg-cover`}>      
      <Navbar />  
      <div className="w-full flex flex-col mx-auto mt-[40%] md:mt-[9%] justify-center items-center">
        <h1 className="text-[15px] md:text-[38px] 2xl:text-[42px] font-bold text-tBlue animate-fade animate-delay-200">Academic Monitoring System</h1>
        <p className="w-[60%] md:w-[40%] text-[12px] md:text-[15px] 2xl:text-[18px] font-medium animate-fade animate-delay-300">Dapatkan akses real-time untuk memantau nilai, kehadiran dan tugas anak Anda secara terperinci.</p>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between items-center px-36 mt-20 animate-fade-right">
        <CardMain title={'Kemahasiswaan'} icons="images/kemahasiswaan.png" content={["Hubungi Dosen Pembimbing Akademik","Kartu Hasil Studi dan Evaluasi"]}/>
        <CardMain title={'Akademik'} icons="images/akademik.png" content={["Statistik IPK","Jadwal Kuliah","KHS Evaluasi","Kehadiran"]}/>
        <CardMain title={'Informasi'} icons="images/informasi.png" content={["Akademik","Kalender Akademik","Biaya","Terkini"]}/>
      </div>
      <div className="mt-5"></div>
    </div>
  )
}

export default DashboardPage