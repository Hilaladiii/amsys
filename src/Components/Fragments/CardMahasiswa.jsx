
const CardMahasiswa = () => {
  return (
    <div className="w-full md:max-w-lg flex flex-col justify-center items-center gap-5 rounded-lg shadow-md p-7">
      <h1 className="text-[20px] 2xl:text-[24px] text-tBlue font-semibold">Data Mahasiswa</h1>
      <div className="flex flex-row justify-center  gap-5">

        <div className="w-[60px] h-[50px] md:w-[70px] md:h-[70px] rounded-full bg-[url('./assets/images/profile-mahasiswa.png')] bg-cover bg-center border-[2px] border-tBlue"/>
        <div className="flex flex-col gap-3 text-[14px] 2xl:text-[16px] ">
          <div>
            <div >
              <div/>
              <h2 className="text-[#9C9191] italic">Nama Lengkap</h2>
            </div>
            <span>Sofia i'zaaz </span>
          </div> 

          <div>
            <div>
              <div/>
              <h2 className="text-[#9C9191] italic">NIM</h2>
            </div>
            <span>22515020711086</span>
          </div>          
          <div>
            <div>
              <div/>
              <h2 className="text-[#9C9191] italic">Program Studi / Fakultas</h2>
            </div>
            <span>Teknik Informatika / Ilmu Komputer</span>
          </div>          
        </div>
      </div>
      <button className="text-[14px] text-tBlue rounded-md border-[1px] border-tBlue px-3 py-2">Gunakan NIM sebagai No. Virtual Account !</button>
    </div>
  )
}

export default CardMahasiswa