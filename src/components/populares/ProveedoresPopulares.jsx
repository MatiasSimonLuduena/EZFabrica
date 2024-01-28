import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// router dom
import { Link } from "react-router-dom"

// data
import { proveedores } from "../../data"

const ProveedoresPopulares = () => {
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
      <h3>Proveedores populares</h3>
      <div className="slider-npm">
        <Slider {...settings}>
          {proveedores.map(item => (
            <Link key={item.id} to={`/proveedor/${item.id}`}>
              <div className='card'>
                <img src={item.img} alt={item.nombre} />
                <h6>{item.nombre}</h6>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default ProveedoresPopulares