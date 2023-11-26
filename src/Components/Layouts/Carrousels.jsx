import CardKHS from "../Fragments/CardKHS"


const Carrousels = () => {
  return (
    <div className="w-full max-w-[930px] carousel rounded-box gap-4 p-6">
      <div className="carousel-item">
        <CardKHS/>
      </div> 
      <div className="carousel-item">
        <CardKHS/>
      </div> 
      <div className="carousel-item">
        <CardKHS/>
      </div> 
      <div className="carousel-item">
        <CardKHS/>
      </div> 
      <div className="carousel-item">
        <CardKHS/>
      </div> 
      <div className="carousel-item">
        <CardKHS/>
      </div> 
      <div className="carousel-item">
        <CardKHS/>
      </div>
    </div>
  )
}

export default Carrousels