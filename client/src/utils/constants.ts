import type { ProductFilters } from "../store/api";
import { ROUTES } from "./routes";

export const NAV_LINKS = [
  { name: "Главная", path: ROUTES.HOME },
  { name: "О компании", path: ROUTES.ABOUT },
  { name: "Каталог", path: ROUTES.CATALOG },
  { name: "Новости", path: ROUTES.NEWS },
  { name: "Галерея", path: ROUTES.GALERY },
  { name: "Контакты", path: ROUTES.CONTACTS },
];

type FilterNames = keyof ProductFilters;

export const filterNames: Partial<Record<FilterNames, string>> = {
  country: "Страна",
  moistureResistance: "Влагостойкость",
};
