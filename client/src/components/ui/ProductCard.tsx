function ProductCard() {
  return (
    <article className="flex  flex-col rounded-[5px] overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.25)] bg-white">
      <div className="w-full h-[197px]">
        <img
          className="w-full h-full object-cover"
          src="https://polmart.kz/upload/resize_cache/iblock/a8a/310_232_2/a8a4548302f23e00a88e96c42f192b23.jpg"
          alt="image"
        />
      </div>
      <div className="p-5 h-full flex flex-col">
        <h3 className="text-[14px] font-bold mb-4.5">
          Ламинат VöLKE Herringbone 2094-6
        </h3>
        <ul className="text-[12px] leading-[1.15] mb-2.5">
          <li>
            <b>Цена:</b>
            13500
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
        <p className="mb-5 text-[18px] montserrat">13500 тг/м²</p>
        <button className="w-full transition-all cursor-pointer mt-auto text-(--prime) border border-(--prime) text-[15px] leading-5 h-10 hover:text-white hover:bg-(--prime)">
          Подробнее
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
