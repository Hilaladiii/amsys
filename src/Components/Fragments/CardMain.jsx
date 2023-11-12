
const CardMain = ({title, icons, content}) => {
 
  return (
    <div className="group w-[250px] h-[250px] hover:w-[260px] hover:h-[260px] md:w-[300px] md:h-[300px] md:hover:w-[310px] md:hover:h-[310px]  bg-white hover:bg-tBlue flex flex-col justify-between items-center p-5 mt-3 rounded-3xl shadow-lg duration-75">
      <h1 className="underline text-[15px] md:text-[24px] text-tBlue group-hover:text-white font-bold">{title}</h1>
      <div className={`w-[170px] h-[140px] bg-[url(${icons})] bg-contain bg-no-repeat`} />
      <div className="flex flex-wrap justify-center gap-3 px-4">
          {content.map((item, index) => (
            <div className="text-[7px] md:text-[10px] text-tBlue group-hover:text-white border-[1px] border-tBlue group-hover:border-white rounded-xl px-3" key={index}>          
              <p>{item}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default CardMain