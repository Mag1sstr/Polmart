import { useState } from "react";
import Footer from "../components/layout/Footer";
import Group from "../components/layout/Group";
import Header from "../components/layout/Header";
import Pagination from "../components/layout/Pagination";
import ProductCard from "../components/ui/ProductCard";
import Breadcrumbs from "../components/layout/Breadcrumbs";
import { useGetProductsQuery } from "../store/api";
import { data, useParams } from "react-router-dom";
import Loader from "../components/ui/Loader";
import Skeleton from "../components/ui/Skeleton";
import { useAppSelector } from "../hooks";

function CatalogProductsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const { categorySlug } = useParams();
  const { sortType } = useAppSelector((state) => state.filters);
  const {
    data: products = [],
    isLoading,
    isSuccess,
  } = useGetProductsQuery(
    {
      category: categorySlug,
    },
    { skip: !categorySlug, refetchOnMountOrArgChange: true },
  );
  const pageSize = 6;
  const totalPages = products ? Math.ceil(products.length / pageSize) : 0;

  const filteredProducts = sortType
    ? [...products].sort((a, b) => {
        switch (sortType) {
          case "asc":
            return a.price - b.price;
          case "desc":
            return b.price - a.price;
          case "discountAsc":
            return a.discount - b.discount;
          case "discountDesc":
            return b.discount - a.discount;
          case "name":
            return a.title.localeCompare(b.title);
          default:
            return a.price - b.price;
        }
      })
    : products;

  return (
    <>
      <Header />
      <Breadcrumbs sort />
      <Group>
        <h1 className="py-5 text-[2rem] font-bold">Ламинат</h1>

        <div className="flex gap-10">
          <div className="w-[260px] ">
            <div className="rounded-[5px] overflow-hidden bg-[#eefcea] pb-5">
              <h2 className="bg-white p-2 font-medium">Фильтры</h2>
              <div className=" flex flex-col gap-5"></div>
            </div>
          </div>
          <div className="flex-1 ">
            {isLoading && <Skeleton />}
            {isSuccess && !products.length && (
              <p>Нет продуктов этой категории.</p>
            )}

            <div className="grid grid-cols-3 gap-8.75">
              {filteredProducts?.map((product) => (
                <ProductCard key={product._id} {...product} />
              ))}
            </div>
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </Group>
      <Footer />
    </>
  );
}

export default CatalogProductsPage;
