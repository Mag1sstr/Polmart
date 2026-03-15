import { useState, type FormEvent } from "react";
import { useAppSelector } from "../../hooks";
import InputField from "../ui/InputField";
import ModalWrapper from "./ModalWrapper";
import { useCreateOrderMutation } from "../../store/api";
interface IProps {
  open: boolean;
  setOpen: (b: boolean) => void;
  count: number;
}
function BuyProductModal(props: IProps) {
  const product = useAppSelector((state) => state.selectProduct.product);
  const [createOrder, { isLoading, isError, isSuccess }] =
    useCreateOrderMutation();
  const [form, setForm] = useState({
    email: "",
    name: "",
    phone: "",
  });
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!product) return;
    createOrder({
      ...form,
      product_count: props.count,
      product_price: product.price,
      product_id: product._id,
      status: "new",
      product_title: product.title,
      created_at: new Date(),
    });
  };
  return (
    <ModalWrapper {...props}>
      {isSuccess ? (
        <div className="p-8.75 w-135 flex flex-col items-center">
          <img className="mb-7.5" src="/check.png" alt="check" />
          <h1 className="text-[32px] mb-3">Спасибо за заказ!</h1>
          <p>Скоро вам перезвонят.</p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="w-135 p-8.75 bg-[url(/body.webp)] flex flex-col items-center"
        >
          <h1 className="text-[32px] my-5 text-center font-bold">
            {product?.title}
          </h1>
          <p className="mb-4">
            <b>Кол-во: </b>
            {props.count}шт
          </p>
          <p className="mb-4">
            <b>Цена: </b>
            {product &&
              (product?.price - (product.price * product.discount) / 100) *
                props.count}
            тг
          </p>
          {isError && <p className="text-red-500 mb-2">Попробуйте позже</p>}
          <div className="w-full flex flex-col gap-3.75">
            <InputField
              value={form.name}
              onChange={(value) =>
                setForm((prev) => ({ ...prev, name: value }))
              }
              required
              title="Ваше имя"
            />
            <InputField
              value={form.email}
              onChange={(value) =>
                setForm((prev) => ({ ...prev, email: value }))
              }
              required
              typeInput="email"
              title="Ваша почта"
            />
            <InputField
              value={form.phone}
              onChange={(value) =>
                setForm((prev) => ({ ...prev, phone: value }))
              }
              pattern="^(\+7|7|8)[7,9]\d{9}$"
              required
              typeInput="tel"
              title="Ваш телефон"
              validateTitle="Формат: +7-xxx-xxx-xx-xx"
            />
            <button
              className={`bg-(--prime) text-white w-full h-10 cursor-pointer ${isLoading && "opacity-70"}`}
            >
              {isLoading ? "Подождите..." : "Заказать"}
            </button>
          </div>
        </form>
      )}
    </ModalWrapper>
  );
}

export default BuyProductModal;
