import Button from "../Elements/Button/Button"

const CardDPA = () => {
  return (
      <div className="w-full flex flex-col justify-center items-center gap-2 p-8 bg-white rounded-3xl shadow-2xl duration-300 animate-fade-down animated-delay-300">
          <h1 className="w-[80%] text-black text-center text-[18px] lg:text-[20px] 2xl:text-[24px] font-bold">Dosen Pembimbing Akademik</h1>              
              <img className="py-2" src="/images/fotoDPA.png" alt="foto dpa" />
              <table className="text-black font-semibold">
                  <tr><td>Nama</td><td>: Federico, M.Sg</td></tr>
                  <tr><td>NIP</td><td>: 22515909727</td></tr>
                  <tr><td>Email</td><td>: dosen@gmail.com</td></tr>
              </table>
              <Button classname="w-full bg-tBlue text-white">Hubungi DPA</Button>
      </div>
  )
}
export default CardDPA
