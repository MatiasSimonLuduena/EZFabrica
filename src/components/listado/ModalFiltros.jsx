/* eslint-disable react/prop-types */
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faX } from "@fortawesome/free-solid-svg-icons"

const ModalFiltros = ({ setModal }) => {
  return (
    <div className="listado_modal-filtros">
        <FontAwesomeIcon icon={faX} onClick={() => setModal(false)}/>
    </div>
  )
}

export default ModalFiltros