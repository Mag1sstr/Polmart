import { ArrowDown, ArrowUp } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setSortType, type TSort } from "../../store/filtersSlice";

function Sort() {
  const dispatch = useAppDispatch();
  const sort = useAppSelector((state) => state.filters.sortType);

  function handlePrice() {
    dispatch(setSortType(null));
    if (sort === null) return dispatch(setSortType("asc"));
    if (sort === "asc") return dispatch(setSortType("desc"));
    return dispatch(setSortType(null));
  }
  function handleDs() {
    dispatch(setSortType(null));
    if (sort === null) return dispatch(setSortType("discountAsc"));
    if (sort === "discountAsc") return dispatch(setSortType("discountDesc"));
    return dispatch(setSortType(null));
  }
  function handleName() {
    if (sort === "name") return dispatch(setSortType(null));
    return dispatch(setSortType("name"));
  }

  function getPriceIcon(icon: TSort) {
    if (icon === "asc")
      return (
        <ArrowUp
          size={16}
          className="absolute -right-4 top-1/2 -translate-y-1/2"
        />
      );
    if (icon === "desc")
      return (
        <ArrowDown
          size={16}
          className="absolute -right-4 top-1/2 -translate-y-1/2"
        />
      );
    return null;
  }
  function getDsIcon(icon: TSort) {
    if (icon === "discountAsc")
      return (
        <ArrowUp
          size={16}
          className="absolute  -right-4 top-1/2 -translate-y-1/2"
        />
      );
    if (icon === "discountDesc")
      return (
        <ArrowDown
          size={16}
          className="absolute   -right-4 top-1/2 -translate-y-1/2"
        />
      );
    return null;
  }

  return (
    <ul className="flex gap-5 items-center select-none">
      <li>Сортировать по:</li>
      <li
        className={`relative cursor-pointer transition-all flex items-center ${sort === "name" ? "text-(--prime)" : ""}`}
        onClick={handleName}
      >
        Наименованию
      </li>
      <li
        className={`relative cursor-pointer transition-all flex items-center ${sort === "asc" || sort === "desc" ? "text-(--prime)" : ""}`}
        onClick={handlePrice}
      >
        Цене {getPriceIcon(sort)}
      </li>
      <li
        className={`relative cursor-pointer transition-all flex items-center ${sort === "discountAsc" || sort === "discountDesc" ? "text-(--prime)" : ""}`}
        onClick={handleDs}
      >
        Скидка {getDsIcon(sort)}
      </li>
    </ul>
  );
}

export default Sort;
