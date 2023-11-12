
const CardMain = ({title, content}) => {
 
  return (
    <div className="group mx-auto w-[300px] h-[300px] hover:w-[310px] hover:h-[310px]  bg-white hover:bg-tBlue flex flex-col justify-between items-center p-5 mt-3 rounded-3xl shadow-lg duration-75">
      <h1 className="underline text-[24px] text-tBlue group-hover:text-white font-bold">{title}</h1>
      <div className="w-[170px] h-[140px] bg-[url(./assets/images/akademik.png)] bg-cover bg-no-repeat "/>
      <div className="flex flex-wrap justify-center gap-3 px-4">
          {content.map((item, index) => (
            <div className="text-[10px] text-tBlue group-hover:text-white border-[1px] border-tBlue group-hover:border-white rounded-xl px-3" key={index}>          
              <p>{item}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default CardMain