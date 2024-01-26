// router dom
import { Routes, Route, Navigate } from "react-router-dom"

// components
import Navbar from "./components/navbar/Navbar"
import NavSearch from "./components/navbar/NavSearch"
import Categorias from "./components/categorias/Categorias"
import ArticulosPopulares from "./components/populares/ArticulosPopulares"
import ProveedoresPopulares from "./components/populares/ProveedoresPopulares"
import ParaTi from "./components/paraTi/ParaTi"
import Listado from "./components/listado/Listado"

function App() {
  return (
    <>
      <Navbar/>
      <NavSearch/>
      <Routes>
        <Route path="/" element={
          <>
            <Categorias/>
            <ArticulosPopulares/>
            <ProveedoresPopulares/>
            <ParaTi/>
          </>
        }/>
        <Route path="/lista" element={<Listado/>}/>
        <Route path="/*" element={<Navigate to="/"/>}/>
      </Routes>
    </>
  )
}

export default App
