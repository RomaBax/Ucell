import { NavLink } from "react-router-dom"
import "./style.css"
const Navbar = () => {
  let Active = {
    opacity:"0.7"
  }
  return(
    <div
    style={{
      width: "100%",
      height: "40px",
      backgroundColor: "purple",
      position: "relative",
      display:"flex",
      justifyContent:"center"
    }}
  >
    <NavLink
      style={{}}
      className="nav"
      to={"/"}
      
    >
      Abonentlarga
    </NavLink>
    <NavLink
 className="nav"
      to={"/korporatsiya"}
    >
      Korporatsialarga
    </NavLink>
    <NavLink
 className="nav"
      to={"/hamkor"}
    >
      Hamkorlarga
    </NavLink>
    <a
 className="nav"
      href=""
    >
      Ma'lumotlarga
    </a>
    <a
 className="nav"
      href=""
    >
      Kompaniya yangiliklari
    </a>
    <a
 className="nav"
      href=""
    >
      Virtual qabulxona
    </a>
    <a
className="nav"
      href=""
    >
      Chiroyli raqamlar
    </a>
    <a
    className="nav"
      href=""
    >
      Bo'sh ish o'rni
    </a>
    <a
className="nav"
      href=""
    >
      Kabinet
    </a>
  </div>
  )
}

export default Navbar