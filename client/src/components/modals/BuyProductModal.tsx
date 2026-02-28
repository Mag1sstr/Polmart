import InputField from "../ui/InputField";
import ModalWrapper from "./ModalWrapper";
interface IProps {
  open: boolean;
  setOpen: (b: boolean) => void;
}
function BuyProductModal(props: IProps) {
  return (
    <ModalWrapper {...props}>
      <div className="w-135 p-8.75 bg-[url(/body.webp)] flex flex-col items-center">
        <h1>Ламинат VöLKE Herringbone 2065-5</h1>
        <p>
          <b>Кол-во: </b>1шт
        </p>
        <p>
          <b>Цена: </b>13500 тг
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
