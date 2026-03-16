import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface IProps {
  label: string;
  children: React.ReactNode;
}
function DropFIlterItem({ label, children }: IProps) {
  const [open, setOpen] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (open) {
      el.style.height = el.scrollHeight + "px";
    } else {
      el.style.height = "0px";
    }
  }, [open]);

  return (
    <div>
      <p
        onClick={() => setOpen((prev) => !prev)}
        className="font-semibold flex gap-1 items-center hover:underline cursor-pointer py-1 text-[15px]"
      >
        {label}{" "}
        <ChevronDown
          size={16}
          className={`transition-all ${open && "rotate-180"}`}
        />
      </p>
      <div ref={ref} className="transition-all overflow-hidden">
        <div className="p-2 bg-white rounded-lg">{children}</div>
      </div>
    </div>
  );
}

export default DropFIlterItem;
