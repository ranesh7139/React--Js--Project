import React from 'react'
import { IoBag } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import { Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

import "../cssfiles/Header.css"



export default function Header() {
const cartItems=useSelector((state)=>state.cartItems.cart)
const uniquecount=cartItems.length  
  return (
    <div className='main' >
        <div className='firstmain'>
            <h1><IoBag /></h1>
            <Link to="/">
              <h1>MART</h1>
            </Link>
        </div>
        <div >
            <ul className='navitems'>
                <Link to="/">
                  <li>Home</li>
                </Link>
                <Link to="/shop-page">
                <li>Shop</li>
                </Link>

                <Link to="/cart">
                  <li>Cart</li>
                </Link>
                <div className='profile'>
                <li ><CgProfile /></li>
                </div>
                <div className='carticon'>
                <Link to="/cart">
                  <li><FaShoppingCart /></li>
                </Link>
                <span>{uniquecount}</span>   
                </div>
                
            </ul>
        </div>
    </div>
  )
}
