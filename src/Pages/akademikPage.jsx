import CardAbsensi from "../Components/Fragments/CardAbsensi"
import CardAkademik from "../Components/Fragments/CardAkademik"
import CartesianChart from "../Components/Fragments/Charts";
import Navbar, { NavbarLeft } from "../Components/Fragments/Navbar"

const AkademikPage = () => {
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
    <div className="w-full flex flex-col">
      <Navbar types={'akademik-navbar'}/>        
      <div className="w-[100vw] h-[50vh] mt-[6%] flex flex-row py-5 gap-4">
        <NavbarLeft/>
        <div className="flex flex-col gap-2">
          <CardAkademik title={'Jadwal Kuliah'} icons={'icon-schedule.svg'} images={'akademik-image.png'}/> 
          <CardAkademik title={'IP Semester'} icons={'icon-IP.svg'} images={'IPS-image.png'}/> 
          <CardAkademik title={'Tugas'} icons={'icon-tugas.svg'} images={'tugas-image.png'}/> 
          <CardAkademik title={'Kartu Hasil Studi dan Evaluasi'} icons={'icon-KHS.svg'} images={'khs-image.png'}/> 
        </div>
        <div className="flex flex-col">
         <CardAbsensi/>
         <div className="w-[450px] flex flex-col p-9 rounded-lg shadow-lg ">
          <h1 className="mx-auto font-semibold text-tBlue">Statistik IP Semester</h1>
          <CartesianChart data={data} xLabel={xLabel} yLabel={yLabel} />
         </div>
        </div>
        
      </div>      
      
    </div>
  )
}

export default AkademikPage