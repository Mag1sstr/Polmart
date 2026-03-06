import { Link } from "react-router-dom";
import CatalogBtn from "../ui/CatalogBtn";
import { NAV_LINKS } from "../../utils/constants";
import ConsultModal from "../modals/ConsultModal";
import { useState } from "react";

function Navbar() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <nav className="py-2.5 bg-[#73b211b3]">
      <ConsultModal open={openModal} setOpen={setOpenModal} />
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex gap-6">
            <CatalogBtn />

            <button
              onClick={() => setOpenModal(true)}
              className="cursor-pointer bg-[#f1f5f9] text-(--prime) text-[21px] px-5 py-2 leading-[20px] hover:opacity-70"
            >
              Заказать консультацию
            </button>
          </div>
          <ul className="flex gap-5 text-[18px] text-white ">
            {NAV_LINKS.map((link) => (
              <Link key={link.path} to={link.path}>
                <li
                  className="hover:text-(--black) transition-all cursor-pointer"
                  key={link.name}
                >
                  {link.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
