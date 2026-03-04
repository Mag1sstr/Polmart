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
      className={`px-4 py-2 rounded-t ${
        isActive
          ? "bg-white border border-b-0"
          : "bg-slate-200 hover:bg-slate-300"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
export default TabButton;
