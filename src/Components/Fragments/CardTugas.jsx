import { Link } from "react-router-dom"


const CardTugas = ({statusTugas, totalTugas,}) => {
  const color = statusTugas === "Tugas Selesai" ? "#2DE429" : statusTugas === "Belum Dikerjakan" ? "#2984E4" : statusTugas === "Terlewat" ? "#E42929" : ""  
  const icons = statusTugas === "Tugas Selesai" ? "icon-centang.svg" : statusTugas === "Belum Dikerjakan" ? "icon-notComplete.svg" : statusTugas === "Terlewat" ? "icon-overdue.svg" : ""  
  return (
    <div className={`w-[220px] flex flex-col justify-between gap-5 px-5 py-3 border-[1px] border-[${color}] shadow-md rounded-xl`}>
      <div className={`w-[40px] h-[40px] bg-[url('./assets/icons/${icons}')] bg-center bg-no-repeat bg-[#2DE42926] rounded-md`}/>
      <div className="flex flex-col">
        <span className="font-semibold">{statusTugas}</span>
        <div className="flex flex-row justify-between items-center">
          <span className={`text-[36px] font-bold text-[${color}]`}>{totalTugas}</span>
          <div>
            <Link className="flex flex-row items-center gap-2">
              <p className={`text-[15px] text-[${color}] font-light`}>lihat</p>
              <div className={`bg-[${color}] rounded-full p-1`}>
                <div className="w-[10px] h-[10px] bg-[url('./assets/icons/icon-arrowLeft.svg')] bg-contain bg-center bg-no-repeat"/>
              </div>
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CardTugas