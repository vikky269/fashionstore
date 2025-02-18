import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Layout from "./Layout/Layout"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Shop from "./pages/Shop/Shop"




function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
             <Route path="about" element={<About />} />
            <Route path="shop" element={<Shop />} /> 
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App



{/* <Navbar />
<Hero />
<BestSelling />
{/* <OurProducts /> */}
{/* <BasicTabs />
<ExclusiveOffer />
<DesignerClothes />
<Feedback />
<Whatsapp />
// <Footer /> */} 