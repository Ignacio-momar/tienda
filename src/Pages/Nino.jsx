import banner_kids from "../components/assets/banner_kids.png";
import Cards from "../components/Cards/Cards";
import data from "../components/assets/all_product.js";
function Nino() {
  const filtrado = data.filter((item) => item.id >= 25 && item.id <= 36);
  return (
    <>
      <div>
        <img src={banner_kids} alt="banner-kids" style={{ width: "100%" }} />
      </div>
      <Cards data={filtrado} titulo="Niño" />
    </>
  );
}

export default Nino;
