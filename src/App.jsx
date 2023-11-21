import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/landingPage";
import DashboardPage from "./Pages/dashboardPage";
import AkademikPage from "./Pages/akademikPage";
import TugasPage from "./Pages/tugasPage";
import JadwalPage from "./Pages/jadwalPage";
import InformasiTerkini from "./Pages/informasiTerkini";
import InformasiAkademikPage from "./Pages/informasiAkademikPage";
import InformasiBiayaPage from "./Pages/informasiBiayaPage";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/dashboard" element={<DashboardPage />}/>
        <Route path="/akademik" element={<AkademikPage />}/>
        <Route path="/tugas" element={<TugasPage />}/>
        <Route path="/jadwal" element={<JadwalPage />}/>
        <Route path="/informasi-terkini" element={<InformasiTerkini />}/>
        <Route path="/informasi-akademik" element={<InformasiAkademikPage />}/>
        <Route path="/informasi-biaya" element={<InformasiBiayaPage />}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
