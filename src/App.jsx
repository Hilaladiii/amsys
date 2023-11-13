import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/landingPage";
import DashboardPage from "./Pages/dashboardPage";
import AkademikPage from "./Pages/akademikPage";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/dashboard" element={<DashboardPage />}/>
        <Route path="/akademik" element={<AkademikPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
