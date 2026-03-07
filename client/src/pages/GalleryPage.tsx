import Breadcrumbs from "../components/layout/Breadcrumbs";
import Footer from "../components/layout/Footer";
import Group from "../components/layout/Group";
import Header from "../components/layout/Header";
import SeoText from "../components/ui/SeoText";

function GalleryPage() {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <Group>
        <h1 className="my-5 text-[32px] font-bold">Галерея</h1>
        <div className="grid grid-cols-4 gap-5">
          <article className="flex flex-col shadow-[0_0_10px_rgba(0,0,0,.25)]">
            <div className="h-[206px]">
              <img
                className="w-full h-full object-cover"
                src="https://polmart.kz/upload/iblock/c20/c20f9f45d05c78b0ccdc35b97029139a.jpg"
                alt=""
              />
            </div>
            <div className="p-7.5 flex-1 flex flex-col items-start">
              <p>12.22.22</p>
              <h2 className="mb-6.25">134 volke parquet</h2>
              <button className="w-full h-10 mt-auto border border-(--prime) text-(--prime)">
                Подробнее
              </button>
            </div>
          </article>
          <article className="flex flex-col shadow-[0_0_10px_rgba(0,0,0,.25)]">
            <div className="h-[206px]">
              <img
                className="w-full h-full object-cover"
                src="https://polmart.kz/upload/iblock/c20/c20f9f45d05c78b0ccdc35b97029139a.jpg"
                alt=""
              />
            </div>
            <div className="p-7.5 flex-1 flex flex-col items-start">
              <p>12.22.22</p>
              <h2 className="mb-6.25">134 volke parquet</h2>
              <button className="w-full h-10 mt-auto border border-(--prime) text-(--prime)">
                Подробнее
              </button>
            </div>
          </article>
          <article className="flex flex-col shadow-[0_0_10px_rgba(0,0,0,.25)]">
            <div className="h-[206px]">
              <img
                className="w-full h-full object-cover"
                src="https://polmart.kz/upload/iblock/c20/c20f9f45d05c78b0ccdc35b97029139a.jpg"
                alt=""
              />
            </div>
            <div className="p-7.5 flex-1 flex flex-col items-start">
              <p>12.22.22</p>
              <h2 className="mb-6.25">134 volke parquet</h2>
              <button className="w-full h-10 mt-auto border border-(--prime) text-(--prime)">
                Подробнее
              </button>
            </div>
          </article>
        </div>
      </Group>
      <Group>
        <SeoText />
      </Group>
      <Footer />
    </>
  );
}

export default GalleryPage;
