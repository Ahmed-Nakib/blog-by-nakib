import { Outlet } from "react-router"
import Navbar from "./components/Navbar"
import Footer from "@/components/Footer"
import { BackgroundPattern } from "@/components/ui/background-pattern"



const App = () => {
  return (
    <div className="relative min-h-screen">
      <div>
         <BackgroundPattern />
      </div>
    <Navbar />
    <Outlet />
    <Footer />
    </div>
  )
}

export default App
