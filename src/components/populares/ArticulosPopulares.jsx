/* eslint-disable react/prop-types */
import "./populares.css"


// components
import Card from "./Card"

// data
import { articulos } from "../../data"

const ArticulosPopulares = () => {
  return (
    <div className="populares">
      <h3>Articulos populares</h3>
      <div className="cards">
        {articulos.map(item => <Card key={item.id} item={item}/>)}
      </div>
    </div>
  )
}

export default ArticulosPopulares