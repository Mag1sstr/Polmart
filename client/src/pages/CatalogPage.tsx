import { Link } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Group from "../components/layout/Group";
import Header from "../components/layout/Header";
import { ROUTES } from "../utils/routes";

function CatalogPage() {
  return (
    <>
      <Header />
      <Group>
        <h1 className="py-5 text-[2rem] font-bold">Каталог</h1>
        <ul className="grid grid-cols-3 gap-8.75 text-white text-[48px]">
          <Link to={ROUTES.CATALOG_PRODUCTS("1")}>
            <li className="relative aspect-[409/307] rounded-[5px] border-10 border-[#73b211] overflow-hidden cursor-pointer transition-all bg-gray-500  hover:[&>img]:scale-110 hover:[&>h2]:text-[#73b211]">
              <img
                className="absolute inset-0 object-cover transition-all duration-350"
                src="https://polmart.kz/local/templates/besser/assets/build/img/laminate.png"
                alt="bg-image"
              />
              <div className="bg-[#4e4e4e80] absolute inset-0"></div>
              <h2 className="absolute inset-0 grid place-content-center transition-all">
                Ламинат
              </h2>
            </li>
          </Link>
        </ul>
      </Group>
      <Footer />
    </>
  );
}

export default CatalogPage;
