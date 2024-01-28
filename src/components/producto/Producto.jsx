import "./producto.css"

import { useParams } from "react-router-dom"

// data
import { articulos } from "../../data"

const Producto = () => {
  const { id } = useParams();

  const producto = articulos.filter(item => item.id == id)

  return (
    <div className="producto">
      <div className="producto-card">
        <div className="producto-card-top">
          <img src={producto[0].img} alt={producto[0].titulo}/>
          <div className="producto-card-top_vid1">
            <h4>{producto[0].titulo}</h4>
            <p>${producto[0].precio} por unidad</p>
            <div>
              <label htmlFor="cantidad">Cantidad:</label>
              <input type="number" id="cantidad" defaultValue={1}/>
            </div>
            <button>Agregar al carrito</button>
            <h5>Caracteristicas:</h5>
            <p className="producto-card-top_vid1_description">{producto[0].descripcion}</p>
            <h6>{producto[0].proveedor} (clickeable)</h6>
          </div>
        </div>
        <div className="hr"></div>
        <div className="producto-card-mid">
          <h4>Productos del mismo proveedor</h4>
          <p>De mas cosas ...</p>
        </div>
      </div>
    </div>
  )
}

export default Producto