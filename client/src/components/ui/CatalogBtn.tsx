import { useState } from "react";
import { Link } from "react-router-dom";

function CatalogBtn() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="cursor-pointer bg-[#f1f5f9] text-(--prime) text-[21px] px-5 py-2.5 leading-[20px] hover:opacity-70"
      >
        Каталог
      </button>
      <ul
        className={`absolute z-10 invisible opacity-0 left-0 w-[304px] top-full mt-2.5 text-white transition-all ${open && "visible opacity-100"}`}
      >
        <li className="mb-1.25 py-1.5 px-3  rounded-[5px] bg-[#ffffffb3]">
          <Link
            className="block w-full h-full p-1.25 text-[21px] leading-6.25 bg-[url(/catalog-menu-bg.webp)] text-center bg-center bg-center bg-no-repeat "
            to={"/"}
          >
            Ламинат
          </Link>
        </li>
        <li className="mb-1.25 py-1.5 px-3  rounded-[5px] bg-[#ffffffb3]">
          <Link
            className="block w-full h-full p-1.25 text-[21px] leading-6.25 bg-[url(/catalog-menu-bg.webp)] text-center bg-center bg-center bg-no-repeat "
            to={"/"}
          >
            Ламинат
          </Link>
        </li>
        <li className="mb-1.25 py-1.5 px-3  rounded-[5px] bg-[#ffffffb3]">
          <Link
            className="block w-full h-full p-1.25 text-[21px] leading-6.25 bg-[url(/catalog-menu-bg.webp)] text-center bg-center bg-center bg-no-repeat "
            to={"/"}
          >
            Ламинат
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default CatalogBtn;
