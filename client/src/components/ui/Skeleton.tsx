interface IProps {
  type?: "card" | "productPage" | "news";
  count?: number;
  cols?: 3 | 4;
}

function Skeleton({ count = 6, type = "card", cols = 3 }: IProps) {
  const colsCount = {
    3: " grid-cols-3",
    4: " grid-cols-4",
  };

  if (type === "news") {
    return (
      <div className="flex flex-col gap-5">
        {[...Array(count)].map((_, i) => (
          <div key={i} className="flex gap-7.5 p-5 animate-pulse bg-white">
            <div className="w-full max-w-[346px] h-[200px] bg-[#ebe6e7] "></div>
            <div className="flex-1">
              <p className="p-2 mb-5 w-full max-w-[300px] bg-[#ebe6e7] rounded-xl"></p>
              <p className="p-2 mb-5 w-full max-w-[200px] bg-[#ebe6e7] rounded-xl"></p>
              <p className="p-2 mb-5 w-full max-w-[190px] bg-[#ebe6e7] rounded-xl"></p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (type === "productPage") {
    return (
      <div className="animate-pulse bg-white p-5">
        <p className="p-3 mb-5 w-full max-w-[300px] bg-[#ebe6e7] rounded-3xl"></p>
        <div className="flex gap-5">
          <div className="max-w-[660px] w-full">
            <div className="h-[440px] bg-[#ebe6e7] mb-5"></div>
            <div className="flex gap-2">
              <div className="flex-1 h-[92px] bg-[#ebe6e7]"></div>
              <div className="flex-1 h-[92px] bg-[#ebe6e7]"></div>
              <div className="flex-1 h-[92px] bg-[#ebe6e7]"></div>
              <div className="flex-1 h-[92px] bg-[#ebe6e7]"></div>
            </div>
          </div>
          <div className="flex-1">
            <p className="p-2 mb-5 w-full max-w-[300px] bg-[#ebe6e7] rounded-xl"></p>
            <p className="p-2 mb-5 w-full max-w-[200px] bg-[#ebe6e7] rounded-xl"></p>
            <p className="p-2 mb-5 w-full max-w-[190px] bg-[#ebe6e7] rounded-xl"></p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <ul className={`grid ${colsCount[cols]} gap-8.75 auto-rows-[440px] `}>
      {[...Array(count)].map((_, i) => (
        <li
          key={i}
          className="bg-white   animate-pulse    overflow-hidden flex flex-col"
        >
          <div className=" h-[197px] bg-[#ebe6e7] mb-3"></div>
          <div className="flex-1 p-5 flex flex-col gap-3">
            <p className="p-1.5 w-[calc(100)] bg-[#ebe6e7] rounded"></p>

            <p className="p-1.5 w-[calc(100%-60px)] bg-[#ebe6e7] rounded"></p>
            <p className="p-1.5 w-[calc(100%-90px)] bg-[#ebe6e7] rounded"></p>

            {/* <button className="p-4  bg-gray-100 rounded mt-auto"></button> */}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Skeleton;
