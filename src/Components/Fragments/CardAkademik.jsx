import { useNavigate } from "react-router-dom"


const CardAkademik = ({title, icons, images, navigate}) => {
  const nav = useNavigate()
  return (
    <div className="group lg:w-[600px] lg:h-[130px] 2xl:w-[780px] 2xl:h-[150px] bg-white shadow-md rounded-r-lg pr-6 hover:bg-tBlue animate-fade-down " onClick={()=> nav(`${navigate}`)}>
        <div className="flex flex-row items-start">
          <div className="w-[10px] h-[130px] 2xl:h-[150px] bg-tBlue group-hover:bg-white"/>
          <div className="w-full flex flex-row justify-between items-start">
            <div className="flex flex-row items-center gap-2 font-semibold text-tBlue group-hover:text-white py-4 px-5">
              <div className="bg-slate-200 p-1 rounded-md">
                <div className={`w-[30px] h-[30px] bg-[url('./assets/icons/${icons}')] bg-contain bg-center bg-no-repeat`}/>
              </div>
                <h1 className="text-[12px] md:text-[15px] 2xl:text-[20px]">{title}</h1>
            </div>        
            <div className={`mt-6 md:mt-0 w-[100px] h-[100px] md:w-[160px] md:h-[130px] 2xl:w-[180px] 2xl:h-[150px]`} style={{ backgroundImage: `url('https://amsys.vercel.app/images/${images}')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}/>
          </div>
        </div>
    </div>
  )
}

export default CardAkademik