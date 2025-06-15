import React from 'react'
import { IoBag } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import { Link} from 'react-router-dom';
import "../cssfiles/Header.css"
export default function Header() {
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

                <li>Cart</li>
                <div className='profile'>
                <li ><CgProfile /></li>
                </div>
                <div className='carticon'>
                <li><FaShoppingCart /></li>
                <span>0</span>   
                </div>
                
            </ul>
        </div>
    </div>
  )
}
