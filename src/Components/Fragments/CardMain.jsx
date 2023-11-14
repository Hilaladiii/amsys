import { useNavigate } from "react-router-dom";
const CardMain = ({ title, imageUrl, content, navigate }) => {
  const nav = useNavigate()
  return (
    <div className="group w-[250px] h-[250px] md:w-[300px] md:h-[300px] 2xl:w-[350px] 2xl:h-[350px] bg-white hover:bg-tBlue flex flex-col justify-between items-center gap-5  p-5 mt-3 rounded-3xl shadow-lg duration-75" onClick={()=>nav(`${navigate}`) }>
      <h1 className="underline text-[15px] md:text-[24px] text-tBlue group-hover:text-white font-bold">{title}</h1>
      <div className="w-[130px] h-[130px] md:w-[170px] md:h-[140px]" style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} />
      <div className="flex flex-wrap justify-center gap-3 px-4">
        {content.map((item, index) => (
          <div className="text-[7px] md:text-[10px] 2xl:text-[12px] text-tBlue group-hover:text-white border-[1px] border-tBlue group-hover:border-white rounded-xl px-3" key={index}>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardMain;
