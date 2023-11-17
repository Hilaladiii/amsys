import SalaryBar from "../Elements/Salary/salaryBar"

const CardKemahasiswaan = ({title, logo, description, salary}) => {
    return (
        <div className="w-[600px] h-[130px] shadow-md rounded-lg pr-6 duration-300 animate-fade-down">
            <div className="flex flex-row items-start">
                <div className="w-[10px] h-[130px] bg-tBlue rounded-full group-hover:bg-white">
                    <div className="w-[45vw] flex flex-row justify-between items-start">
                        <div className="flex flex-col items-start gap-2 px-5 py-4 group-hover:text-white">
                            <div className="flex flex-row items-center gap-2">
                                <div className="bg-slate-200 p-1 rounded-md">
                                <img className="w-[40px] h-[40px]" src={`./images/kemahasiswaan/${logo}.png`} alt="logo software engineer"/>                                </div>
                                <h1 className="font-semibold">{title}</h1>
                            </div>
                        </div>
                        <div className="flex flex-row justify=end py-6 px-5">
                            <SalaryBar salary={salary}/>
                        </div>
                    </div>
                    <div className="w-[45vw] flex flex-row justify-between items-start px-5">
                        <p className="text-[13px] font-normal text-[#6C6C6C]/[0.8]">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardKemahasiswaan