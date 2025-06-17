import React from 'react'
import { useContext } from 'react'
import { globalContext } from '../Context/Mycontext'
import { FaPlus } from "react-icons/fa"
import "../cssfiles/Bigdiscount.css"
import { Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { Addtocard } from '../Reduxtoolkit/Slice'
export default function Bigdiscount() {
    const { discountData } = useContext(globalContext)
    const dispatch=useDispatch()
    return (
        <div className='maindiscount'>
            <h1 className='bigdiscount'>Big Discount</h1>
            <div className='dicount'>
                {discountData.map((item) => {
                    return (
                        <div className='discountcard'key={item.id}>
                            <div className='discount-round'>{item.discount}% off</div>
                            <br />
                                <Link to={`/${item.id}`}>
                                    <img src={item.imgUrl} alt="" className='newarrival'/>
                                </Link>
                            <div className='productname'>
                                <h1>{item.productName}</h1>
                                <p>⭐⭐⭐⭐⭐</p>
                            </div>
                            <br />
                            <div className='price-details'>
                                <span className='price'>${item.price}</span>
                                <button className='addbuton' onClick={()=>{dispatch(Addtocard({...item,quantity:1}));toast.success("Your Cart is add successfully")}}><FaPlus /></button>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}
