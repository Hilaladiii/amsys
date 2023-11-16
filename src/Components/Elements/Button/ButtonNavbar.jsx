import { useNavigate } from "react-router-dom"


const ButtonNavbar = ({title,navigation, icons}) => {
  const naav = useNavigate()
  return (
    <div className="group flex flex-row justify-between items-center hover:bg-[#9F9F9F17] animate-fade-right animate-delay-150" onClick={()=>nav(`${navigation}`)}>
      <div className="flex flex-row gap-3 p-1 items-center">
        <div className={`w-[25px] h-[25px] 2xl:w-[40px] 2xl:h-[40px] bg-[url('./assets/icons/${icons}')] bg-contain bg-center bg-no-repeat`}/>
        <span className=" text-[15px] 2xl:text-[20px]">{title}</span>
      </div>
      <div className="w-1 h-8 bg-white group-hover:bg-tBlue"/>
  </div>
  )
}

export default ButtonNavbar