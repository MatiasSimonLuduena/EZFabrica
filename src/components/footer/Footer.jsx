import "./footer.css"

const redes = [
    { img: "icons/whatsapp.png", url: "", titulo: "Whatsapp" },
    { img: "icons/instagram.png", url: "", titulo: "Instagram" },
    { img: "icons/facebook.png", url: "", titulo: "Facebook" }
]

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-div1">
            <h3>EZFABRICA</h3>
            <p>
                Indumentaria de calidad al mejor precio de toda Argentina, directamente desde las tiendas mayoristas de Flores, Once y la Salada, Ciudad de Buenos Aires, ¡todo sin salir de tu hogar!
            </p>
        </div>
        <div className="footer-div2">
            <h3>Redes sociales</h3>
            <div className="footer-redes">
                {redes.map((item, index) => (
                    <img key={index} src={item.img} alt={item.titulo}/>
                ))}
            </div>
            <h6>ezfabrica@gmail.com</h6>
        </div>
    </div>
  )
}

export default Footer