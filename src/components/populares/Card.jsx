/* eslint-disable react/prop-types */
const Card = ({ item }) => {
  return (
    <div className="card">
        <img src={item.img} alt={item.titulo} />
        <h5>{item.titulo}</h5>
        <p>{item.precio}</p>
    </div>
  )
}

export default Card