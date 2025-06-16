import React, { useContext, useState } from 'react'
import {globalContext} from "../Context/Mycontext"
import { FaSearch } from "react-icons/fa"
import { FaPlus } from "react-icons/fa"
import { Link } from 'react-router-dom'
import "../cssfiles/ShopSearch.css"
export default function ShopSearch() {
    const {data}=useContext(globalContext)
    const [select,setSelect]=useState("Filter By Category")
    const [search,setSearch]=useState("")
    const filtered=data.filter((item)=>{
    const matchingCategory=select==="Filter By Category" ||item.category===select;
    const matchingSearch=item.productName.toLowerCase().includes(search.toLowerCase())
    return matchingCategory && matchingSearch
    })
    const handleChange=(e)=>{
        setSelect(e.target.value)
    }
    const unique=[...new Set(data.map((item)=>item.category))]
  return (
    <div >
        <div className='searchbar-container'>
            <div className='dropdown'>
                <select  className='dropdown-btn' value={select} onChange={handleChange}>
                  <option value="Filter By Category">Filter By Category</option> 
                  {unique.map((item)=>(
                    <option value={item} key={item}>{item.charAt(0).toUpperCase()+ item.slice(1)}</option>
                  ))} 
                </select>
                <div className='searchbar'>
                    <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='Search...' />
                    <span className='searchicon'><FaSearch /></span>
                </div>
            </div>
        </div>
        <div className='maindiscount'>
            {filtered.length===0 && search?( <h1 className='bigdiscount'>Product Not Found</h1>):
            (   <div className='dicount'>
                {filtered.map((item) => {
                    return (
                        <div className='discountcard'key={item.id}>
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
                                <button className='addbuton'><FaPlus /></button>
                            </div>
                        </div>
                    )
                })}
            </div>)
            }
        </div>
    </div>
  )
}
