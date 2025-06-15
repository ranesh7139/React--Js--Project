import React from "react"
import { useParams } from "react-router-dom"
import { useContext } from "react"
import { useState } from "react"
import { globalContext } from "../Context/Mycontext"
import { useEffect } from "react"
import "../cssfiles/DescriptionToggel.css"
export default function DescriptionToggel() {
    const { id } = useParams()
    const { discountData, data } = useContext(globalContext)
    const [banner, setBanner] = useState(null)
    const [toggel,setToggel]=useState("description")
    const handleClick=()=>{
        setToggel("description")
    }
    const handleReviews=()=>{
        setToggel("reviews")
    }
    const specialProduct = discountData.find((item) => item.id === id) ||
        data.find((item) => item.id === id)
    useEffect(() => {
        setBanner(specialProduct)
    }, [id])
    if (!banner) return <p></p>
  return (
    <div>
        <div className="reviews">
            <button onClick={handleClick}>Description</button>
            <button onClick={handleReviews}>Reviews({specialProduct && specialProduct.reviews?specialProduct.reviews.length:0})</button>
        </div>
        {toggel==="description" && 
        <h1 className="descri-lorem">{specialProduct.description}</h1>}
        {toggel==="reviews" &&
        <div>
            {specialProduct.reviews.map((item,index)=>{
                return(
                    <div className="rating">
                    <p>Ranesh</p>
                    <h3 className="goldcolor">{item.rating}  (ratings)</h3>
                    <h2>{item.text}</h2>
                    </div>
                )
            })}
            </div>}
    </div>
  )
}
