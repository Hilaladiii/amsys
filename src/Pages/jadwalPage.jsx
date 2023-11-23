import Navbar from "../Components/Fragments/Navbar";
import { NavbarLeft } from "../Components/Fragments/Navbar";
import CardJadwal from "../Components/Fragments/CardJadwal";
import SksBox from "../Components/Elements/SKS/SksBox";

const JadwalPage = () => {
    const listWarna = {
        jarkom: "#909090", pbo: "#EAD40D", imk: "#f74040", asd: "#00FF66", basdat: "#6a63f7", pancasila: "#FF30DE", daa: "#5edae0"
    }

    const jadwalSenin = [
        {matkul: "Jaringan Komputer", kehadiran: "90%", jam: "07.00 WIB - 08.40 WIB", warna: listWarna.jarkom},
        {matkul: "PBO", kehadiran: "96%", jam: "09.00 WIB - 11.00 WIB", warna: listWarna.pbo},
        {matkul: "IMK", kehadiran: "100%", jam: "14.00 WIB - 15.30 WIB", warna: listWarna.imk},
]
    const jadwalSelasa = [
        {matkul: "Basis Data", kehadiran: "100%", jam: "07.00 WIB - 09.30 WIB", warna: listWarna.basdat},
        {matkul: "ASD", kehadiran: "92%", jam: "10.20 WIB - 12.00 WIB", warna: listWarna.asd},
        {matkul: "PBO", kehadiran: "96%", jam: "12.50 WIB - 15.20 WIB", warna: listWarna.pbo},
]

    const jadwalRabu = [
        {matkul: "Pancasila", kehadiran: "90%", jam: "07.00 WIB - 08.40 WIB", warna: listWarna.pancasila},
        {matkul: "Jaringan Komputer", kehadiran: "92%", jam: "09.30 WIB - 11.10 WIB", warna: listWarna.jarkom},
]

    const jadwalKamis = [
        {matkul: "IMK", kehadiran: "100%", jam: "07.00 WIB - 08.40 WIB", warna: listWarna.imk},
        {matkul: "Pancasila", kehadiran: "90%", jam: "09.30 WIB - 10.20 WIB", warna: listWarna.pancasila},
        {matkul: "DAA", kehadiran: "96%", jam: "15.30 WIB - 17.00 WIB", warna: listWarna.daa},
]

    const jadwalJumat = [
        {matkul: "Jaringan Komputer", kehadiran: "90%", jam: "07.00 WIB - 08.40 WIB", warna: listWarna.jarkom},
        {matkul: "DAA", kehadiran: "80%", jam: "09.00 WIB - 11.00 WIB", warna: listWarna.daa},
        {matkul: "IMK", kehadiran: "85%", jam: "14.00 WIB - 15.30 WIB", warna: listWarna.imk},
]

    return (
        <div className="w-full flex flex-col bg-[url('/images/BackgroundJadwal.svg')] bg-no-repeat bg-cover h-[120vh] lg:h-[100vh] md:h-[98vh]">
            <Navbar types="akademik-navbar" />
                <div className="w-full h-[50vh] mt-[35%] md:mt-[12%] lg:mt-[7%] flex flex-row justify-center">
                    <NavbarLeft />    
                    <div className="md:w-[100%] w-[80%] overflow-y-scroll h-[85vh] flex flex-col ">
                        <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-7 md:mt-5">
                            <SksBox title="SKS" content="24"/>
                            <SksBox title="SKS Wajib" content="15"/>
                            <SksBox title="SKS Praktikum" content="6"/>
                            <SksBox title="SKS Umum" content="3"/>
                        </div>    
                        <div className="flex flex-wrap md:flex-wrap justify-center">
                            <CardJadwal day="Senin" jadwal={jadwalSenin}></CardJadwal>
                            <CardJadwal day="Selasa" jadwal={jadwalSelasa}></CardJadwal>
                            <CardJadwal day="Rabu" jadwal={jadwalRabu}></CardJadwal>
                            <CardJadwal day="Kamis" jadwal={jadwalKamis}></CardJadwal>
                            <CardJadwal day="Jumat" jadwal={jadwalJumat}></CardJadwal>
                        </div>
                    </div>
                </div>
        </div>
        
    );
}

export default JadwalPage;