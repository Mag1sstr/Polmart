import { useRef, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();
  const searchValue = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate("/search");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex-1 h-10 flex items-center py-2 px-5 border-2 border-[#73b211] bg-white"
    >
      <input
        ref={searchValue}
        className="w-full h-full outline-none"
        type="text"
        placeholder="Поиск"
      />
      <img
        src="https://polmart.kz/local/templates/besser/assets/build/img/mdi_search.svg"
        alt=""
      />
    </form>
  );
}

export default Search;
