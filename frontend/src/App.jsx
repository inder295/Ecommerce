import {Signup} from './pages/Signup';
import {Signin} from './pages/Signin';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ProductListPage } from './pages/ProductListPage';



function App() {
  

  return (
    <>

      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path='/' element={<Home/>} />
        <Route path="/product-list" element={<ProductListPage/>} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>

   
    
        
      
    </>
  )
}

export default App
