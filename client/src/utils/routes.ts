export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  CATALOG: "/catalog",
  NEWS: "/news",
  GALERY: "/galery",
  CONTACTS: "/contacts",
  ADMIN: "/admin",
  PRODUCT: (id: string) => `/product/${id}`,
  CATALOG_PRODUCTS: (id: string) => `${ROUTES.CATALOG}/${id}`,
};
