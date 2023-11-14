

const CardAkademik = () => {
  return (
    <div className="w-[600px] h-[130px] shadow-md rounded-lg ">
        <div className="flex flex-row items-start">
          <div className="w-[10px] h-[130px] bg-tBlue"/>
          <div className="w-full flex flex-row justify-between items-start">
            <div className="flex flex-row items-center gap-2 font-semibold text-tBlue py-4 px-5">
              <div className="bg-slate-200 p-1 rounded-md">
                <div className="w-[30px] h-[30px] bg-[url('./assets/icons/icon-academic.svg')] bg-contain bg-center bg-no-repeat"/>
              </div>
                <h1>Jadwal Kuliah</h1>
            </div>        
            <div className="w-[160px] h-[130px] bg-[url('./assets/images/akademik-image.png')] bg-cover bg-no-repeat bg-center"/>
          </div>
        </div>
    </div>
  )
}

export default CardAkademik