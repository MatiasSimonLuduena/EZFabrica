/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const Card = ({ item }) => {
  return (
    <Link to="/producto">
      <div className="card">
        <img src={item.img} alt={item.titulo} />
        <h5>{item.titulo}</h5>
        <p>${item.precio} c/u</p>
        <h6>{item.proveedor}</h6>
      </div>
    </Link>
  )
}

export default Card