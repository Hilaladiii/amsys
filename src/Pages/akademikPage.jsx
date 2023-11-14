import CardAbsensi from "../Components/Fragments/CardAbsensi"
import CardAkademik from "../Components/Fragments/CardAkademik"
import CartesianChart from "../Components/Fragments/Charts";
import Navbar, { NavbarLeft } from "../Components/Fragments/Navbar"

const AkademikPage = () => {
  const data = [
    { x: 1, y: 10 },
    { x: 2, y: 20 },
    { x: 3, y: 30 },
    { x: 4, y: 25 },
    { x: 5, y: 15 },
  ];
  const xLabel = 'X Axis';
  const yLabel = 'Y Axis';
  return (
    <div className="w-full flex flex-col">
      <Navbar types={'akademik-navbar'}/>        
      <div className="w-[100vw] h-[50vh] mt-[6%] flex flex-row py-5 gap-4">
        <NavbarLeft/>
        <div className="flex flex-col gap-2">
          <CardAkademik/> 
          <CardAkademik/> 
          <CardAkademik/> 
          <CardAkademik/> 
        </div>
        <div className="flex flex-col">
         <CardAbsensi/>
         <div className="w-[450px] p-10 rounded-md shadow-md ">
          <CartesianChart data={data} xLabel={xLabel} yLabel={yLabel} />;
         </div>
        </div>
        
      </div>      
      
    </div>
  )
}

export default AkademikPage