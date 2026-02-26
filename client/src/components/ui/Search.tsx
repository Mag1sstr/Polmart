function Search() {
  return (
    <div className="flex-1 h-10 flex items-center py-2 px-5 border-2 border-[#73b211] bg-white">
      <input
        className="w-full h-full outline-none"
        type="text"
        placeholder="Поиск"
      />
      <img
        src="https://polmart.kz/local/templates/besser/assets/build/img/mdi_search.svg"
        alt=""
      />
    </div>
  );
}

export default Search;
