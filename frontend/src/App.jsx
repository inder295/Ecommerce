import { Route, Routes } from "react-router-dom"
import About from "./pages/About"
import Market from "./pages/Market"
import Product from "./pages/Product"



function App() {
 
  return (
    < >
   
    <Routes>
          <Route path="/" element={<About />} />
          <Route path="/market" element={<Market/>} />
          <Route path="/product/name" element={<Product/>} />
    </Routes>

  

     
    </>
  )
}

export default App
