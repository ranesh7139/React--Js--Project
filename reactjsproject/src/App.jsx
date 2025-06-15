import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

import Navigation from './Routing/Navigation'

export default function() {
  return (
    <div>
      <Header/>
      <Navigation/>
      <Footer/>
    </div>
  )
}
