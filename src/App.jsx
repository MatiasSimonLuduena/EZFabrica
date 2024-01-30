// router dom
import { Routes, Route, Navigate } from "react-router-dom"

// components
import Navbar from "./components/navbar/Navbar"
import NavSearch from "./components/navbar/NavSearch"
import Categorias from "./components/categorias/Categorias"
import ArticulosPopulares from "./components/populares/ArticulosPopulares"
import ProveedoresPopulares from "./components/populares/ProveedoresPopulares"
import ParaTi from "./components/populares/ParaTi"
import Footer from "./components/footer/Footer"

// Páginas
import Listado from "./components/listado/Listado"
import Carrito from "./components/carrito/Carrito"
import Producto from "./components/producto/Producto"
import Proveedor from "./components/proveedor/Proveedor"

function App() {

  return (
    <>
      <Navbar/>
      <NavSearch/>
      <div className="ocupa-lugar-delnav"></div>
      <Routes>
        <Route path="/" element={
          <div className="container">
            <Categorias/>
            <ArticulosPopulares/>
            <ProveedoresPopulares/>
            <ParaTi/>
          </div>
        }/>
        <Route path="/lista/:type/:text" element={<Listado/>}/>
        <Route path="/carrito" element={<Carrito/>}/>
        <Route path="/producto/:id" element={<Producto/>}/>
        <Route path="/proveedor/:id" element={<Proveedor/>}/>
        <Route path="/*" element={<Navigate to="/"/>}/>
      </Routes>
      <Footer/>

      {/*
        con proveedores => 
          data y paginas ver todos las categoria, proveedor productos
          bugs carrito
          buscador, lista de todos los ... , filtros funcional
        <br />

        header: mensaje de valor y llamadas a la accion
        secciones:
          pago seguro, plataformas.
          envios y tiempo, empresa y seguimiento.
          ?garantia y reembolso.
          cantidad de ofertas y categorias.
          ?comparacion de precios con otras tiendas, margen de ganancias.
          ?negociacion con el proveedor.
        <br />

        Optimizar codigo y hacerlo mas legible
      */}
    </>
  )
}

export default App
