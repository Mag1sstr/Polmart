import { useState } from "react";
import Footer from "../components/layout/Footer";
import Group from "../components/layout/Group";
import Header from "../components/layout/Header";
import Pagination from "../components/layout/Pagination";
import ProductCard from "../components/ui/ProductCard";
import Breadcrumbs from "../components/layout/Breadcrumbs";

function CatalogProductsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <>
      <Header />
      <Breadcrumbs />
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
            <div className="grid grid-cols-3 gap-8.75">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
            <Pagination
              totalPages={10}
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
