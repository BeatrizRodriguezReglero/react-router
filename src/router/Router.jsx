import { Route, Routes } from "react-router-dom"

import Home from "../pages/Home"
import About from "../pages/About"
import Product from "../pages/Product"


const Router =()=>{
    return(
        <Routes>
            <Route path='/' element={<Home/>}>

            </Route>
            <Route path='about' element={<About/>}></Route>
            <Route path='/product/:name' element={<Product/>}></Route>
        </Routes>
    )
}
export default Router