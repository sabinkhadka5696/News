import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Data from '../Data';
import "./Slick.css"
import { Link } from 'react-router-dom';

export default function Slick() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    }
  return (
    <>
      <div className="slider-container">
      <Slider {...settings}className='mnb' >
          {Data.map((item)=>(
            <div className='card'>
            <div className='card-body'>
            <img src={item.linkImg} alt={item.title} className='w-100'></img>
            <h3><Link to={`/details/${item.id}`}>{item.title}</Link></h3>
            <p>{item.description}</p>

            </div>
          </div>
          ))}
            </Slider>
    </div>
    </>
  )
}
