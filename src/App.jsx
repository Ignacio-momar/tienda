import NavBar from "./components/NavBar/NavBar";
import Tienda from "./Pages/Tienda";
import Hombre from "./Pages/Hombre";
import Mujer from "./Pages/Mujer";
import Nino from "./Pages/Nino";
import { Routes, Route } from "react-router-dom";
import Producto from "./Pages/Producto.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Tienda />}></Route>
        <Route path="/mujer" element={<Mujer />}></Route>
        <Route path="/hombre" element={<Hombre />}></Route>
        <Route path="/nino" element={<Nino />}></Route>
        <Route path="/producto/:id" element={<Producto />}></Route>
      </Routes>
    </>
  );
}

export default App;
