import Breadcrumbs from "../components/layout/Breadcrumbs";
import Footer from "../components/layout/Footer";
import Group from "../components/layout/Group";
import Header from "../components/layout/Header";
import SeoText from "../components/ui/SeoText";

function NewsPage() {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <Group>
        <h1 className="text-[32px] font-bold my-5">Новости</h1>
        <p className="text-3xl">Новостей пока нет</p>
        <article className="flex shadow-[0_0_10px_rgba(0,0,0,.25)]">
          <div className="max-w-[366px] w-full py-5">
            <img
              className="w-full h-full object-contain"
              src="https://polmart.kz/upload/iblock/6ba/6ba38a52e41a9fe4362ac84e66d9e0fd.jpg"
              alt="news-image"
            />
          </div>
          <div className="flex-1 p-7.5 flex flex-col items-start">
            <p>18.04.2025</p>
            <h2>Völke new collection</h2>
            <p>
              Дорогие друзья! у нас отличная новость, пополнение в Völke! теперь
              у нас в коллекции "Völke PRO" появились каменные декоры такие как
              Гранит, Мрамор и тд ждем Вас по адресу Кошкарбаева 29 и Калдаякова
              29 салон POLMART
            </p>
            <button className="bg-(--prime) text-white py-2.25 px-5.5 mt-auto cursor-pointer">
              Подробнее
            </button>
          </div>
        </article>
      </Group>
      <Group>
        <SeoText />
      </Group>
      <Footer />
    </>
  );
}

export default NewsPage;
