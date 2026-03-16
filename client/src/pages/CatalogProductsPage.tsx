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
import { useAppDispatch, useAppSelector } from "../hooks";
import { useDebounce } from "../hooks/useDebouce";
import DropFIlterItem from "../components/ui/DropFIlterItem";
import { Check } from "lucide-react";
import { Slider } from "@mui/material";
import { setPriceRange } from "../store/filtersSlice";

function CatalogProductsPage() {
  const dispatch = useAppDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const { categorySlug } = useParams();
  const { sortType } = useAppSelector((state) => state.filters);
  const [isNew, setIsNew] = useState(false);
  const [discount, setDiscount] = useState(false);

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
      discount,
      isNew,
    },
    { skip: !categorySlug, refetchOnMountOrArgChange: true },
  );
  const totalPages = data?.totalPages;

  // const handleChangePriceRange = (range) => {
  //   // dispatch(setPriceRange())
  // };

  console.log(discount, isNew);

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
              <div className="px-2 pt-5">
                <DropFIlterItem label="Цена">
                  <div className="px-2 pt-8">
                    <Slider
                      value={[0, 888]}
                      onChange={() => {}}
                      valueLabelDisplay="auto"
                      min={1}
                      max={9999}
                    />
                  </div>
                </DropFIlterItem>
                <DropFIlterItem label="Новинка">
                  <label
                    htmlFor="isNew"
                    className="flex items-center gap-2 cursor-pointer "
                  >
                    <input
                      onChange={(e) => setIsNew(e.currentTarget.checked)}
                      type="checkbox"
                      id="isNew"
                      className="peer sr-only"
                    />
                    <span className=" grid place-content-center transition-all w-5 h-5 rounded border border-zinc-400 peer-checked:bg-(--prime) peer-checked:border-(--prime)">
                      <Check color="#fff" size={16} />
                    </span>
                    Да
                  </label>
                </DropFIlterItem>
                <DropFIlterItem label="Скидка">
                  <label
                    htmlFor="dis"
                    className="flex items-center gap-2 cursor-pointer "
                  >
                    <input
                      onChange={(e) => setDiscount(e.currentTarget.checked)}
                      type="checkbox"
                      id="dis"
                      className="peer sr-only"
                    />
                    <span className=" grid place-content-center transition-all w-5 h-5 rounded border border-zinc-400 peer-checked:bg-(--prime) peer-checked:border-(--prime)">
                      <Check color="#fff" size={16} />
                    </span>
                    Да
                  </label>
                </DropFIlterItem>
              </div>
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
