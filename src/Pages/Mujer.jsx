import banner_women from "../components/assets/banner_women.png";
import Cards from "../components/Cards/Cards";
import data from "../components/assets/all_product.js";

function Mujer() {
  console.log(data);
  const filtrado = data.filter((item) => item.id >= 1 && item.id <= 12);

  return (
    <>
      <div>
        <img src={banner_women} alt="banner-women" style={{ width: "100%" }} />
      </div>
      <Cards data={filtrado} titulo="Mujer" />
    </>
  );
}

export default Mujer;
