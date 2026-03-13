import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";
import Sort from "../ui/Sort";

const breadcrumbsNames: Record<string, string> = {
  catalog: "Каталог",
  news: "Новости",
  product: "Продукт",
  galery: "Галерея",
  about: "О компании",
  contacts: "Контакты",
  laminate: "Ламинат",
  parquet: "Паркет",
};

interface IProps {
  sort?: boolean;
}

function Breadcrumbs({ sort }: IProps) {
  const { pathname } = useLocation();
  const path = pathname.split("/").filter(Boolean);

  return (
    <section className="py-2.5 bg-[#ecececb3]">
      <div className="container">
        <div className="flex justify-between items-center">
          <ul className="flex gap-2.5">
            {path.map((str, i) => {
              const to = "/" + path.slice(0, i + 1).join("/");

              return (
                <Link key={str} to={to}>
                  <li
                    className={clsx(
                      "first-letter:uppercase flex gap-2.5 items-center underline cursor-pointer",
                      str === path.at(-1) &&
                        "text-(--prime) cursor-text no-underline!",
                    )}
                  >
                    {i > 0 && (
                      <svg
                        width="9"
                        height="12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1.427l5.5 4.878L1 11.183"
                          stroke="#C4C4C4"
                          strokeWidth="2"
                        />
                      </svg>
                    )}
                    {breadcrumbsNames[str] || str}
                  </li>
                </Link>
              );
            })}
          </ul>
          {sort && <Sort />}
        </div>
      </div>
    </section>
  );
}

export default Breadcrumbs;
