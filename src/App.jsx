import { useState } from "react"

// router dom
import { Routes, Route, Navigate } from "react-router-dom"

// components
import Navbar from "./components/navbar/Navbar"
import NavSearch from "./components/navbar/NavSearch"
import Drawer from "./components/drawer/Drawer"
import ModalBuscador from "./components/modal/ModalBuscador"
import Categorias from "./components/categorias/Categorias"
import ArticulosPopulares from "./components/populares/ArticulosPopulares"
import ProveedoresPopulares from "./components/populares/ProveedoresPopulares"
import ParaTi from "./components/paraTi/ParaTi"
import Listado from "./components/listado/Listado"
import Carrito from "./components/carrito/Carrito"

function App() {
  const [drawer, setDrawer] = useState(null);

  return (
    <>
      <ModalBuscador/>
      <Drawer drawer={drawer} setDrawer={setDrawer}/>
      <Navbar setDrawer={setDrawer}/>
      <NavSearch/>
      <Routes>
        <Route path="/" element={
          <div className="container">
            <Categorias/>
            <ArticulosPopulares/>
            <ProveedoresPopulares/>
            <ParaTi/>
          </div>
        }/>
        <Route path="/lista" element={<Listado/>}/>
        <Route path="/carrito" element={<Carrito/>}/>
        <Route path="/*" element={<Navigate to="/"/>}/>
      </Routes>
    </>
  )
}

export default App
