import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="py-7.5 bg-[#424242e6] border-t-10 border-[#73b211]">
      <div className="container">
        <div className="flex flex-wrap text-[18px] text-white mb-7.5">
          <div className="mx-7.5 flex-2 flex flex-col">
            <Link className="mb-5 block" to={"/"}>
              <img
                width={292}
                src="https://polmart.kz/local/templates/besser/assets/build/img/POLMART.svg"
                alt="logo"
              />
            </Link>
            <a className="mb-7.5 block" href="tel:+7 702 611 11 35">
              +7 700 611 11 35
            </a>
            <a className="mb-7.5 block" href="tel:+7 702 611 11 35">
              +7 700 611 11 35
            </a>

            <p className="mb-5 text-[20px]">
              Республика Казахстан , г. Астана ул.Калдаякова 29 нп2
            </p>
            <p className="mb-5 text-[20px]">
              Республика Казахстан , г. Астана ул.Калдаякова 29 нп2
            </p>
            <p className="font-bold text-[1rem]">
              "Все права защищены" © 2017-2026{" "}
            </p>
          </div>
          <div className="mx-7.5 flex-1 text-[20px]">
            <h3 className="mb-7.5 font-bold">Наши товары</h3>
            <ul className="flex flex-col gap-3.25">
              <li>Паркет</li>
              <li>Ламинат</li>
              <li>Виниловые полы</li>
              <li>Плинтуса</li>
              <li>Двери</li>
              <li>Подложка</li>
              <li>Теплый пол</li>
            </ul>
          </div>
          <div className="mx-7.5 flex-1 text-[20px]">
            <h3 className="mb-7.5 font-bold">Наши услуги</h3>
            <ul className="flex flex-col gap-3.25">
              <li>Выезд специалиста</li>
              <li>Укладка ламината</li>
              <li>Хранение на складе</li>
              <li>Доставка и оплата</li>
              <li>Виртуальный дизайнер</li>
            </ul>
          </div>
          <div className="mx-7.5 flex-1 text-[20px]">
            <h3 className="mb-7.5 font-bold">Информация</h3>
            <ul className="flex flex-col gap-3.25">
              <li>Как заказать</li>
              <li>Сотрудничество</li>
              <li>Сертификаты</li>
              <li>Наши партнеры</li>
              <li>Дизайнеры</li>
            </ul>
          </div>
          <div className="mx-7.5 flex-1 text-[20px]">
            <h3 className="mb-7.5 font-bold">Контакты</h3>
            <ul className="flex flex-col gap-3.25">
              <li>Адреса салонов</li>
              <li>Карта сайта</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
