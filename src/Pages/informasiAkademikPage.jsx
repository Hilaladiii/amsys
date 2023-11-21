import CardInformasi from "../Components/Fragments/CardInformasi"
import Navbar, { NavbarLeft } from "../Components/Fragments/Navbar"


const InformasiAkademikPage = () => {
  return (
    <div className="w-full flex flex-col">
      <Navbar types={"akademik-navbar"}/>
      <div className="flex flex-row  gap-4 mt-[7%]">
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
              title={'Pengumuman Pengambilan Jas Almamater Bagi Mahasiswa Angkatan Tahun 2023 Jenjang D3, D4, dan S1'}
              detail={'Direktur Direktorat Aset dengan ini mengumumkan pendistribusian jas almamater bagi Mahasiswa . . .'}
              />            
            <CardInformasi type={"mini-card"}
              status={'sudah dibuka'} 
              date={'18 November 2023'}
              title={'Kelas yang Diwajibkan Mengikuti Kuliah Tamu'}
              detail={'Paduan Suara FLOICE, dari FTP Universitas Brawijaya menyabet tiga gelar juara di ajang “Busan Choral Festival & Competition 2023” yang diselenggarakan . . .'}
            />            
            <CardInformasi type={"mini-card"}
              status={'sudah dibuka'} 
              date={'14 November 2023'}
              title={'Pelaksanaan perkuliahan selama penyelenggaraan GEMASTIK 2023'}
              detail={'Universitas Brawijaya (UB) Malang menemukan potensi limbah cangkang tiram yang digunakan sebagai bahan baterai kendaraan listrik. . .='}
            />            
          </div>
          
            <CardInformasi type={"detail-card"}
            information={'Informasi Akademik'}
            category={'Pelayanan Kesejahteraan Mahasiswa'}
            title={'Pengumuman Pengambilan Jas Almamater Bagi Mahasiswa Angkatan Tahun 2023 Jenjang D3, D4, dan S1'}
            date={'20 November 2023'}
            views={768}
            detail1={'Direktur Direktorat Aset dengan ini mengumumkan pendistribusian jas almamater bagi Mahasiswa Universitas Brawijaya angkatan tahun 2023 jenjang D3, D4 dan S1 akan dilaksanakan pada :'}
            images={"https://amsys.vercel.app/images/informasi-akademik.png"}
            />

          

          
        </div>
      </div>
    </div>
  )
}

export default InformasiAkademikPage