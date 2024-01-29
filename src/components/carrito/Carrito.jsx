import "./carrito.css"

// redux
import { useSelector } from "react-redux"

const Carrito = () => {
  const state = useSelector(state => state.cart);

  function cantTotal() {
    let cant = 0;
    state.forEach(element => {
      cant += parseInt(element.cant);
    });
    return cant;
  }

  function provTotal() {
    const proveedores = new Set(state.map(proveedor => proveedor.proveedor));
    return proveedores.size;
  }

  function montoTotal() {
    let cant = 0;
    state.forEach(element => {
      cant += element.cant * element.precio;
    })
    return cant;
  }

  return (
    <div className="carrito">
      <div className="carrito_card1">
        {state.length === 0 ? (
          <p className="no-hay">
            No hay productos añadidos, vuelve atrás para descubrir productos.
          </p>
        ) : state.map(item => (<>
          <div key={item.id} className="carrito_card1-product">
            <img src={item.img} alt={item.titulo}/>
            <div className="product_div1">
              <h3>{item.titulo} ({item.cant})</h3>
              <div>
                <button>Eliminar</button>
                <a><span>Sobre el</span>producto</a>
                <a><span>Sobre el</span>proveedor</a>
              </div>
            </div>
            <div className="product_div2">
              <h4>${item.precio} c/u</h4>
              <h5>${item.precio * item.cant} total</h5>
            </div>
          </div>
          <div className="product-precios_movil">
            <h4>${item.precio} c/u</h4>
            <h5>${item.precio * item.cant} total</h5>
          </div>
          <div className="hr"></div>
        </>))}
      </div>
      <div className="carrito_card2">
        <h3>Resumen de la compra</h3>
        <div className="hr"></div>
        <div>
          <p>Productos</p>
          <span>{cantTotal()}</span>
        </div>
        <div>
          <p>Proveedores</p>
          <span>{provTotal()}</span>
        </div>
        <div>
          <h4>Total</h4>
          <h4>${montoTotal()}</h4>
        </div>
        <button>Comprar</button>
      </div>
    </div>
  )
}

export default Carrito