import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

const NavSearch = () => {
  return (
    <div className="navbottom-search">
        <input type="text" placeholder="¿Qué estas buscando?"/>
        <FontAwesomeIcon icon={faMagnifyingGlass}/>
    </div>
  )
}

export default NavSearch