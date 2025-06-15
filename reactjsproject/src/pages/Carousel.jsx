import React from 'react'
import "../cssfiles/Carousel.css"
import { SliderData }from "../Data of project/Carousel"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Carousel() {
    const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };
  return (
    <div className='carouselwrap'>
        <Slider {...settings}>
            {SliderData.map((item)=>{
                return(
                <div className='carouselmain'>
                    <div className='carousel'>
                        <h1>{item.title.split(' ').slice(0,5).join(' ')} <br />
                        {item.title.split(' ').slice(5).join(' ')}</h1>
                        <p>{item.desc.split(' ').slice(0,10).join(' ')} <br />
                            {item.desc.split(' ').slice(10).join(' ')}
                        </p>
                        <br />
                        <button className='visit-btn'>Visit Collections</button>
                    </div>
                    <div className='carouselimg'>
                        <img src={item.cover} alt="" />
                    </div>
                </div>
                )
            })}

        </Slider>
    </div>
  )
}
