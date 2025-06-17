import React, { useContext } from 'react'
import { FaPlus } from "react-icons/fa"
import { globalContext } from '../Context/Mycontext'
import {Link} from "react-router-dom"
import { useDispatch } from 'react-redux'
import { Addtocard } from '../Reduxtoolkit/Slice'
import { toast } from 'react-toastify'
export default function Bestsales() {
    const {data}=useContext(globalContext)
    const filteredproducts = data.filter(item => item.category === 'sofa')
    const dispatch=useDispatch()
    return (
        <div className='maindiscount'>
            <h1 className='bigdiscount'>Best Sales</h1>
            <div className='dicount'>
                {filteredproducts.map((item) => {
                    return (
                        <div className='discountcard' key={item.id}>
                            <Link to={`/${item.id}`}>
                                <img src={item.imgUrl} alt="" className='newarrival' />
                            </Link>
                            <div className='productname'>
                                <h1>{item.productName}</h1>
                                <p>⭐⭐⭐⭐⭐</p>
                            </div>
                            <br />
                            <div className='price-details'>
                                <span className='price'>${item.price}</span>
                                <button className='addbuton'onClick={()=>{dispatch(Addtocard({...item,quantity:1}));toast.success("Your cart is Added Successfully")}}><FaPlus /></button>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>

    )
}
