import Breadcrumbs from "../components/layout/Breadcrumbs";
import Footer from "../components/layout/Footer";
import Group from "../components/layout/Group";
import Header from "../components/layout/Header";

function SearchPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Breadcrumbs />
      <Group className="flex-1" title="Поиск">
        <p className="text-[#008000]">
          К сожалению, на ваш поисковый запрос ничего не найдено.
        </p>
      </Group>
      <Footer />
    </div>
  );
}

export default SearchPage;
