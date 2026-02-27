import Footer from "../components/layout/Footer";
import Group from "../components/layout/Group";
import Header from "../components/layout/Header";

function SingleProductPage() {
  return (
    <>
      <Header />
      <section>
        <Group>
          <h1 className="text-[2rem] my-5 font-bold">
            SPC VöLKE PRO Stone TERRA YFS08
          </h1>
          <div className="flex gap-5">
            <div className="max-w-165 w-full">
              <div className="w-full h-auto mb-5">
                <img
                  className="w-full h-full"
                  src="https://polmart.kz/upload/resize_cache/iblock/180/660_371_1/180c18146d8e33e325d048de4ca61410.jpg"
                  alt="main-img"
                />
              </div>
              <div className="flex w-full gap-1">
                <img
                  className="max-w-41.25 w-full h-[92px]"
                  src="https://polmart.kz/upload/resize_cache/iblock/180/660_371_1/180c18146d8e33e325d048de4ca61410.jpg"
                  alt="main-img"
                />
                <img
                  className="max-w-41.25 w-full h-[92px]"
                  src="https://polmart.kz/upload/resize_cache/iblock/180/660_371_1/180c18146d8e33e325d048de4ca61410.jpg"
                  alt="main-img"
                />
                <img
                  className="max-w-41.25 w-full h-[92px]"
                  src="https://polmart.kz/upload/resize_cache/iblock/180/660_371_1/180c18146d8e33e325d048de4ca61410.jpg"
                  alt="main-img"
                />
                <img
                  className="max-w-41.25 w-full h-[92px]"
                  src="https://polmart.kz/upload/resize_cache/iblock/180/660_371_1/180c18146d8e33e325d048de4ca61410.jpg"
                  alt="main-img"
                />
              </div>
            </div>
            <div className="flex-1">
              <ul className="flex flex-col gap-1.25 text-[17.2px] mb-5">
                <li>
                  <b>Производитель: </b>
                  VöLKE
                </li>
                <li>
                  <b>Коллекция: </b>
                  VÖLKE PRO STONE
                </li>
                <li>
                  <b>Страна: </b>
                  Швеция
                </li>
              </ul>

              <div className="flex gap-6.5 items-center">
                <div className="flex gap-1.5">
                  <button className="w-8.75 h-8.75 bg-(--prime) text-white flex items-center justify-center rounded-[5px] cursor-pointer">
                    -
                  </button>
                  <span className="min-w-10 h-8.75 text-[18px] bg-white border border-(--prime) rounded-[5px] grid place-content-center">
                    1
                  </span>
                  <button className="w-8.75 h-8.75 bg-(--prime) text-white flex items-center justify-center rounded-[5px] cursor-pointer">
                    +
                  </button>
                </div>

                <div className="flex flex-col text-[37px] montserrat">
                  <p>
                    <s>12500</s> тг/м²
                  </p>
                  <p>10625 тг/м²</p>
                </div>
              </div>
            </div>
          </div>
        </Group>
      </section>
      <Footer />
    </>
  );
}

export default SingleProductPage;
