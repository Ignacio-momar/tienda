import Hero from "../components/Hero/Hero";
import tendencias from "../components/assets/data";
import Cards from "../components/Cards/Cards";
import NuevaColeccion from "../components/assets/new_collections";

function Tienda() {
  console.log(tendencias);
  return (
    <>
      <Hero />
      <Cards data={tendencias} titulo="tendencias" />
      <Cards data={NuevaColeccion} titulo="Nueva coleccion" />
      {/* data y titulo para pasar atributos */}
    </>
  );
}

export default Tienda;
