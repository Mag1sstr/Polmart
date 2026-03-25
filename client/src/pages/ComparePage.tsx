import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../components/layout/Breadcrumbs";
import Group from "../components/layout/Group";
import { useAppDispatch, useAppSelector } from "../hooks";
import { deleteCompareItem } from "../store/compareSlice";

function ComparePage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { compareData } = useAppSelector((state) => state.compare);

  const handleDelete = (id: string) => {
    dispatch(deleteCompareItem(id));
  };

  return (
    <>
      <Breadcrumbs />
      <section>
        <Group>
          <h1 className="my-5 text-[32px] font-bold">Сравнение</h1>
          <div className="flex gap-1 mb-5">
            <p className="self-center">Показаны:</p>
            <button className="py-1.75 px-2.75 font-bold grid place-content-center text-[12px] text-[#f2f2f2] bg-[#606060] shadow-[0_1px_#fff,inset_0_1px_5px_rgba(0,0,0,0.4)] rounded">
              Все характеристики
            </button>
            <button className="py-1.75 px-2.75 font-bold grid place-content-center text-[12px] border border-[#c9c9c9] rounded text-[#717171] bg-[#fefefe]">
              Только различающиеся
            </button>
          </div>
          <div className="flex overflow-auto">
            <div className="flex flex-col flex-1 max-w-[300px] font-bold">
              <div className="not-even:bg-white py-2 px-5">Название</div>
              <div className="not-even:bg-white py-2 px-5">Цена</div>
              <div className="not-even:bg-white py-2 px-5">Класс</div>
              <div className="not-even:bg-white py-2 px-5">Длина</div>
              <div className="not-even:bg-white py-2 px-5">Ширина</div>
              <div className="not-even:bg-white py-2 px-5">Упаковка</div>
              <div className="not-even:bg-white py-2 px-5">Влагостойкость</div>
              <div className="not-even:bg-white py-2 px-5">Материал</div>
              <div className="not-even:bg-white py-2 px-5">Коллекция</div>
              <div className="not-even:bg-white py-2 px-5">Производитель</div>
              <div className="not-even:bg-white py-2 px-5">Страна</div>
            </div>
            {compareData.map((el) => (
              <div key={el._id} className="flex flex-col min-w-[300px] flex-1">
                <div
                  onClick={() =>
                    navigate(`/catalog/${el.category.slug}/${el._id}`)
                  }
                  className="not-even:bg-white py-2 px-5 underline cursor-pointer whitespace-nowrap text-ellipsis overflow-hidden"
                  title={el.title}
                >
                  {el.title || "Нет"}
                </div>
                <div className="not-even:bg-white py-2 px-5">
                  {el.price || "Нет"}
                </div>
                <div className="not-even:bg-white py-2 px-5">
                  {el.class || "Нет"}
                </div>
                <div className="not-even:bg-white py-2 px-5">
                  {el.boardLengthMm || "Нет"}
                </div>
                <div className="not-even:bg-white py-2 px-5">
                  {el.boardWidthMm || "Нет"}
                </div>
                <div className="not-even:bg-white py-2 px-5">
                  {el.package || "Нет"}
                </div>
                <div className="not-even:bg-white py-2 px-5">
                  {el.moistureResistance ? "Да" : "Нет"}
                </div>
                <div className="not-even:bg-white py-2 px-5">
                  {el.material || "Нет"}
                </div>
                <div className="not-even:bg-white py-2 px-5">
                  {el.collection || "Нет"}
                </div>
                <div className="not-even:bg-white py-2 px-5">
                  {el.manufacturer || "Нет"}
                </div>

                <div className="not-even:bg-white py-2 px-5">
                  {el.country || "Нет"}
                </div>
                <div
                  onClick={() => handleDelete(el._id)}
                  className="not-even:bg-white py-2 px-5 text-blue-400 underline text-sm cursor-pointer"
                >
                  Удалить
                </div>
              </div>
            ))}
          </div>
        </Group>
      </section>
    </>
  );
}
export default ComparePage;
