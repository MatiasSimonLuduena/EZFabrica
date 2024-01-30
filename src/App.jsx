import { useState } from "react"

// router dom
import { Routes, Route, Navigate } from "react-router-dom"

// components
import Navbar from "./components/navbar/Navbar"
import NavSearch from "./components/navbar/NavSearch"
import Drawer from "./components/drawer/Drawer"
import Categorias from "./components/categorias/Categorias"
import ArticulosPopulares from "./components/populares/ArticulosPopulares"
import ProveedoresPopulares from "./components/populares/ProveedoresPopulares"
import ParaTi from "./components/populares/ParaTi"
import Listado from "./components/listado/Listado"
import Carrito from "./components/carrito/Carrito"
import Producto from "./components/producto/Producto"
import Proveedor from "./components/proveedor/Proveedor"

function App() {
  const [drawer, setDrawer] = useState(null);

  return (
    <>
      <Drawer drawer={drawer} setDrawer={setDrawer}/>
      <Navbar setDrawer={setDrawer}/>
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

      {/*
        con proveedores => 
          data y paginas ver todos las categoria, proveedor productos
          bugs carrito
          buscador, lista de todos los ... , filtros funcional
        <br />

        sesion y botones
        <br />
        un footer y un header
        <br />
        resto de secciones como sobre nosotros, contacto, etc.
        <br />
        Optimizar codigo y hacerlo mas legible
      */}
    </>
  )
}

export default App
