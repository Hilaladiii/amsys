import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/landingPage";
import DashboardPage from "./Pages/dashboardPage";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/dashboard" element={<DashboardPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
