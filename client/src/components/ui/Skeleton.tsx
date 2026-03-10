interface IProps {
  type?: "card";
  count?: number;
}

function Skeleton({ count = 6, type = "card" }: IProps) {
  return (
    <ul className="grid grid-cols-3 gap-8.75 auto-rows-[440px] ">
      {[...Array(count)].map((_, i) => (
        <li className="bg-white  rounded-2xl animate-pulse  shadow-2xl  overflow-hidden flex flex-col">
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
