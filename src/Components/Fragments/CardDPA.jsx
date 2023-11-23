const CardDPA = () => {
  return (
      <div className="w-full flex flex-col justify-center items-center gap-2 p-7 bg-white rounded-3xl shadow-2xl duration-300 animate-fade-down animated-delay-300">
          <h1 className="w-[80%] text-center text-[18px] lg:text-[20px] 2xl:text-[24px] font-bold">Dosen Pembimbing Akademik</h1>
              
              <img className="py-2" src="./assets/images/fotoDPA.png" alt="foto dpa" />
              <table className="text-black font-semibold">
                  <tr><td>Nama</td><td>: Federico, M.Sg</td></tr>
                  <tr><td>NIP</td><td>: 22515909727</td></tr>
                  <tr><td>Email</td><td>: dosen@gmail.com</td></tr>
              </table>
              <div className="flex flex-row py-4">
                  <div className="w-[230px] h-[40px] md:w-[315px] md:h-[44px] border rounded-xl bg-[#2984E4] flex flex-row justify-center items-center">
                      <h1 className="text-[#FFF] text-[14px]">Hubungi DPA</h1>
                  </div>
              </div> 
      </div>
  )
}
export default CardDPA
