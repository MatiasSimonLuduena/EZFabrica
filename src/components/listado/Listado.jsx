import "./listado.css"

// components
import ModalFiltros from "./ModalFiltros"

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilter } from "@fortawesome/free-solid-svg-icons"

import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';

// data (se deberá hacer una peticion segmentando solo a lo buscado, no traer todos los datos)
import { articulos, proveedores } from "../../data"

const Listado = () => {
  const { type, text } = useParams();
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (type === "productos") {
      if (text === "all") {
        setData(articulos);
      } else {
        setData(articulos.filter(p => p.titulo.toLowerCase().includes(text.toLowerCase())));
      }
    } else {
      if (text === "all") {
        setData(proveedores);
      } else {
        setData(proveedores.filter(p => p.titulo.toLowerCase().includes(text.toLowerCase())));
      }
    }
  }, [type, text]);

  return (<>
    {modal && <ModalFiltros setModal={setModal}/>}
    <div className="listado">
      <div className="listado_divmovil" onClick={() => setModal(true)}>
        <h3>Filtros</h3>
        <FontAwesomeIcon icon={faFilter}/>
      </div>
      <div className="listado_div1"></div>
      <div className="listado_div2">
        {data.map(item => (
          <div key={item.id} className="listado_card">
            <img src={item.img} alt={item.titulo} />
            <h3>{item.titulo}</h3>
            <p>${item.precio}</p>
            <h4>{item.proveedor}</h4>
          </div>
        ))}
      </div>
    </div>
  </>)
}

export default Listado