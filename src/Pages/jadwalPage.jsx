import Navbar from "../Components/Fragments/Navbar";
import { NavbarLeft } from "../Components/Fragments/Navbar";
import CardJadwal from "../Components/Fragments/CardJadwal";

const JadwalPage = () => {
    const listWarna = {
        jarkom: "#909090", pbo: "#EAD40D", imk: "#FF0000", asd: "#00FF66", basdat: "#390DEA", pancasila: "#FF30DE", daa: "#5edae0"
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
        <div className="w-full flex flex-col bg-[url('./images/jadwal/BackgroundJadwal.svg')] bg-no-repeat bg-cover">
            <Navbar types="akademik-navbar" />
                <div className="w-[100vw] h-[50vh] mt-[6%] flex flex-row gap-3 ">
                    <NavbarLeft />    
                    <div className="grid grid-cols-3 gap-4">
                        <CardJadwal day="Senin" jadwal={jadwalSenin}></CardJadwal>
                        <CardJadwal day="Selasa" jadwal={jadwalSelasa}></CardJadwal>
                        <CardJadwal day="Rabu" jadwal={jadwalRabu}></CardJadwal>
                        <CardJadwal day="Kamis" jadwal={jadwalKamis}></CardJadwal>
                        <CardJadwal day="Jumat" jadwal={jadwalJumat}></CardJadwal>
                    </div>
                </div>
        </div>
        
    );
}

export default JadwalPage;