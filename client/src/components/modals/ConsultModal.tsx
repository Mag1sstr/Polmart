import { useState, type FormEvent } from "react";
import type { IModalOpen } from "../../types/types";
import InputField from "../ui/InputField";
import ModalWrapper from "./ModalWrapper";
import { useCreateConsultMutation } from "../../store/api";

function ConsultModal(p: IModalOpen) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const [createConsult, { isSuccess, isLoading, isError }] =
    useCreateConsultMutation();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.address.length) return;
    createConsult({ ...form, createdAt: new Date(), status: "new" });
  };

  return (
    <ModalWrapper {...p}>
      {isSuccess ? (
        <div className="p-8.75 w-135 flex flex-col items-center">
          <img className="mb-7.5" src="/check.png" alt="check" />
          <h1 className="text-[32px] mb-3">Заявка отправлена!</h1>
          <p>Скоро вам перезвонят.</p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="p-8.75 bg-[url(/body.webp)] flex flex-col items-center w-135"
        >
          <h1 className="my-5 text-[32px] font-bold">Заказать консультацию</h1>
          {isError && <p className="text-red-500 mb-2">Попробуйте позже</p>}
          <div className="w-full flex flex-col gap-3.75">
            <InputField
              value={form.name}
              onChange={(value) =>
                setForm((prev) => ({ ...prev, name: value }))
              }
              title="Ваше имя"
              required
            />
            <InputField
              value={form.phone}
              onChange={(value) =>
                setForm((prev) => ({ ...prev, phone: value }))
              }
              title="Ваш телефон"
              pattern="^(\+7|7|8)[7,9]\d{9}$"
              validateTitle="Формат: +7-xxx-xxx-xx-xx"
              required
            />
            <select
              onChange={(e) =>
                setForm((prev) => ({ ...prev, address: e.target.value }))
              }
              required
              className="py-1.5 pl-3 pr-8.75 border border-(--prime) bg-white outline-none appearance-none leading-[1.5] text-(--prime) bg-[url(/arrow-down.svg)] bg-position-[right_.75rem_center] bg-size-[16px_12px] bg-no-repeat"
            >
              <option value="">Выберите адрес</option>
              <option value="Кошкарбаева 29">Кошкарбаева 29</option>
              <option value="Калдаякова 29">Калдаякова 29</option>
            </select>
            <button
              className={`bg-(--prime) text-white w-full h-10 cursor-pointer ${isLoading && "opacity-70"}`}
            >
              {isLoading ? "Подождите..." : "Отправить"}
            </button>
          </div>
        </form>
      )}
    </ModalWrapper>
  );
}

export default ConsultModal;
