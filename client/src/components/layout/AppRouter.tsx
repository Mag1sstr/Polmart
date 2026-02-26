import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import { ROUTES } from "../../utils/routes";
import ContactsPage from "../../pages/ContactsPage";
import AboutPage from "../../pages/AboutPage";

function AppRouter() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path={ROUTES.CONTACTS} element={<ContactsPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
    </Routes>
  );
}

export default AppRouter;
