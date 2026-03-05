import { Link } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Group from "../components/layout/Group";
import Header from "../components/layout/Header";
import { ROUTES } from "../utils/routes";
import { useGetCategoriesQuery } from "../store/api";
import Loader from "../components/ui/Loader";
import Breadcrumbs from "../components/layout/Breadcrumbs";

function CatalogPage() {
  const { data: categories, isError, isLoading } = useGetCategoriesQuery();
  return (
    <>
      <Header />
      <Breadcrumbs />
      <Group>
        <h1 className="py-5 text-[2rem] font-bold">Каталог</h1>
        {isError && <p className="text-3xl">Что то пошло не так</p>}
        {isLoading && <Loader />}
        <ul className="grid grid-cols-3 gap-8.75 text-white text-[48px]">
          {categories?.map(({ _id, img, name, slug }) => (
            <Link key={_id} to={ROUTES.CATALOG_PRODUCTS(slug)}>
              <li className="relative aspect-[409/307] rounded-[5px] border-10 border-[#73b211] overflow-hidden cursor-pointer transition-all bg-gray-500  hover:[&>img]:scale-110 hover:[&>h2]:text-[#73b211]">
                <img
                  className="absolute inset-0 object-cover transition-all duration-350"
                  src={img}
                  alt="bg-image"
                />
                <div className="bg-[#4e4e4e80] absolute inset-0"></div>
                <h2 className="absolute inset-0 grid place-content-center transition-all">
                  {name}
                </h2>
              </li>
            </Link>
          ))}
        </ul>
      </Group>
      <Footer />
    </>
  );
}

export default CatalogPage;
