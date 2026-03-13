import Breadcrumbs from "../components/layout/Breadcrumbs";
import Footer from "../components/layout/Footer";
import Group from "../components/layout/Group";
import Header from "../components/layout/Header";

function SearchPage() {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <Group title="Поиск">
        <p className="text-[#008000]">
          К сожалению, на ваш поисковый запрос ничего не найдено.
        </p>
      </Group>
      <Footer />
    </>
  );
}

export default SearchPage;
