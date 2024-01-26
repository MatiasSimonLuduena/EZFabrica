import "./navbar.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping, faUser, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
  return (
    <nav>
      <span>LOGO</span>
      <div className="nav-search">
        <input type="text" placeholder="¿Qué estas buscando?"/>
        <FontAwesomeIcon icon={faMagnifyingGlass}/>
      </div>
      <div className="nav-menu_desktop">
        <FontAwesomeIcon icon={faCartShopping}/>
        <FontAwesomeIcon icon={faUser}/>
      </div>
    </nav>
  )
}

export default Navbar