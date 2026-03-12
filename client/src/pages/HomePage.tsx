import { useEffect, useState } from "react";
import Footer from "../components/layout/Footer";
import Group from "../components/layout/Group";
import Header from "../components/layout/Header";
import ProductList from "../components/layout/ProductList";
import Slider from "../components/layout/Slider";
import SeoText from "../components/ui/SeoText";
import ConsultModal from "../components/modals/ConsultModal";
import { useGetProductsQuery } from "../store/api";

function HomePage() {
  const [openConsult, setOpenConsult] = useState(false);

  const { data } = useGetProductsQuery({
    size: 4,
  });

  useEffect(() => {
    const wasShown = sessionStorage.getItem("consultShown");
    if (wasShown) return;

    const handleScroll = () => {
      if (window.scrollY > 950) {
        setOpenConsult(true);
        sessionStorage.setItem("consultShown", "true");
        window.removeEventListener("scroll", handleScroll);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [openConsult]);

  return (
    <>
      <ConsultModal open={openConsult} setOpen={setOpenConsult} />
      <Header />
      <Slider />
      <Group title="Новое" children={<ProductList data={data} />} />
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
