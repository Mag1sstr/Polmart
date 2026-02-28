import type { IModalOpen } from "../../types/types";
import InputField from "../ui/InputField";
import ModalWrapper from "./ModalWrapper";

function ConsultModal(p: IModalOpen) {
  return (
    <ModalWrapper {...p}>
      <form className="p-8.75 bg-[url(/body.webp)] flex flex-col items-center w-135">
        <h1 className="my-5 text-[32px] font-bold">Заказать консультацию</h1>
        <div className="w-full flex flex-col gap-3.75">
          <InputField title="Ваше имя" />
          <InputField title="Ваше имя" />
          <InputField title="Ваше имя" />
          <button className="bg-(--prime) text-white w-full h-10 cursor-pointer">
            Заказать
          </button>
        </div>
      </form>
    </ModalWrapper>
  );
}

export default ConsultModal;
