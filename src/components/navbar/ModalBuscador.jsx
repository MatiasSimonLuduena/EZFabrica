import { busquedaPopular, busquedaReciente } from "../../data"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClockRotateLeft, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

// data
import { Link } from "react-router-dom"

const ModalBuscador = () => {
  return (
    <div className="modal-buscador">
      {busquedaReciente.map((item, index) => (
        <Link key={index} className="m-buscador_card"
          to={`/lista/productos/${item}`}
        >
          <FontAwesomeIcon icon={faClockRotateLeft}/>
          <p>{item}</p>
        </Link>
      ))}
      <div className="hr"></div>
      {busquedaPopular.map((item, index) => (
        <Link key={index} className="m-buscador_card"
          to={`/lista/productos/${item}`}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass}/>
          <p>{item}</p>
        </Link>
      ))}
    </div>
  )
}

export default ModalBuscador