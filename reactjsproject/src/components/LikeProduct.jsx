import React from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { globalContext } from '../Context/Mycontext'
import { FaAlignLeft, FaPlus } from "react-icons/fa"
import '../cssfiles/Bigdiscount.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Addtocard } from '../Reduxtoolkit/Slice'
import { toast } from 'react-toastify'
export default function LikeProduct() {
    const { id } = useParams()
    const { discountData, data } = useContext(globalContext)
    const [banner, setBanner] = useState(null)
    
    const specialProduct = discountData.find((item) => item.id === id) ||
        data.find((item) => item.id === id)
    useEffect(() => {
        setBanner(specialProduct)
    }, [id])
    const concatination=discountData.concat(data)
    const filteredproducts=concatination.filter((item)=>{
        return(item.category===specialProduct.category && item.id !==specialProduct.id)
    })
    if (!banner) return <p></p>
    const dispatch=useDispatch()
  return (
    <div className='maindiscount'>
            <h1 className='bigdiscount' style={{marginRight:"800px"}}>You might also like</h1>
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
                                <button className='addbuton'onClick={()=>{dispatch(Addtocard({...item,quantity:1}));toast.success("Your Cart is add successfully")}}><FaPlus /></button>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>

  )
}
