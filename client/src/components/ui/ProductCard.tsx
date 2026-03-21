import { Link, useNavigate } from "react-router-dom";
import type { Product } from "../../store/api";
import { getImage } from "../../utils/getImage";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { addToCompare, deleteCompareItem } from "../../store/compareSlice";
import type { MouseEvent } from "react";

function ProductCard(props: Product) {
  const { _id, category, images, price, title, isNew, discount } = props;
  const dispatch = useAppDispatch();
  const compareData = useAppSelector((state) => state.compare.compareData);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/catalog/${category?.slug}/${_id}`);
  };
  const isInCompare = compareData.some((el) => el._id === _id);
  const handleAddToCompare = (e: MouseEvent) => {
    e.stopPropagation();
    if (isInCompare) {
      dispatch(deleteCompareItem(_id));
    } else {
      dispatch(addToCompare(props));
    }
  };
  return (
    <article className="flex  flex-col rounded-[5px] overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.25)] bg-white">
      <div onClick={handleNavigate} className="relative w-full h-[197px]">
        {isNew && (
          <div className="absolute top-1.25 left-1.25 py-1 px-3 bg-[#73b211] rounded text-white text-[13px]">
            New
          </div>
        )}
        <div
          onClick={handleAddToCompare}
          className={`absolute bottom-2.5 right-2.5 w-8.75 h-8.75 rounded-full  cursor-pointer flex items-center justify-center ${isInCompare ? "bg-[#73b211]" : "bg-white"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            fill="none"
          >
            <path
              d="M9.01 14.65H2v1.963h7.01v2.945L13 15.632l-3.99-3.926v2.944zm5.98-.981v-2.945H22V8.76h-7.01V5.816L11 9.742l3.99 3.927z"
              fill={isInCompare ? "#fff" : "#9BD147"}
            />
          </svg>
        </div>
        <img
          className="w-full h-full object-cover"
          src={getImage(images[0]) ?? ""}
          alt="image"
        />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-[14px] font-bold mb-4.5">{title}</h3>
        <ul className="text-[12px] leading-[1.15] mb-2.5">
          <li>
            <b>Цена:</b>
            {price}
          </li>
          <li>
            <b>Коллекция:</b>
            Grand Wood Luxe
          </li>
          <li>
            <b>Производитель:</b>
            VöLKE
          </li>
          <li>
            <b>Страна:</b>
            Швеция
          </li>
          <li>
            <b>Скидка:</b>
            {discount === 0 ? "Нет" : `${discount}%`}
          </li>
        </ul>
        <p className="mb-5  text-[18px] montserrat">{price} тг/м²</p>
        <Link className="mt-auto" to={`/catalog/${category?.slug}/${_id}`}>
          <button className="w-full transition-all cursor-pointer  text-(--prime) border border-(--prime) text-[15px] leading-5 h-10 hover:text-white hover:bg-(--prime)">
            Подробнее
          </button>
        </Link>
      </div>
    </article>
  );
}

export default ProductCard;
