import { useState } from "react";
import "./NavBar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { Link } from "react-router-dom";

function NavBar() {
  //const [nombreDeVariable, function modificadorDeVariable] = useState(valorInicialDeLaVariable)
  //la convención es que la funcion modificadora de variable se le anteponga un set mas el nombre de la variable, en camelCase
  const [menu, setMenu] = useState("tienda");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" /> {/* img[src=logo]  => emmet */}
        <p>tienda en linea</p>
      </div>
      <ul className="nav-menu">
        {/* ()=> funcion flecha, funcion sin nombre*/}
        <li onClick={() => setMenu("tienda")}>
          <Link to="/" style={{ textDecoration: "none" }}>
            Tienda
            {/* sintaxis de operador ternario: evaluador ? siCumpleCondicion : siNoCumple */}
            {/* sintaxis del operador ADN: evaluador && siCumpleLaCondicion */}
            {menu === "tienda" ? <hr /> : <></>} {/* ternario */}
          </Link>
        </li>

        <li onClick={() => setMenu("hombre")}>
          <Link to="/hombre" style={{ textDecoration: "none" }}>
            Hombre
            {menu === "hombre" && <hr />} {/* ADN */}
          </Link>
        </li>
        <li onClick={() => setMenu("mujer")}>
          <Link to="/mujer" style={{ textDecoration: "none" }}>
            Mujer
            {menu === "mujer" && <hr />}
          </Link>
        </li>
        <li onClick={() => setMenu("niño")}>
          <Link to="/nino" style={{ textDecoration: "none" }}>
            Niño
            {menu === "niño" && <hr />}
          </Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        {/* div.nav-login-cart>button */}
        <button>Login</button>
        <img src={cart_icon} alt="cart-icon" />
      </div>
    </div>
  );
}

export default NavBar;
