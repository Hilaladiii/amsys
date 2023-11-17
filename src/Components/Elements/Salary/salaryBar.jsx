const SalaryBar = ({salary}) => {
    return (
        <div className="w-[150px] h-[26px] flex justify-between items-center bg-[#2984E4] text-white rounded-full ">
            <img className="w-[22px] h-[22px] ml-1" src="./images/kemahasiswaan/logo-coin.png" alt="logo coin dollar" />
            <p className="mr-2">Rp. {salary}</p>
        </div>
    )
}

export default SalaryBar