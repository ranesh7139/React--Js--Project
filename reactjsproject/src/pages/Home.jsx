import React from 'react'
import Carousel from './Carousel'
import Servicecard from './Servicecard'
import Bigdiscount from './Bigdiscount'
import Newarrivals from './Newarrivals'
import Bestsales from './Bestsales'

export default function Home() {
  return (
    <div>
        <Carousel/>
        <Servicecard/>
        <Bigdiscount/>
        <Newarrivals/>
        <Bestsales/>
    </div>
  )
}
