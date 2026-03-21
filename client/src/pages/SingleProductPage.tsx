import { useEffect, useState } from "react";
import Group from "../components/layout/Group";
import BuyProductModal from "../components/modals/BuyProductModal";
import { useGetSingleProductQuery } from "../store/api";
import { useParams } from "react-router-dom";
import { getImage } from "../utils/getImage";
import { useAppDispatch } from "../hooks";
import { setSelectProduct } from "../store/selectProductSlice";
import Skeleton from "../components/ui/Skeleton";

const TABS = ["Описание", "Характеристики"];

function SingleProductPage() {
  const dispatch = useAppDispatch();
  const { productId } = useParams();
  const {
    data: product,
    isLoading,
    isError,
  } = useGetSingleProductQuery(productId!);

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

  const handleBuy = () => {
    if (!product) return;
    setOpenModal(true);
    dispatch(setSelectProduct(product));
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <BuyProductModal open={openModal} setOpen={setOpenModal} count={count} />

      <section>
        <Group>
          {isLoading && <Skeleton type="productPage" />}
          {product && (
            <>
              <h1 className="text-[2rem] my-5 font-bold">{product?.title}</h1>
              <div className="flex gap-5 mb-5">
                <div className="max-w-165 w-full">
                  <div className="w-full h-auto mb-5 overflow-hidden">
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
                  <button
                    onClick={handleBuy}
                    className="px-4 py-2 bg-(--prime) text-white rounded my-5 cursor-pointer"
                  >
                    Купить
                  </button>
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
                  <div className="text-[18px]">
                    <div className="flex p-2.5 bg-[#ececec] not-odd:bg-[#73b21180]">
                      <p className="flex-1">Цена</p>
                      <p className="flex-1">{product.price}</p>
                    </div>
                    <div className="flex p-2.5 bg-[#ececec] not-odd:bg-[#73b21180]">
                      <p className="flex-1">Новинка</p>
                      <p className="flex-1">{product.isNew ? "Да" : "Нет"}</p>
                    </div>
                    <div className="flex p-2.5 bg-[#ececec] not-odd:bg-[#73b21180]">
                      <p className="flex-1">Страна</p>
                      <p className="flex-1">{product.country || "Нет"}</p>
                    </div>
                    <div className="flex p-2.5 bg-[#ececec] not-odd:bg-[#73b21180]">
                      <p className="flex-1">Категория</p>
                      <p className="flex-1">{product.category.name}</p>
                    </div>
                    <div className="flex p-2.5 bg-[#ececec] not-odd:bg-[#73b21180]">
                      <p className="flex-1">Производитель</p>
                      <p className="flex-1">{product.manufacturer || "Нет"}</p>
                    </div>
                    <div className="flex p-2.5 bg-[#ececec] not-odd:bg-[#73b21180]">
                      <p className="flex-1">Влагостойкость</p>
                      <p className="flex-1">
                        {product.moistureResistance ? "Да" : "Нет"}
                      </p>
                    </div>
                    <div className="flex p-2.5 bg-[#ececec] not-odd:bg-[#73b21180]">
                      <p className="flex-1">Материал</p>
                      <p className="flex-1">{product.material || "Нет"}</p>
                    </div>
                    <div className="flex p-2.5 bg-[#ececec] not-odd:bg-[#73b21180]">
                      <p className="flex-1">Коллекция</p>
                      <p className="flex-1">{product.collection || "Нет"}</p>
                    </div>
                    <div className="flex p-2.5 bg-[#ececec] not-odd:bg-[#73b21180]">
                      <p className="flex-1">Размер</p>
                      <p className="flex-1">{product.size || "Нет"}</p>
                    </div>
                    <div className="flex p-2.5 bg-[#ececec] not-odd:bg-[#73b21180]">
                      <p className="flex-1">Рисунок</p>
                      <p className="flex-1">{product.pattern || "Нет"}</p>
                    </div>
                    <div className="flex p-2.5 bg-[#ececec] not-odd:bg-[#73b21180]">
                      <p className="flex-1">Длина доски(миллиметры)</p>
                      <p className="flex-1">{product.boardLengthMm || "Нет"}</p>
                    </div>
                    <div className="flex p-2.5 bg-[#ececec] not-odd:bg-[#73b21180]">
                      <p className="flex-1">Ширина доски(миллиметры)</p>
                      <p className="flex-1">{product.boardWidthMm || "Нет"}</p>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
          {isError && <p>Попробуйте позже.</p>}
        </Group>
      </section>
    </>
  );
}

export default SingleProductPage;
