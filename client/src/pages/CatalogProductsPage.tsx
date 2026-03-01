import Footer from "../components/layout/Footer";
import Group from "../components/layout/Group";
import Header from "../components/layout/Header";

function CatalogProductsPage() {
  return (
    <>
      <Header />
      <Group>
        <h1 className="py-5">Ламинат</h1>

        <div className="flex gap-10">
          <div className="w-[260px]"></div>
          <div className="flex-1"></div>
        </div>
      </Group>
      <Footer />
    </>
  );
}

export default CatalogProductsPage;
