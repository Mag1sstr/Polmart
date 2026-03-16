import { useState } from "react";
import Footer from "../components/layout/Footer";
import Group from "../components/layout/Group";
import Header from "../components/layout/Header";
import Pagination from "../components/layout/Pagination";
import ProductCard from "../components/ui/ProductCard";
import Breadcrumbs from "../components/layout/Breadcrumbs";
import { useGetProductsQuery } from "../store/api";
import { useParams } from "react-router-dom";
import Skeleton from "../components/ui/Skeleton";
import { useAppSelector } from "../hooks";
import { useDebounce } from "../hooks/useDebouce";

function CatalogProductsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const { categorySlug } = useParams();
  const { sortType } = useAppSelector((state) => state.filters);
  const {
    data = { products: [], totalPages: 0, totalProducts: 0, currentPage: 1 },
    isLoading,
    isSuccess,
  } = useGetProductsQuery(
    {
      category: categorySlug,
      page: currentPage,
      size: 6,
      sort: useDebounce(sortType),
    },
    { skip: !categorySlug, refetchOnMountOrArgChange: true },
  );
  const totalPages = data?.totalPages;

  // const filteredProducts = sortType
  //   ? [...data.products].sort((a, b) => {
  //       switch (sortType) {
  //         case "asc":
  //           return a.price - b.price;
  //         case "desc":
  //           return b.price - a.price;
  //         case "discountAsc":
  //           return a.discount - b.discount;
  //         case "discountDesc":
  //           return b.discount - a.discount;
  //         case "name":
  //           return a.title.localeCompare(b.title);
  //         default:
  //           return a.price - b.price;
  //       }
  //     })
  //   : data.products;

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
            {isSuccess && !data.products.length && (
              <p>Нет продуктов этой категории.</p>
            )}

            <div className="grid grid-cols-3 gap-8.75">
              {data.products?.map((product) => (
                <ProductCard key={product._id} {...product} />
              ))}
            </div>
            <Pagination
              totalPages={totalPages || 0}
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
