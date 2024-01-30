/* eslint-disable react/prop-types */
import "./drawer.css"

const Drawer = ({ drawer, setDrawer }) => {
  return (
    <div className={`container-drawer ${
        drawer === "entra" && "pointer-events"
      }`} onClick={() => setDrawer("sale")}>
      <div className={`drawer ${
        drawer === "entra" ? "drawer-animation_entra" :
        drawer === "sale" ? "drawer-animation_sale" : ""
      }`} onClick={e => e.stopPropagation()}></div>
    </div>
  )
}

export default Drawer