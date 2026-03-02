import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";

function Breadcrumbs() {
  const { pathname } = useLocation();
  const path = pathname.split("/").filter(Boolean);

  console.log(path);

  return (
    <section className="py-2.5 bg-[#ecececb3]">
      <div className="container">
        <ul className="flex gap-2.5">
          {path.map((str, i) => (
            <Link to={`/${str}`}>
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
                {str[0].toUpperCase() + str.slice(1)}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Breadcrumbs;
