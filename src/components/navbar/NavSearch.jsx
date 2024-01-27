import { useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

import ModalBuscador from "./ModalBuscador"

const NavSearch = () => {
  const [seleccionado, setSeleccionado] = useState(false);
  
  return (
    <div className="navbottom-search">
      <input type="text" placeholder="¿Qué estas buscando?"
        onFocus={() => setSeleccionado(true)}
        onBlur={() => setSeleccionado(false)}
      />
      <FontAwesomeIcon icon={faMagnifyingGlass}/>
      {seleccionado && <ModalBuscador/>}
    </div>
  )
}

export default NavSearch