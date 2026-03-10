import { useAppSelector } from "../../hooks";
import InputField from "../ui/InputField";
import ModalWrapper from "./ModalWrapper";
interface IProps {
  open: boolean;
  setOpen: (b: boolean) => void;
  count: number;
}
function BuyProductModal(props: IProps) {
  const product = useAppSelector((state) => state.selectProduct.product);
  return (
    <ModalWrapper {...props}>
      <div className="w-135 p-8.75 bg-[url(/body.webp)] flex flex-col items-center">
        <h1 className="text-[32px] my-5 text-center font-bold">
          {product?.title}
        </h1>
        <p className="mb-4">
          <b>Кол-во: </b>
          {props.count}шт
        </p>
        <p className="mb-4">
          <b>Цена: </b>
          {product && product?.price * props.count} тг
        </p>

        <div className="w-full flex flex-col gap-3.75">
          <InputField title="Ваше имя" />
          <InputField title="Ваше имя" />
          <InputField title="Ваше имя" />
          <button className="bg-(--prime) text-white w-full h-10 cursor-pointer">
            Заказать
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
}

export default BuyProductModal;
