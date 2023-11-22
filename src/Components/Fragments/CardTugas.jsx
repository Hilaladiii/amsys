


const CardTugas = ({statusTugas, totalTugas,}) => {
  const color = statusTugas === "Tugas Selesai" ? "#2DE429" : statusTugas === "Belum Dikerjakan" ? "#2984E4" : statusTugas === "Terlewat" ? "#E42929" : ""  
  const icons = statusTugas === "Tugas Selesai" ? "https://amsys.vercel.app/icons/icon-centang.svg" : statusTugas === "Belum Dikerjakan" ? "https://amsys.vercel.app/icons/icon-notComplete.svg" : statusTugas === "Terlewat" ? "https://amsys.vercel.app/icons/icon-overdue.svg" : ""  
  return (
    <div className={`w-[220px] flex flex-col justify-center items-center gap-5 px-5 py-3 border-[1px] shadow-md rounded-xl`} style={{borderColor: `${color}`}}>
      <div className={`w-[40px] h-[40px] rounded-md bg-[url("${icons}")] bg-no-repeat bg-center bg-contain`}/>
      <div className="flex flex-col justify-center items-center">
        <span className="font-semibold">{statusTugas}</span>
        <div className="flex flex-row justify-between items-center">
          <span className={`text-[36px] font-bold`} style={{color: `${color}`}}>{totalTugas}</span>
          <div>            
          </div>
        </div>
      </div>

    </div>
  )
}

export default CardTugas