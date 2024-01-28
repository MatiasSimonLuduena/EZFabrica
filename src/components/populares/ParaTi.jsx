// components
import { Link } from "react-router-dom"

// data
import { articulos } from "../../data"

const ParaTi = () => {
  return (
    <div className="populares">
      <h3>Segmentado para vos</h3>
      <div className="slider-npm para-ti">
        {articulos.map(item => (
          <Link key={item.id} className="para-ti-card" to={`/producto/${item.id}`}>
            <img src={item.img} alt={item.titulo}/>
            <h5>{item.titulo}</h5>
            <p>${item.precio} c/u</p>
            <h6>{item.proveedor}</h6>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ParaTi