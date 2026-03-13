import Breadcrumbs from "../components/layout/Breadcrumbs";
import Footer from "../components/layout/Footer";
import Group from "../components/layout/Group";
import Header from "../components/layout/Header";
import ProductList from "../components/layout/ProductList";
import Skeleton from "../components/ui/Skeleton";
import { useAppSelector } from "../hooks";
import { useGetProductsQuery } from "../store/api";

function SearchPage() {
  const { search } = useAppSelector((state) => state.filters);
  const { data, isLoading, isError, isSuccess } = useGetProductsQuery(
    {
      title: search,
    },
    { skip: !search.length },
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Breadcrumbs />
      <Group className="flex-1" title="Поиск">
        {isError && <p>Что-то пошло не так.</p>}
        {isSuccess && !data.products.length && (
          <p className="text-[#008000]">
            К сожалению, на ваш поисковый запрос ничего не найдено.
          </p>
        )}
        {isLoading && <Skeleton cols={4} count={4} />}
        {data && <ProductList data={data} />}
      </Group>
      <Footer />
    </div>
  );
}

export default SearchPage;
