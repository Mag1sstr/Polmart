import Footer from "../components/layout/Footer";
import Group from "../components/layout/Group";
import Header from "../components/layout/Header";
import ProductList from "../components/layout/ProductList";
import Slider from "../components/layout/Slider";
import SeoText from "../components/ui/SeoText";

function HomePage() {
  return (
    <>
      <Header />
      <Slider />
      <Group title="Акции" children={<ProductList />} />
      <Group
        children={
          <img
            src="https://polmart.kz/upload/iblock/36c/36c5fddf5484130c1972d9d29e105180.png"
            alt="icon"
          />
        }
      />
      <Group children={<SeoText />} />

      <Footer />
    </>
  );
}

export default HomePage;
