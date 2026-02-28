import clsx from "clsx";

interface IProps {
  open: boolean;
  setOpen: (b: boolean) => void;
  children: React.ReactNode;
}
function ModalWrapper({ open, setOpen, children }: IProps) {
  return (
    <div
      onMouseDown={() => setOpen(false)}
      className={`fixed inset-0 bg-[#2b2e38e6] flex items-center justify-center invisible opacity-0 z-100 transition-all ${open && "visible opacity-100"}`}
    >
      <div
        className={clsx(
          "scale-102 bg-white transition-all",
          open && "scale-100!",
        )}
        onMouseDown={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default ModalWrapper;
