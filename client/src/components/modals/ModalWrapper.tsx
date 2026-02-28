import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";

// invisible opacity-0

interface IProps {
  open: boolean;
  setOpen: (b: boolean) => void;
  children: React.ReactNode;
}
function ModalWrapper({ open, setOpen, children }: IProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={() => setOpen(false)}
          className={`fixed inset-0 bg-[#2b2e38e6] flex items-center justify-center  z-100 transition-all`}
        >
          <motion.div
            initial={{ transform: "scale(1.03)" }}
            animate={{ transform: "scale(1)" }}
            exit={{ transform: "scale(.97)" }}
            className={clsx(
              "scale-102 bg-white transition-all",
              open && "scale-100!",
            )}
            onMouseDown={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ModalWrapper;
