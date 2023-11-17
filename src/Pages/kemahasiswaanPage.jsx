import CardKemahasiswaan from "../Components/Fragments/CardKemahasiswaan";
import Navbar from "../Components/Fragments/Navbar";
import { NavbarLeft } from "../Components/Fragments/Navbar";

const KemahasiswaanPage = () => {
    const descList = 
    {da: "Data Enginer merupakan sebuah pekerjaan yang berfokus pada pengumpulan dan pengolahan berbagai macam data yang diperlukan oleh perusahaan. ",
    se: "Software Engineer merupakan sebuah pekerjaan yang berfokus pada analisis kebutuhan dan desain pengguna, konstruksi, serta uji perangkat lunak seperti aplikasi.",
    ce: "Cloud Engineer merupakan sebuah pekerjaan yang berfokus dalam membangun insfrastruktur cloud.",
    md: "Mobile Developer merupakan sebuah pekerjaan yang berfokus dalam bidang pengembangan aplikasi mobile sesuai dengan jenis Operating System."
}
    
    return (
        <div className="w-full flex flex-col">
            <Navbar types={'akademik-navbar'} />
            <div className="w-[85vw] h-[50vh] mt-[29%] md:mt-[14%] lg:mt-[6%] 2xl:mt-[7%] flex flex-col lg:flex-row py-5 gap-4">
                <NavbarLeft />
                <div className="md:w-[100%] w-[80%] overflow-y-scroll h-[85vh] flex flex-col ">
                    <div className="flex flex-col p-3 gap-2">
                        <h2 className="font-bold text-[20px] animate-fade-down">Rekomendasi Karir</h2>
                        <p className="text-[14px] text-[#5B5555] animate-fade-down">Panduan Karir untuk Masa Depan Sukses Anak Anda</p>
                        <CardKemahasiswaan title={'Data Analyst'} logo={'logo-da'} description={descList.da} salary={'10.000.000'} />
                        <CardKemahasiswaan title={'Sofware Engineer'} logo={'logo-se'} description={descList.se} salary={'11.500.000'} />
                        <CardKemahasiswaan title={'Cloud Engineer'} logo={'logo-cloud'} description={descList.ce} salary={'9.000.000'} />
                        <CardKemahasiswaan title={'Mobile Developer'} logo={'logo-mobile'} description={descList.md} salary={'6.000.000'} />
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KemahasiswaanPage