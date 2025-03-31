import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Layout from "./Layout/Layout"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Shop from "./pages/Shop/Shop"
import ProductDetails from "./pages/ProductDetails/ProductDetails"
import AbayaDetails from "./pages/AbayaDetails/AbayaDetails"
import HandbagDetails from "./pages/HandbagDetails/HandbagDetails"
import JewelleryDetails from "./pages/JewelleryDetails/JewelleryDetails"
import ScrollToTop from "./components/ScrollToTop"




function App() {
  

  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
             <Route path="about" element={<About />} />
            <Route path="shop" element={<Shop />} /> 
            <Route path="product/:productId" element={<ProductDetails />} /> 
            <Route path="abaya/:productId" element={<AbayaDetails />} /> 
            <Route path="handbag/:productId" element={<HandbagDetails />} /> 
            <Route path="jewellery/:productId" element={<JewelleryDetails />} /> 
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