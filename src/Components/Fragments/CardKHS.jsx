const CardKHS = ({semester,predikat,ipk}) => {
  return (
    <div className="w-full max-w-xs 2xl:max-w-xl flex flex-col items-center gap-6 rounded-lg shadow-lg p-7">
      <div className="w-full flex flex-row justify-between">
        <h1 className="font-semibold text-lg 2xl:text-xl">Semester {semester}</h1>
        <span className="text-tBlue text-sm 2xl:text-md italic ">{predikat}</span>
      </div>
      <span className="font-semibold text-4xl text-tBlue">{ipk}</span>
      <div className="flex flex-col items-center gap-1">
        <button className="w-full max-w-[200px] bg-tBlue text-sm text-white rounded-lg p-1">Tampilkan</button>
        <p className="font-extralight text-xs text-[#9C9191]">klik <strong>Tampilkan </strong>untuk melihat rincian nilai</p>
      </div>
    </div>
  )
}

export default CardKHS