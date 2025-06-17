import React from 'react'
import "../cssfiles/Cart.css"
import { useDispatch, useSelector } from 'react-redux'
import { FaPlus, FaMinus, FaTimes } from 'react-icons/fa'
import {Removefromcart,IncreaseQty,DecreaseQty} from "../Reduxtoolkit/Slice"
export default function Cart() {
const items = useSelector(state => state.cartItems.cart)

    const dispatch=useDispatch()
    const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity,0)
  return (
     <div className="cart-page">
      {items.length === 0 ? (
         <div className=" container px-4 gap-3  flex items-center py-8 border-gray-50 border-2 rounded-lg">
         <div className=" w-235 h-50 bg-white">
             <h1 className="font-bold p-4 text-2xl text-gray-900 ">
               No items are add in cart
             </h1>
           </div>

          <div className="cart-summary">
            <h3>Cart Summary</h3>
            <hr />
            <p>Total Price :</p>
            <h2>${totalPrice.toFixed(2)}</h2>
          </div>
        </div> 
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {items.map((item, index) => (
              <div className="cart-item-box" key={index}>
                <img src={item.imgUrl} alt={item.productName} className="product-img" />
                <div className="item-details">
                  <h3>{item.productName}</h3>
                  <div className='amount-details'>
                  <p>${item.price.toFixed(2)} X {item.quantity}</p>
                  <h4>${(item.price * item.quantity).toFixed(2)}</h4>
                  </div>
                </div>
                <div className="qty-controls">
                  <button onClick={() => dispatch(IncreaseQty(item))}><FaPlus /></button>
                  <button onClick={() => dispatch(DecreaseQty(item))}><FaMinus /></button>
                </div>
                <button className="remove-btn" onClick={() => dispatch(Removefromcart(item))}>
                  <FaTimes />
                </button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Cart Summary</h3>
            <hr />
            <p>Total Price :</p>
            <h2>${totalPrice.toFixed(2)}</h2>
          </div>
        </div>
     )}
    </div>           
  )
}
