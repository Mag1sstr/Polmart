import { useEffect, useState } from "react";
import Footer from "../components/layout/Footer";
import Group from "../components/layout/Group";
import Header from "../components/layout/Header";
import BuyProductModal from "../components/modals/BuyProductModal";
import { useGetSingleProductQuery } from "../store/api";
import { useParams } from "react-router-dom";
import { getImage } from "../utils/getImage";

const TABS = ["Описание", "Характеристики"];

function SingleProductPage() {
  const { productId } = useParams();
  const { data: product } = useGetSingleProductQuery(productId!);

  // const TABS = [
  //   {
  //     name: "Описание",
  //     content: (
  //       <div>
  //         <p>{product?.description}</p>
  //       </div>
  //     ),
  //   },
  //   {
  //     name: "Характеристики",
  //     content: (
  //       <div>
  //         <p>
  //           Откройте для себя преимущества использования высококачественного
  //           влагостойкого ламината с уникальной коллекцией Grand Wood Luxe.
  //           Толщина 12 мм делает его чрезвычайно стабильным и прочным. Он также
  //           может использоваться с теплым полом и позволит вам наслаждаться
  //           приятным на ощупь теплым покрытием. На комфорт пользователя также
  //           влияет синхронная структура, с четко видимым и ощутимым
  //           расположением рисунка. <br /> <br />
  //           Влагостойкий ламинат VöLKE Herringbone доступен в нескольких
  //           декорах. Они напоминают натуральное дерево светлых и темных оттенков
  //           коричневого и нежно отбеленных серых. Отдельные доски заметно
  //           отличаются друг от друга, поэтому пол выглядит естественно. Это
  //           стало возможным благодаря дополнительной пропиткой краев и защитой
  //           V-образной фаской. <br /> <br />
  //           From Sweden with love!
  //         </p>
  //       </div>
  //     ),
  //   },
  // ];

  const [count, setCount] = useState(1);
  const [currentTab, setCurrentTab] = useState(TABS[0]);
  const [openModal, setOpenModal] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);

  const handleInc = () => {
    setCount((prev) => prev + 1);
  };
  const handleDesc = () => {
    if (count <= 1) return;
    setCount((prev) => prev - 1);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <BuyProductModal open={openModal} setOpen={setOpenModal} />

      <Header />
      <section>
        <Group>
          <h1 className="text-[2rem] my-5 font-bold">{product?.title}</h1>
          <div className="flex gap-5 mb-5">
            <div className="max-w-165 w-full">
              <div className="w-full h-auto mb-5">
                <img
                  className="w-full h-full"
                  src={getImage(product?.images[currentImg]) ?? ""}
                  alt="main-img"
                />
              </div>
              <div className="flex w-full gap-1">
                {product?.images.map((image, index) => (
                  <img
                    onClick={() => setCurrentImg(index)}
                    key={String(image)}
                    className={`max-w-41.25 w-full h-[92px] cursor-pointer border-3 ${currentImg === index ? "border-(--prime)" : "border-transparent"}`}
                    src={getImage(image) ?? ""}
                    alt="main-img"
                  />
                ))}
              </div>
            </div>
            <div className="flex-1">
              <ul className="flex flex-col gap-1.25 text-[17.2px] mb-5">
                <li>
                  <b>Производитель: </b>
                  {product?.manufacturer || "Нет"}
                </li>
                <li>
                  <b>Коллекция: </b>
                  {product?.collection || "Нет"}
                </li>
                <li>
                  <b>Страна: </b>
                  {product?.country || "Нет"}
                </li>
              </ul>

              <div className="flex gap-6.5 items-center">
                <div className="flex gap-1.5">
                  <button
                    onClick={handleDesc}
                    className="w-8.75 h-8.75 bg-(--prime) text-white flex items-center justify-center rounded-[5px] cursor-pointer"
                  >
                    -
                  </button>
                  <span className="w-10 h-8.75 text-[18px] bg-white border border-(--prime) rounded-[5px] grid place-content-center">
                    <input
                      className="w-full text-center appearance-none outline-none"
                      type="number"
                      value={count <= 1 ? 1 : count}
                      onChange={(e) => setCount(+e.target.value)}
                    />
                  </span>
                  <button
                    onClick={handleInc}
                    className="w-8.75 h-8.75 bg-(--prime) text-white flex items-center justify-center rounded-[5px] cursor-pointer"
                  >
                    +
                  </button>
                </div>

                <div className="flex flex-col text-[37px] montserrat">
                  {product?.discount && product?.discount > 0 ? (
                    <>
                      <p>
                        <s>{product.price}</s> тг/м²
                      </p>
                      <p>
                        {product?.price -
                          (product.price * product.discount) / 100}{" "}
                        тг/м²
                      </p>
                    </>
                  ) : (
                    <>
                      <p>{product?.price} тг/м²</p>
                    </>
                  )}
                </div>
              </div>
              <button onClick={() => setOpenModal(true)}>купить</button>
            </div>
          </div>

          <div className="flex border-b-3 border-[#73b211] ">
            {TABS.map((tab) => (
              <div
                key={tab}
                onClick={() => setCurrentTab(tab)}
                className={`py-2 px-4 bg-[#ececec] cursor-pointer ${currentTab === tab && "text-white bg-[#73b211]!"}`}
              >
                {tab}
              </div>
            ))}
          </div>

          <div className="py-7.5">
            {currentTab === "Описание" && <div>{product?.description}</div>}
            {currentTab === "Характеристики" && (
              <div>
                Откройте для себя преимущества использования высококачественного
                влагостойкого ламината с уникальной коллекцией Grand Wood Luxe.
                Толщина 12 мм делает его чрезвычайно стабильным и прочным. Он
                также может использоваться с теплым полом и позволит вам
                наслаждаться приятным на ощупь теплым покрытием. На комфорт
                пользователя также влияет синхронная структура, с четко видимым
                и ощутимым расположением рисунка. <br /> <br />
                Влагостойкий ламинат VöLKE Herringbone доступен в нескольких
                декорах. Они напоминают натуральное дерево светлых и темных
                оттенков коричневого и нежно отбеленных серых. Отдельные доски
                заметно отличаются друг от друга, поэтому пол выглядит
                естественно. Это стало возможным благодаря дополнительной
                пропиткой краев и защитой V-образной фаской. <br /> <br />
                From Sweden with love!
              </div>
            )}
          </div>
        </Group>
      </section>
      <Footer />
    </>
  );
}

export default SingleProductPage;
