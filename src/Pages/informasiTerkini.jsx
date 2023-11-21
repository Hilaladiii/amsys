import CardInformasi from "../Components/Fragments/CardInformasi"
import Navbar, { NavbarLeft } from "../Components/Fragments/Navbar"


const InformasiTerkini = () => {
  return (
    <div className="flex flex-col">
      <Navbar types={"akademik-navbar"}/>
      <div className="flex flex-row gap-4 mt-[7%]">
        <NavbarLeft/>
        <div className="w-[120vw] flex flex-col-reverse lg:flex-row justify-between gap-3 mt-20 lg:mt-3 ">
          
          <div className=" lg:h-[80vh] flex flex-col gap-2 lg:overflow-y-scroll p-2">
            <div className="w-full flex flex-row gap-2 px-4 md:px-0 "> 
              <input type="text" placeholder="ketikkan sesuatu" className="w-full text-[12px] shadow-md rounded-md p-2" />
              <button className="bg-tBlue text-[12px] text-white rounded-md px-3 py-2">Cari</button>
            </div>
            <CardInformasi type={"mini-card"} 
              status={'terbaru'} 
              date={'20 November 2023'}
              title={'Pelaksanaan Wisuda Periode V dan VI TA. 2023/2024'}
              detail={'Sehubungan dengan pelaksanaan Wisuda Universitas Brawijaya, kami informasikan jadwal dan tata cara Wisuda Universitas Brawijaya Tahun Akademik . . .'}
              />            
            <CardInformasi type={"mini-card"}
              status={'sudah dibuka'} 
              date={'18 November 2023'}
              title={'Limbah Cangkang Tiram Bahan Alternatif Baterai'}
              detail={'Universitas Brawijaya (UB) Malang menemukan potensi limbah cangkang tiram yang digunakan sebagai bahan baterai kendaraan listrik. . .'}
            />            
            <CardInformasi type={"mini-card"}
              status={'sudah dibuka'} 
              date={'14 November 2023'}
              title={'Paduan Suara FLOICE UB, Raih Gold Medal di Busan'}
              detail={'Paduan Suara FLOICE, dari FTP Universitas Brawijaya menyabet tiga gelar juara di ajang “Busan Choral Festival & Competition 2023” yang diselenggarakan . . .'}
            />            
          </div>
          <div>
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
    </div>
  )
}

export default InformasiTerkini