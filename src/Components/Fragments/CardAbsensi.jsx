

const CardAbsensi = ({matkul}) => {
  return (
    <div className="w-[450px] flex flex-col justify-between  p-10 rounded-md shadow-md animate-fade-left">
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-[18px] text-tBlue font-semibold">Absensi</h1>
            <div className="text-tBlue text-[12px] border-[1px] border-tBlue px-3 py-1 rounded-lg">
              semester 5
            </div>
          </div>
          <select name="mata_kuliah" id="" className="w-[35%] bg-tBlue text-white rounded-md px-3">
            {
              matkul.map((item, index) => (
                <option value="imk" key={index}>{item}</option>                            
              ))
            }
          </select>
          <span className="mx-auto text-[42px] font-semibold">90%</span>
          <div className="w-[60%] flex flex-col gap-1">
            <h1 className="text-[12px] text-tBlue underline">Detail Tidak Hadir</h1>
            <div className="flex flex-row justify-between text-[#9C9191] text-[12px]">
              <div className="flex flex-row items-center gap-1">
                <div className="w-1 h-4 bg-[#9C9191] rounded-md"/>
                <span>Pertemuan 2</span>
              </div>
              <span>12/08/2023</span>
            </div>
            <div className="flex flex-row justify-between text-[#9C9191] text-[12px]">
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