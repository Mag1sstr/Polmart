export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  CATALOG: "/catalog",
  NEWS: "/news",
  GALERY: "/galery",
  CONTACTS: "/contacts",
  PRODUCT: (id: number) => `/catalog/${id}`,
};
