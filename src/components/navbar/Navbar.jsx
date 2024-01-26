/* eslint-disable react/prop-types */
import "./navbar.css"

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping, faUser, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

// router dom
import { Link } from "react-router-dom"

const Navbar = ({ setDrawer }) => {
  return (
    <nav>
      <Link to="/">
        <span>LOGO</span>
      </Link>
      <div className="nav-search">
        <input type="text" placeholder="¿Qué estas buscando?"/>
        <FontAwesomeIcon icon={faMagnifyingGlass}/>
      </div>
      <div className="nav-menu_desktop">
        <Link to="/carrito">
          <FontAwesomeIcon icon={faCartShopping}/>
        </Link>
        <FontAwesomeIcon icon={faUser} onClick={() => setDrawer("entra")}/>
      </div>
    </nav>
  )
}

export default Navbar