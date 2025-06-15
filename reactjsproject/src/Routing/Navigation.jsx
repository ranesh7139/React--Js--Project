import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import ProductDetails from '../pages/productDetails'
import Home from '../pages/Home'
import ShopPage from '../pages/ShopPage'


export default function Navigation() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/:id'element={<ProductDetails/>}/>
            <Route path='/shop-page' element={<ShopPage/>}/>
        </Routes>
    </div>
  )
}
