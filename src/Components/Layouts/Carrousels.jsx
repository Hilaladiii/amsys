import CardKHS from "../Fragments/CardKHS"

const dataIPK = [
  {
    semester:1,
    predikat:'Sangat Baik',
    ipk:3.89
  },
  {
    semester:2,
    predikat:'Sangat Baik',
    ipk:3.90
  },
  {
    semester:3,
    predikat:'Sangat Baik',
    ipk:3.91
  },
  {
    semester:4,
    predikat:'Sangat Baik',
    ipk:3.92
  },
  {
    semester:5,
    predikat:'Sangat Baik',
    ipk:3.93
  },
  {
    semester:6,
    predikat:'Sangat Baik',
    ipk:3.94
  },
  {
    semester:7,
    predikat:'Sangat Baik',
    ipk:3.97
  },

]

const Carrousels = () => {
  return (
    <div className="w-full max-w-[930px] carousel rounded-box gap-4 p-6">
      {
        dataIPK.map((item, index) => (
          <div className="carousel-item" key={index}>
            <CardKHS semester={item.semester} predikat={item.predikat} ipk={item.ipk}/>
          </div>           
        ))
      }      
    </div>
  )
}

export default Carrousels