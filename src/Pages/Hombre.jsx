import banner_mens from "../components/assets/banner_mens.png";
import Cards from "../components/Cards/Cards";
import data from "../components/assets/all_product.js";

function Hombre() {
  /* array-a-recorrer +.+ metodo filter + (argumento) =>.dato-a-evaluar + operador y comparacion */
  const filtrado = data.filter((item) => item.id >= 13 && item.id <= 24);
  return (
    <>
      <div>
        <img src={banner_mens} alt="banner-mens" style={{ width: "100%" }} />
      </div>

      <Cards data={filtrado} titulo="Hombre" />
    </>
  );
}

export default Hombre;
