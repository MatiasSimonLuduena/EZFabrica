/* eslint-disable react/prop-types */
import "./navbar.css"
import { useState } from "react"

// components
import ModalBuscador from "./ModalBuscador"

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping, faUser, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

// router dom
import { Link } from "react-router-dom"

// redux
import { useSelector } from "react-redux";

const Navbar = ({ setDrawer }) => {
  const [seleccionado, setSeleccionado] = useState(false);
  const state = useSelector(state => state.cart)

  return (
    <nav>
      <Link to="/">
        <span>LOGO</span>
      </Link>
      <div className="nav-search">
        <input type="text" placeholder="¿Qué estas buscando?"
          onFocus={() => setSeleccionado(true)}
          onBlur={() => setSeleccionado(false)}
        />
        <FontAwesomeIcon icon={faMagnifyingGlass}/>
        {seleccionado && <ModalBuscador/>}
      </div>
      <div className="nav-menu_desktop">
        <Link to="/carrito">
          <FontAwesomeIcon icon={faCartShopping}/>
          <span className="nav-menu_span">{state.length}</span>
        </Link>
        <FontAwesomeIcon icon={faUser} onClick={() => setDrawer("entra")}/>
      </div>
    </nav>
  )
}

export default Navbar