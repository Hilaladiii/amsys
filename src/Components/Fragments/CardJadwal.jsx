const CardJadwal = ({day, jadwal}) => {
    return (
        <div className="w-[320px] md:w-[480-px] md:h-[365-px] 2xl:w-[570-px] 2xl:h-[420-px] bg-white rounded-3xl p-10 flex flex-col justify-between gap-2 shadow-2xl md:mx-2 mt-10 animate-fade-up">
            <div className="flex flex-row justify-between gap-2">
                <div className="flex flex-row justify-center items-center">
                    <img className="w-[40px] h-[40px]" src="/images/jadwal/book-logo.png" alt="logo buku" />
                   <h1 className="text-md font-semibold">{day}</h1>
                </div>
                <div className="flex flex-row justify-end items-baseline">
                    <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                        <span class="sr-only">Open dropdown</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                        </svg>
                    </button>              
                </div>
            </div>

            {jadwal.map((item, index) => (
                <div key={index}>
            <div className="flex flex-row justify-between gap-2">
                <div className="flex flex-row justify-center items-center">
                    <h4 className="text-[10px] md:text-[12px] 2xl:text-[18px] font-normal border  text-black px-2" style={{borderRadius: "10px", backgroundColor: item.warna}}>{item.matkul}</h4>
                </div>
                <div className="flex flex-row justify-end items-baseline ">
                    <p className="italic text-[10px] md:text-[12px] 2xl:text-[18px] font-normal text-[#9C9191]">Kehadiran{" "}<strong className="text-[#151a27]">{item.kehadiran}</strong></p>
                </div>
            </div>
            <div className="flex flex-row justify-between gap-1 mt-0.5">
                <div className="flex flex-row justify-center items-center">
                    <p className="italic text-[9px] md:text-[11px] 2xl:text-[18px] font-normal text-[#9C9191]">{item.jam}</p>
                </div>
                <div className="flex flex-row justify-end items-center">
                    <div class="flex w-24 h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100 ">
                        <div class="flex flex-col justify-center rounded-full overflow-hidden text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500" style={{backgroundColor: item.warna, width: item.kehadiran}}></div>
                    </div>
                </div>
            </div>
            </div>
            ))}
        </div>        
    );
};

export default CardJadwal;