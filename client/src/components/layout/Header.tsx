import { Link } from "react-router-dom";
import Search from "../ui/Search";
import Navbar from "./Navbar";

function Header() {
  return (
    <>
      <header className="bg-black/70 py-11">
        <div className="container">
          <div className="flex gap-5 items-center">
            <Link to={"/"}>
              <img
                width={382}
                src="https://polmart.kz/local/templates/besser/assets/build/img/POLMART.svg"
                alt="logo"
                className="mr-3.25"
              />
            </Link>
            <Search />
            <div className="flex flex-col self-start mt-2">
              <a className="text-white text-[21px]" href="tel:+77006111135">
                8 700 611 11 35
              </a>
              <p className="text-[14px] text-(--prime) leading-5">
                Обратный звонок
              </p>
            </div>
          </div>
        </div>
      </header>
      <Navbar />
    </>
  );
}

export default Header;
