interface IProps {
  type?: "card";
  count?: number;
}

function Skeleton({ count = 6, type = "card" }: IProps) {
  return (
    <ul className="grid grid-cols-3 gap-8.75 auto-rows-[440px] ">
      {[...Array(count)].map((_, i) => (
        <li className="bg-gray-50 rounded animate-pulse overflow-hidden flex flex-col">
          <div className="h-[197px] bg-gray-100 mb-3"></div>
          <div className="h-full p-5 flex flex-col gap-3">
            <h1 className="p-2.5 bg-gray-100 rounded"></h1>
            <p className="p-2 w-[calc(100%-20px)] bg-gray-100 rounded"></p>
            <p className="p-2 w-[calc(100%-40px)] bg-gray-100 rounded"></p>

            <button className="p-4  bg-gray-100 rounded mt-auto"></button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Skeleton;
