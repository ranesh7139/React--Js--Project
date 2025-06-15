import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import ProductDetails from '../pages/productDetails'
import Home from '../pages/Home'

export default function Navigation() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/:id'element={<ProductDetails/>}/>
        </Routes>
    </div>
  )
}
