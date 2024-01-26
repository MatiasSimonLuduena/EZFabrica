import "./categorias.css"

import { Link } from "react-router-dom"

const Categorias = () => {
  return (
    <div className="categorias">
      <Link className="categorias-cat" to="/lista">
        <p>Todas las categorías</p>
        <img src="icons/categorias.png" alt="categorias"/>
      </Link>
      <Link className="categorias-prov" to="/lista">
        <p>Todos los proveedores</p>
        <img src="icons/caja.png" alt="proveedores"/>
      </Link>
    </div>
  )
}

export default Categorias