import BestSelling from "./components/BestSelling/BestSelling"
import DesignerClothes from "./components/DesignerClothes/DesignerClothes"
import ExclusiveOffer from "./components/ExclusiveOffer/ExclusiveOffer"
import Feedback from "./components/Feedback/Feedback"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import OurProducts from "./components/Products/Products"


function App() {
  

  return (
    <div className="App">
         <Navbar />
         <Hero />
         <BestSelling />
         <OurProducts />
         <ExclusiveOffer />
         <DesignerClothes />
         <Feedback />
         <Footer />
    </div>
  )
}

export default App
