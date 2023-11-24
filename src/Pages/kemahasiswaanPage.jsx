import CardDPA from "../Components/Fragments/CardDPA";
import CardKemahasiswaan from "../Components/Fragments/CardKemahasiswaan";
import Navbar from "../Components/Fragments/Navbar";
import { NavbarLeft } from "../Components/Fragments/Navbar";
import CardGrafik from "../Components/Fragments/CardGrafik";

const KemahasiswaanPage = () => {
    const descList = 
    {da: "Data Analyst merupakan sebuah pekerjaan yang berfokus pada pengumpulan dan pengolahan berbagai macam data yang diperlukan oleh perusahaan. ",
    se: "Software Engineer merupakan sebuah pekerjaan yang berfokus pada analisis kebutuhan dan desain pengguna, konstruksi, serta uji perangkat lunak seperti aplikasi.",
    ce: "Cloud Engineer merupakan sebuah pekerjaan yang berfokus dalam membangun insfrastruktur cloud.",
    md: "Mobile Developer merupakan sebuah pekerjaan yang berfokus dalam bidang pengembangan aplikasi mobile sesuai dengan jenis Operating System."
}
    return (
        <div className="w-full h-screen flex flex-col">
            <Navbar types={'kemahasiswaan-navbar'} />
            <div className="w-full mt-[29%] md:mt-[10%] lg:mt-[8%] 2xl:mt-[7%] flex flex-col lg:flex-row gap-2">
                <NavbarLeft />
                <div className=" w-full lg:ml-[22%] flex flex-col-reverse p-2 lg:p-0 lg:flex-row overflow-y-scroll md:overflow-x-hidden">
                    <div className="w-full flex flex-col">
                        <div className="flex flex-col p-4 gap-4 mb-10 md:mb-5 lg:mb-0">
                            <div className="flex flex-col">
                                <h2 className="font-bold text-[20px] animate-fade-down animate-delay-300">Rekomendasi Karir</h2>
                                <p className="text-[11px] md:text-[14px] text-[#5B5555] animate-fade-down animate-delay-300">Panduan Karir untuk Masa Depan Sukses Anak Anda</p>
                            </div>
                            <CardKemahasiswaan title={'Data Analyst'} logo={'logo-de'} description={descList.da} salary={'10.000.000'} color={"234, 212, 13, 0.20"} />
                            <CardKemahasiswaan title={'Sofware Engineer'} logo={'logo-se'} description={descList.se} salary={'11.500.000'} color={"18, 238, 246, 0.41"} />
                            <CardKemahasiswaan title={'Cloud Engineer'} logo={'logo-ce'} description={descList.ce} salary={'9.000.000'} color={"209, 210, 210"} />
                            <CardKemahasiswaan title={'Mobile Developer'} logo={'logo-md'} description={descList.md} salary={'6.000.000'} color={"148, 238, 173"} />
                        </div>
                    </div>
                    <div className="md:flex-col px-5 py-3 md:mt-2 lg:mt-4 lg:px-1">
                        <div className="flex flex-col md:flex-row lg:flex-col justify-center items-center px-2 gap-4 lg:pr-4">
                            <CardDPA />
                            <CardGrafik fakultas={['FILKOM','FEB','FISIP','FIB','FIA']} tahun={['2018','2019','2020']} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KemahasiswaanPage;