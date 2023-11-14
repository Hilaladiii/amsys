

const CardAkademik = ({title, icons, images}) => {
  return (
    <div className="group lg:w-[600px] lg:h-[130px] shadow-md rounded-r-lg pr-6 hover:bg-tBlue duration-300 animate-fade-down ">
        <div className="flex flex-row items-start">
          <div className="w-[10px] h-[130px] bg-tBlue group-hover:bg-white"/>
          <div className="w-full flex flex-row justify-between items-start">
            <div className="flex flex-row items-center gap-2 font-semibold text-tBlue group-hover:text-white py-4 px-5">
              <div className="bg-slate-200 p-1 rounded-md">
                <div className={`w-[30px] h-[30px] bg-[url('./assets/icons/${icons}')] bg-contain bg-center bg-no-repeat`}/>
              </div>
                <h1>{title}</h1>
            </div>        
            <div className={`w-[160px] h-[130px] `} style={{ backgroundImage: `url('https://amsys.vercel.app/images/${images}')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}/>
          </div>
        </div>
    </div>
  )
}

export default CardAkademik