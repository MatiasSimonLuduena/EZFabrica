/* eslint-disable react/prop-types */
import "./populares.css"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// components
import Card from "./Card"

// data
import { articulos } from "../../data"

const ArticulosPopulares = () => {
  const settings = {
    dots: false,
    speed: 500,
    slidesToScroll: 2,
    slidesToShow: 6,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="populares">
      <h3>Articulos populares</h3>
      <div className="slider-npm">
        <Slider {...settings}>
          {articulos.map(item => <Card key={item.id} item={item}/>)}
        </Slider>
      </div>
    </div>
  )
}

export default ArticulosPopulares