import SalaryBar from "../Elements/Salary/SalaryBar"

const CardKemahasiswaan = ({title, logo, description, salary,color}) => {
    return (
        <div className="w-full 2xl:max-w-3xl shadow-md rounded-lg pr-6 duration-300 animate-fade-down animate-delay-300 relative">
            <div className="flex flex-row items-start">
                <div className="w-[10px] h-[130px] bg-tBlue rounded-full group-hover:bg-white">
                    <div className="w-[45vw] flex flex-row justify-between">
                        <div className="flex flex-col items-start px-5 py-4 group-hover:text-white">
                            <div className="flex flex-row items-center"> 
                                <img className="w-[40px] h-[40px] md:w-[40px] md:h-[40px] bg-center z-50" src={`./images/kemahasiswaan/${logo}.png`} alt={`logo ${title}`}/>                                
                                <h1 className="text-[11px] md:text-[15px] 2xl:text-lg px-4 font-semibold border md:px-2 rounded-full" style={{background: `rgba(${color})`, color: "#00000"}} >{title}</h1>
                            </div>
                        </div>
                        <div className="absolute right-0 top-0 px-2 py-6 md:px-5">
                            <SalaryBar salary={salary}/>
                        </div>
                    </div>
                    <div className="w-[90vw] md:w-[100vw] lg:w-[40vw] flex flex-row justify-between items-start px-5">
                        <p className="text-[9px] md:text-[13px] font-normal text-[#6C6C6C]/[0.8]">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardKemahasiswaan