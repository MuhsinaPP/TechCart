import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Home from '../Components/Home'
import Logout from '../Components/Logout'
import ProductDetails from '../Components/ProductDetails'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'

function LayoutRoutes() {
  return (
    <>
    <Router>
        <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Techflix' element={<Home/>}/>
                <Route path='/Logout' element={<Logout/>}/>
                <Route path='/product/:id' element={<ProductDetails/>}/>
            </Routes>
        <Footer/>
    </Router>
    </>
  )
}

export default LayoutRoutes