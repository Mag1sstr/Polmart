import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import { ROUTES } from "../../utils/routes";
import ContactsPage from "../../pages/ContactsPage";
import AboutPage from "../../pages/AboutPage";
import SingleProductPage from "../../pages/SingleProductPage";
import AdminPage from "../../pages/AdminPage";
import CatalogPage from "../../pages/CatalogPage";

function AppRouter() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path={ROUTES.CONTACTS} element={<ContactsPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.CATALOG} element={<CatalogPage />} />
      <Route path={ROUTES.PRODUCT(":id")} element={<SingleProductPage />} />
      <Route path={ROUTES.ADMIN} element={<AdminPage />} />
    </Routes>
  );
}

export default AppRouter;
