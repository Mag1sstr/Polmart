import Footer from "../components/layout/Footer";
import Group from "../components/layout/Group";
import Header from "../components/layout/Header";
import InputField from "../components/ui/InputField";
import SeoText from "../components/ui/SeoText";

function ContactsPage() {
  return (
    <>
      <Header />
      <Group>
        <div className="max-w-[1200px] mx-auto">
          <h1 className="my-5 text-[32px] font-bold">Контакты</h1>
          <div className="flex gap-5">
            <div className="flex-1">
              <div>
                <h2 className="text-[24px] mb-2.5 font-bold">Мы находимся</h2>
                <p className="my-4">Республика Казахстан</p>
                <p className="my-4">г. Астана ул.Калдаякова 29 нп2</p>
                <p className="my-4">г. Астана ул.Кошкарбаева 29</p>
              </div>
              <div>
                <h2 className="text-[24px] mb-2.5 font-bold">
                  Контактные телефоны
                </h2>
                <b>+ 7 700 6111135</b> <br /> <b>+ 7 702 6111135</b>
              </div>
              <div>
                <a
                  href="https://www.instagram.com/laminat.parket.astana/"
                  target="_blank"
                  className="text-[24px] mb-2.5 font-bold"
                >
                  Мы в социальных сетях
                </a>
              </div>
              <form>
                <h2 className="text-[24px] mb-2.5 font-bold">Есть вопросы?</h2>
                <div className="flex flex-col gap-3.75 mb-4">
                  <InputField title="Ваше имя" />
                  <InputField title="Ваша почта" typeInput="email" />
                  <InputField textarea title="Сообщение" />
                </div>
                <button className="w-full h-10 text-white bg-(--prime) cursor-pointer">
                  Отправить
                </button>
              </form>
            </div>
            <div className="flex-2 relative h-150">
              <div className="absolute inset-0 overflow-hidden">
                <a
                  href="https://yandex.kz/maps/ru/163/astana/?utm_medium=mapframe&utm_source=maps"
                  className="text-[#eee] text-[12px] absolute top-0"
                >
                  Астана
                </a>
                <a
                  href="https://yandex.kz/maps/ru/163/astana/house/raqymzhan_qoshqarbaev_dangghyly_29/Y0gYcg5hTUEEQFtrfX1zeXxnbQ==/?ll=71.491443%2C51.128049&utm_medium=mapframe&utm_source=maps&z=17.11"
                  className="text-[#eee] text-[12px] absolute top-3.5"
                >
                  Проспект Рахимжана Кошкарбаева, 29 — Яндекс Карты
                </a>
                <iframe
                  src="https://yandex.kz/map-widget/v1/?ll=71.491443%2C51.128049&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgozMjI1NDA4ODI3ElrSmtCw0LfQsNKb0YHRgtCw0L0sINCQ0YHRgtCw0L3QsCwg0KDQsNKb0YvQvNC20LDQvSDSmtC-0YjSm9Cw0YDQsdCw0LXQsiDQtNCw0qPSk9GL0LvRiywgMjkiCg2f-45CFR-DTEI%2C&z=17.11"
                  frameBorder="1"
                  allowFullScreen={true}
                  className="relative w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </Group>
      <Group children={<SeoText />} />
      <Footer />
    </>
  );
}

export default ContactsPage;
