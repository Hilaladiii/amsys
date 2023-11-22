import Graph from "./Graph";

const CardGrafik = ({fakultas, tahun}) =>{
    const data = [
        { x: 1, y: 1000 },
        { x: 2, y: 1400 },
        { x: 3, y: 1200 },
        { x: 4, y: 600 },
        { x: 5, y: 2000 },
        { x: 6, y: 1600 },
    ]

    const xLabel = 'Bulan ke';
    const yLabel = 'Orang';
    return (
        <div className="w-[370px] h-[320px] bg-white rounded-3xl p-6 flex flex-col justify duration-300 between shadow-2xl animate-fade-down animated-delay-300">
            <div className="flex flex-col mx-auto justify-center items-center">
                <h1 className="text-black font-bold">Grafik pekerjaan lulusan</h1>
                <h1 className="text-black font-bold">Universitas Brawijaya</h1>
            </div>
            <div className="flex flex-row justify-between items-start px-2 py-5">
                <select name="Fakultas" id="" className="w-[35%] bg-tBlue text-white rounded-md px-3 ">
                    {
                        fakultas.map((item, index) => (
                            <option value="FILKOM" key={index}>{item}</option>
                        ))
                    }
                </select>
                <select name="Fakultas" id="" className="w-[35%] bg-tBlue text-white rounded-md px-3">
                    {
                        tahun.map((item, index) => (
                            <option value="2018" key={index}>{item}</option>
                        ))
                    }
                </select>
            </div>
            <div className="flex flex-row">
                    <Graph type={'bar'} data={data} xLabel={xLabel} yLabel={yLabel} />
            </div>
        </div>
    );
};

export default CardGrafik