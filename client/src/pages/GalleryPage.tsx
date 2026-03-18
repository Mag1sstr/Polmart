import Breadcrumbs from "../components/layout/Breadcrumbs";
import Footer from "../components/layout/Footer";
import Group from "../components/layout/Group";
import Header from "../components/layout/Header";
import SeoText from "../components/ui/SeoText";
import Skeleton from "../components/ui/Skeleton";
import { useGetGalleryQuery } from "../store/api";

function GalleryPage() {
  const { data: gallery, isLoading, isError, isSuccess } = useGetGalleryQuery();
  return (
    <>
      <Header />
      <Breadcrumbs />
      <Group>
        <h1 className="my-5 text-[32px] font-bold">Галерея</h1>
        {isLoading && <Skeleton cols={4} count={4} />}
        {isError && <p>Что-то пошло не так.</p>}
        {isSuccess && !gallery.length && (
          <p className="text-green-800">Галерея пока пуста.</p>
        )}
        <div className="grid grid-cols-4 gap-5">
          {gallery?.map((g) => (
            <article
              key={g._id}
              className="flex flex-col shadow-[0_0_10px_rgba(0,0,0,.25)] bg-white"
            >
              <div className="h-[206px]">
                <img
                  className="w-full h-full object-cover"
                  src={g.img}
                  alt=""
                />
              </div>
              <div className="p-7.5 flex-1 flex flex-col items-start">
                <p className="mb-1">{new Date(g.date).toLocaleDateString()}</p>
                <h2 className="mb-6.25 font-semibold">{g.title}</h2>
                <button className="w-full h-10 mt-auto border border-(--prime) transition-all text-(--prime) hover:bg-(--prime) hover:text-white cursor-pointer">
                  Подробнее
                </button>
              </div>
            </article>
          ))}
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
