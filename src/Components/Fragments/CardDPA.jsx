const CardDPA = () => {
    return (
        <div className="w-[367px] h-[380px] bg-white rounded-3xl p-6 flex flex-col justify-between shadow-2xl duration-300 animate-fade-down animated-delay-300">
            <div className="flex flex-col mx-auto justify-center items-center">
                <h1 className="text-black font-bold">Dosen Pembimbing</h1>
                <h1 className="text-black font-bold">Akademik</h1>
                <img className="py-2" src="./images/kemahasiswaan/foto-dpa.png" alt="foto dpa" />
                <table className="text-black font-semibold">
                    <tr><td>Nama</td><td>: Federico, M.Sg</td></tr>
                    <tr><td>NIP</td><td>: 22515909727</td></tr>
                    <tr><td>Email</td><td>: dosen@gmail.com</td></tr>
                </table>
                <div className="flex flex-row py-4">
                    <div className="w-[315px] h-[44px] border rounded-xl bg-[#2984E4] flex flex-row justify-center items-center">
                        <h1 className="text-[#FFF] text-[14px]">Hubungi DPA</h1>
                    </div>
                </div>    
            </div>
        </div>
    )
}
 export default CardDPA