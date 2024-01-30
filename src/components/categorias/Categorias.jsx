import "./categorias.css"

import { Link } from "react-router-dom"

const Categorias = () => {
  return (
    <div className="categorias">
      <Link className="categorias-cat">
        <p>Todas las categorías</p>
        <img src="icons/categorias.png" alt="categorias"/>
      </Link>
      <Link className="categorias-prov">
        <p>Todos los proveedores</p>
        <img src="icons/caja.png" alt="proveedores"/>
      </Link>
    </div>
  )
}

export default Categorias