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
      <div className=" mt-[29%] md:mt-[14%] lg:mt-[7%] 2xl:mt-[7%] flex flex-col-reverse lg:flex-row py-5 gap-5">
        <NavbarLeft/>        
        <div className="w-full lg:ml-[22%] flex flex-col gap-2 2xl:gap-5 p-4 lg:p-0">
          <CardAkademik title={'Informasi Terkini'} icons={'icon-terkini.svg'} images={'akademik-image.png'} navigate={'/informasi-terkini'}/> 
          <CardAkademik title={'Informasi Biaya Kuliah'} icons={'icon-biaya.svg'} images={'IPS-image.png'} navigate={'/informasi-biaya'}/> 
          <CardAkademik title={'Informasi Akademik'} icons={'icon-informasiAkademik.svg'} images={'tugas-image.png'} navigate={'/informasi-akademik'}/> 
          <CardAkademik title={'Informasi Kalender Akademik'} icons={'icon-kalenderAkademik.svg'} images={'khs-image.png'} navigate={'/informasi-kalender'}/> 
        </div>
        <div className="hidden md:flex w-full animate-fade-left">
            <CardInformasi type={"detail-card"}
            information={'Informasi Terkini'}
            category={'Pelayanan Minat dan Bakat'}
            title={'Paduan Suara FLOICE UB, Raih Gold Medal di Busan '}
            date={'18 November 2023'}
            views={768}
            detail1={'Paduan Suara FLOICE, dari FTP Universitas Brawijaya menyabet tiga gelar juara di ajang “Busan Choral Festival & Competition 2023” yang diselenggarakan di Busan, Korea Selatan (17-21/10/2023). Dalam perlombaan BCFC, tim UB meraih juara 2nd prize Pop and Acapella Category; Gold diploma Pop and Acappella Category; dan Gold diploma Ethnic Category.'}
            detail2={'Saat dikonfirmasi Humas UB, Dr. Setiawan Noerdajasakti, SH.,MH selaku Wakil Rektor bidang Kemahasiswaan, Kewirausahaan dan Alumni UB mengatakan bangga atas prestasi gemilang yang dicapai FLOICE di Busan. “Saya sangat mengapresiasi dan bangga atas prestasi yang telah diraih oleh tim FLOICE di Busan. Prestasi ini tentu mengharumkan nama UB di mata internasional. Terima kasih atas kerja keras tim yang tak kenal lelah,” katanya. Sementara itu ketua rombongan FLOICE, Floice Jiyan Nafis Dewantara menyampaikan rasa senang dan bangganya atas prestasi timnya. “Proses yang sangat panjang dan berbulan-bulan, akhirnya dapat membuahkan hasil sesuai harapan. Terima kasih banyak atas segala bantuannya sehingga kami dapat mencapai prestasi ini,” katanya Floice'}
            images={"https://amsys.vercel.app/images/informasi-terkini2.png"}            
            />

          </div>
        
      </div>      
      
    </div>
  )
}

export default InformasiPage  