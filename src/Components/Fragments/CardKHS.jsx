const CardKHS = () => {
  return (
    <div className="w-full max-w-xs flex flex-col items-center gap-6 rounded-lg shadow-lg p-7">
      <div className="w-full flex flex-row justify-between">
        <h1 className="font-semibold text-lg">Semester 1</h1>
        <span className="text-tBlue text-sm italic">Sangat Baik</span>
      </div>
      <span className="font-semibold text-4xl text-tBlue">4.00</span>
      <div className="flex flex-col items-center gap-1">
        <button className="w-full max-w-[200px] bg-tBlue text-sm text-white rounded-lg p-1">Tampilkan</button>
        <p className="font-extralight text-xs text-[#9C9191]">klik <strong>Tampilkan </strong>untuk melihat rincian nilai</p>
      </div>
    </div>
  )
}

export default CardKHS