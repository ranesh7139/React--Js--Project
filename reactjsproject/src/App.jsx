import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Navigation from './Routing/Navigation'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
export default function() {
  return (
    <div>
      <Header/>
      <Navigation/>
      <Footer/>
      <ToastContainer 
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
        />
    </div>
  )
}
