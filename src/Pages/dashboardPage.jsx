import { Link } from "react-router-dom"
import Navbar from "../Components/Fragments/Navbar"
import Button from "../Components/Elements/Button/Button"


const DashboardPage = () => {  
  const pathName = window.location.pathname
  return (
    <div className="w-full h-screen bg-[url('/Images/BackgroundDashboard.svg')] bg-no-repeat bg-cover flex flex-col justify-center">      
      <Navbar />  
      
    </div>
  )
}

export default DashboardPage