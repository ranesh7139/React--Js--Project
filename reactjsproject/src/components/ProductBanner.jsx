import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { globalContext } from '../Context/Mycontext'
import { useEffect } from 'react'
import "../cssfiles/ProductBanner.css"

export default function ProductBanner() {
    const { id } = useParams()
    const { discountData, data } = useContext(globalContext)
    const [banner, setBanner] = useState(null)
    const specialProduct = discountData.find((item) => item.id === id) ||
        data.find((item) => item.id === id)
    useEffect(() => {
        setBanner(specialProduct)
    }, [id])
    if (!banner) return <p>Loading</p>
    return (
        <div className='main-banner'>
            <div className='bannertitle'>
                <h1>{banner.productName}</h1>
            </div>
            <div className='banner-info'>
                <div className='product-image'>
                    <img src={banner.imgUrl} alt={banner.productName} />
                </div>
                <div className='productname'>
                    <h2>{banner.productName}</h2>
                    <div className='product-rating'>
                        <span>⭐⭐⭐⭐⭐</span>
                        <p>{banner.avgRating}ratings</p>
                    </div>
                    <div className='product-category'>
                        <p className='prouct-price'>${banner.price}</p>
                        <p className='productcategory'>category:{banner.category}</p>
                    </div>
                    <p className='short-decription'>{banner.shortDesc}</p>
                    <br />
                    <input type="number" placeholder='1' className='product-input' />
                    <br /> <br /> <br />
                    <div className='addtocartbutton'>
                    <button>Add to card</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
