import "./producto.css"
import { useState } from "react"

// router dom
import { useParams } from "react-router-dom"

// redux
import { useDispatch, useSelector } from "react-redux"

// data
import { articulos } from "../../data"

const Producto = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const state = useSelector(state => state.cart);
  const [errors, setErrors] = useState({ esta: false });
  const [cant, setCant] = useState(1);

  const producto = articulos.filter(item => item.id == id);
  const estaEnCarrito = state.some(obj => obj.id == id);

  function addToCart() {
    if (estaEnCarrito) {
      setErrors({...errors, esta: true});
      return;
    }
    producto[0].cant = cant;
    dispatch({ type: "ADD", payload: producto[0] });
  }

  return (
    <div className="producto">
      <div className="producto-card">
        <div className="producto-card-top">
          <img src={producto[0].img} alt={producto[0].titulo}/>
          <div className="producto-card-top_vid1">
            <h4>{producto[0].titulo}</h4>
            <p className="precio">${producto[0].precio} por unidad</p>
            <div>
              <label htmlFor="cantidad">Cantidad:</label>
              <input type="number" id="cantidad" defaultValue={cant}
                value={cant > 0 ? cant : 1} onChange={e => setCant(e.target.value)}
              />
            </div>
            <button onClick={addToCart}>Agregar al carrito</button>
            {errors.esta && <p className="error">
              Este producto ya está en el carrito, puedes entrar para modificarlo o eliminarlo
            </p>}
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