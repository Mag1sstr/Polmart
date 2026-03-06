import clsx from "clsx";

interface IProps {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (p: number | ((prev: number) => number)) => void;
}
function Pagination({ totalPages, currentPage, setCurrentPage }: IProps) {
  if (!totalPages) {
    return null;
  }
  const getPages = () => {
    if (totalPages <= 5) {
      return [...Array(totalPages)].map((_, i) => i + 1);
    }

    if (currentPage >= 3 && currentPage <= totalPages - 2) {
      return [
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPages,
      ];
    }
    if (currentPage > totalPages - 2) {
      return [1, "...", totalPages - 2, totalPages - 1, totalPages];
    }

    return [1, 2, 3, "...", totalPages];
  };
  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };
  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const pages = getPages();

  return (
    totalPages > 1 && (
      <section className="flex justify-center my-12.5 gap-2.5 text-[14px]">
        {currentPage > 1 && (
          <button
            onClick={handlePrev}
            className="py-1.75 px-2.5 bg-white rounded-sm cursor-pointer transition-all hover:text-white hover:bg-[#73b211] active:brightness-95"
          >
            Назад
          </button>
        )}
        <ul className="flex gap-2.5">
          {pages.map((page) =>
            page === "..." ? (
              <li className="flex items-end">...</li>
            ) : (
              <li
                onClick={() => setCurrentPage(+page)}
                className={clsx(
                  "w-7.5 h-7.5 bg-white rounded-sm grid place-content-center transition-all cursor-pointer ",
                  page === currentPage && "text-white bg-[#73b211]!",
                )}
              >
                {page}
              </li>
            ),
          )}
        </ul>
        {currentPage < totalPages && (
          <button
            onClick={handleNext}
            className="py-1.75 px-2.5 bg-white rounded-sm cursor-pointer transition-all hover:text-white hover:bg-[#73b211] active:brightness-95"
          >
            Дальше
          </button>
        )}
      </section>
    )
  );
}

export default Pagination;
