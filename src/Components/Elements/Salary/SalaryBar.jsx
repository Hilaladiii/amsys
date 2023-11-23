const SalaryBar = ({salary}) => {
  return (
      <div className="flex justify-center items-center gap-1 p-1 bg-[#2984E4] text-white rounded-full ">
          <img className="w-[22px] h-[22px] ml-1" src="/icons/icon-coin.png" alt="logo coin dollar" />
          <p className="text-[11px] md:text-[15px] mr-2">Rp. {salary}</p>
      </div>
  )
}

export default SalaryBar