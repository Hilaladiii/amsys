import CardAbsensi from "../Components/Fragments/CardAbsensi"
import CardAkademik from "../Components/Fragments/CardAkademik"
import Navbar, { NavbarLeft } from "../Components/Fragments/Navbar"
import Graph from "../Components/Fragments/Graph";
import CardInformasi from "../Components/Fragments/CardInformasi";

const InformasiPage = () => {
  const data = [
    { x: 1, y: 3.47 },
    { x: 2, y: 3.53 },
    { x: 3, y: 3.67 },
    { x: 4, y: 3.72 },
    { x: 5, y: 3.81 },
  ];
  const xLabel = 'Semester';
  const yLabel = 'IPS';
  return (
    <div className="flex flex-col">
      <Navbar types={'akademik-navbar'}/>        
      <div className=" mt-[26%] md:mt-[14%] lg:mt-[7%] 2xl:mt-[7%] flex flex-col lg:flex-row py-5 gap-5">
        <NavbarLeft/>        
        <div className="w-full lg:ml-[22%] flex flex-col gap-2 2xl:gap-5 p-4 lg:p-0">
          <CardAkademik title={'Informasi Terkini'} icons={'icon-terkini.svg'} images={'akademik-image.png'} navigate={'/informasi-terkini'}/> 
          <CardAkademik title={'Inforamasi Biaya Kuliah'} icons={'icon-biaya.svg'} images={'IPS-image.png'} navigate={'/informasi-biaya'}/> 
          <CardAkademik title={'Informasi Akademik'} icons={'icon-informasiAkademik.svg'} images={'tugas-image.png'} navigate={'/informasi-akademik'}/> 
          <CardAkademik title={'Informasi Kalender Akademik'} icons={'icon-kalenderAkademik.svg'} images={'khs-image.png'} navigate={'/informasi-kalender'}/> 
        </div>
        
        
      </div>      
      
    </div>
  )
}

export default InformasiPage  