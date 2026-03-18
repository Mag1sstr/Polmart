function TabButton({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={`relative px-4 py-2 rounded-t  before:content-[''] before:absolute before:top-full before:left-0 before:right-0 before:h-px before:bg-white   ${
        isActive
          ? "bg-white border border-b-0"
          : "bg-slate-200 hover:bg-slate-300 before:hidden"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
export default TabButton;
