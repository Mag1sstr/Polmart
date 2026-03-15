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
            <a
              href="tel:+77006111135"
              className="flex flex-col self-start mt-2"
            >
              <p className="text-white text-[21px]">8 700 611 11 35</p>
              <p className="text-[14px] text-(--prime) leading-5">
                Обратный звонок
              </p>
            </a>
          </div>
        </div>
      </header>
      <Navbar />
    </>
  );
}

export default Header;
