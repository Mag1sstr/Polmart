import Breadcrumbs from "../components/layout/Breadcrumbs";
import Footer from "../components/layout/Footer";
import Group from "../components/layout/Group";
import Header from "../components/layout/Header";
import SeoText from "../components/ui/SeoText";
import { useGetNewsQuery } from "../store/api";
import { getImage } from "../utils/getImage";
import Skeleton from "../components/ui/Skeleton";

function NewsPage() {
  const { data: news, isLoading, isError } = useGetNewsQuery();
  return (
    <>
      <Header />
      <Breadcrumbs />
      <Group>
        <h1 className="text-[32px] font-bold my-5">Новости</h1>
        {isLoading && <Skeleton type="news" count={2} />}
        {isError && <p className="text-3xl">Новостей пока нет</p>}
        <div className=" flex flex-col gap-5">
          {!!news &&
            news?.map((n) => (
              <article
                key={n._id}
                className="flex shadow-[0_0_10px_rgba(0,0,0,.25)]"
              >
                <div className="max-w-[366px] w-full py-5 pl-5">
                  <img
                    className="w-full h-full object-contain"
                    src={getImage(n.images[0]) || ""}
                    alt="news-image"
                  />
                </div>
                <div className="flex-1 p-7.5 flex flex-col items-start">
                  <p>{new Date(n.publishedAt).toLocaleDateString()}</p>
                  <h2 className="text-[28px] mb-6.25 font-bold">{n.title}</h2>
                  <p className="mb-12.5">{n.text}</p>
                  <button className="bg-(--prime) text-white py-2.25 px-5.5 mt-auto cursor-pointer">
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

export default NewsPage;
