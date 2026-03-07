import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import type { Product } from "../../store/api";
import { getImage } from "../../utils/getImage";

interface IProps extends Product {}

function ProductCard({ _id, category, images, price, title, isNew }: IProps) {
  return (
    <article className="flex  flex-col rounded-[5px] overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.25)] bg-white">
      <Link to={`/catalog/${category?.slug}/${_id}`}>
        <div className="relative w-full h-[197px] ">
          <div className="absolute top-1.25 left-1.25 py-1 px-3 bg-[#73b211] rounded text-white text-[13px]">
            New
          </div>
          <img
            className="w-full h-full object-cover"
            src={getImage(images[0]) ?? ""}
            alt="image"
          />
        </div>
      </Link>
      <div className="p-5 h-full flex flex-col">
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
            <b>Цена за:</b>
            тг/м²
          </li>
        </ul>
        <p className="mb-5 text-[18px] montserrat">{price} тг/м²</p>
        <Link to={`/catalog/${category?.slug}/${_id}`}>
          <button className="w-full transition-all cursor-pointer mt-auto text-(--prime) border border-(--prime) text-[15px] leading-5 h-10 hover:text-white hover:bg-(--prime)">
            Подробнее
          </button>
        </Link>
      </div>
    </article>
  );
}

export default ProductCard;
