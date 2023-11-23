

const CardAbsensi = ({matkul}) => {
  return (
    <div className="md:w-[450px] 2xl:w-[530px] flex flex-col justify-between p-10 rounded-md shadow-md animate-fade-left">
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-[18px] 2xl:text-[22px] text-tBlue font-semibold">Absensi</h1>
            <div className="text-tBlue text-[12px] 2xl:text-[15px] border-[1px] border-tBlue px-3 py-1 rounded-lg">
              semester 5
            </div>
          </div>
          <select name="mata_kuliah" id="" className="w-[35%] bg-tBlue text-white rounded-md px-3 2xl:text-[20px]">
            {
              matkul.map((item, index) => (
                <option value="imk" key={index}>{item}</option>                            
              ))
            }
          </select>
          <span className="mx-auto text-[42px] 2xl:text-[60px] font-semibold">90%</span>
          <div className="w-full max-w-[170px] flex flex-col gap-1">
            <h1 className="text-[12px] 2xl:text-[16px] text-tBlue underline">Detail Tidak Hadir</h1>
            <div className="w-full flex flex-row items-center gap-4 text-[#9C9191] text-[10px] md:text-[12px] 2xl:text-[16px]">
              <div className="flex flex-row items-center gap-1 ">
                <div className="w-1 h-4 bg-[#9C9191] rounded-md"/>
                <span>Pertemuan 2</span>
              </div>
              <span>12/08/2023</span>
            </div>
            <div className="flex flex-row items-center gap-4 text-[#9C9191] text-[10px]  md:text-[12px] 2xl:text-[16px]">
              <div className="flex flex-row items-center gap-1">
                <div className="w-1 h-4 bg-[#9C9191] rounded-md"/>
                <span>Pertemuan 2</span>
              </div>
              <span>12/08/2023</span>
            </div>
            
          </div>
    </div>
  )
}

export default CardAbsensi