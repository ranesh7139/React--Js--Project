import React from 'react'
import { IoBag } from "react-icons/io5";
import "../cssfiles/Footer.css"
export default function Footer() {
  return (
    <div className='footer'>
        <div className='mart'>
            <div className='marthead'>
                <h1><IoBag /></h1>
                <h1>MART</h1>
            </div>
            <br />
            <div className='martfoot'>
           <p> Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br /> Aliquid consectetur distinctio <br /> eum tempore expedita incidunt, <br /> reprehenderit nemo ea <br /> voluptas vel nisi, itaque  <br />fugit, ab neque velit. <br /> Dolorum asperiores ipsum vero. </p>
            </div>
        </div>
        <div className='about'>
            <div className='abouthead'>
                <h1>About Us</h1>
            </div>
            <br />
            <div className='aboutfoot'>
                <li>Careers</li>
                <li>Our Stores</li>
                <li>Our Cars</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
            </div>
        </div>
        <div className='customer '>
            <div className='customerhead'>
                <h1>Customer Care</h1>
            </div>
            <br />
            <div className='customerfoot'>
                <li>Help Center</li>
                <li>How to Buy</li>
                <li>Track your Order</li>
                <li>Corporate & Bulk Purchasing</li>
                <li>Returns & Refunds</li>
            </div>
        </div>
        <div className='contact'>
            <div className='contacthead'>
                <h1>Contact Us</h1>
            </div>
            <br />
            <div className='contactfoot' >
                <li>85-kuravapalli</li>
                <li>T.Sundupalli(M), Kadapa(D),</li>
                <li>Pin:516129, AP, India</li>
                <li>Email :</li>
                <li>raneshmanchuri00@gmail.com</li>
                <li>Phone: +91 7995873364</li>
            </div>
        </div>
    </div>
  )
}
