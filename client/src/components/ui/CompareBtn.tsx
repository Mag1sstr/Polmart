import { useAppSelector } from "../../hooks";

function CompareBtn() {
  const compareData = useAppSelector((state) => state.compare.compareData);
  return (
    !!compareData.length && (
      <div className="fixed z-20 right-1.25 top-100 bg-white/70 rounded py-5 ">
        <div className="w-9.5 h-9.5 mx-4.75 mb-2.5 grid place-content-center border-2 border-(--prime) rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            fill="none"
          >
            <path
              d="M9.01 14.65H2v1.963h7.01v2.945L13 15.632l-3.99-3.926v2.944zm5.98-.981v-2.945H22V8.76h-7.01V5.816L11 9.742l3.99 3.927z"
              fill="#9BD147"
            />
          </svg>
        </div>
        <p className="text-center text-[14px]">
          Сравнить <br /> товары
        </p>
      </div>
    )
  );
}

export default CompareBtn;
