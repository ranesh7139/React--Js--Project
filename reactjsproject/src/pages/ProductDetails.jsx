import React from 'react'
import ProductBanner from '../components/ProductBanner'
import DescriptionToggel from '../components/DescriptionToggel'
import LikeProduct from '../components/LikeProduct'

export default function ProductDetails() {
  return (
    <div>
        <ProductBanner/>
        <DescriptionToggel/>
        <LikeProduct/>
    </div>
  )
}

