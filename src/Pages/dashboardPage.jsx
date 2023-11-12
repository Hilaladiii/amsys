import Navbar from "../Components/Fragments/Navbar"
import CardMain from "../Components/Fragments/CardMain"


const DashboardPage = () => {  
  const pathName = window.location.pathname
  return (
    <div className={`w-full h-screen bg-[url('./assets/images/BackgroundDashboard.svg')] bg-no-repeat bg-cover flex flex-col`}>      
      <Navbar />  
      <div className="w-full flex flex-col mx-auto mt-[9%] justify-center items-center">
        <h1 className="text-[15px] md:text-[38px] 2xl:text-[42px] font-bold text-tBlue animate-fade animate-delay-200">Academic Monitoring System</h1>
        <p className="w-[40%] text-[12px] md:text-[15px] 2xl:text-[18px] font-medium animate-fade animate-delay-300">Dapatkan akses real-time untuk memantau nilai, kehadiran dan tugas anak Anda secara terperinci.</p>
      </div>
      <div className="w-full flex flex-row px-36 mt-20 animate-fade-right">
        <CardMain title={'Kemahasiswaan'} content={["Hubungi Dosen Pembimbing Akademik","Kartu Hasil Studi dan Evaluasi"]} image="./assets/images/kemahasiswaan.png"/>
        <CardMain title={'Akademik'} content={["Statistik IPK","Jadwal Kuliah","KHS Evaluasi","Kehadiran"]} image="./assets/images/akademik.png"/>
        <CardMain title={'Informasi'} content={["Akademik","Kalender Akademik","Biaya","Terkini"]}  image="./assets/images/informasi.png"/>
      </div>
    </div>
  )
}

export default DashboardPage